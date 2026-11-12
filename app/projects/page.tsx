// app/projects/page.tsx
import Link from 'next/link';
import { Suspense } from 'react';
import ProjectCard from '@/components/ProjectCard';
import ProjectSearch from '@/components/ProjectSearch';
import Pagination from '@/components/Pagination';
import { fetchFilteredProjects, fetchProjectsPages } from '@/lib/projects-db';
import type { Project } from '@/lib/projects-db';

async function ProjectList({ query, currentPage, type }: { query: string; currentPage: number; type?: string }) {
    const projects: Project[] = await fetchFilteredProjects(query, currentPage, type);

    if (projects.length === 0) {
        return <p className="text-gray-500 text-center py-8">No projects found matching your search.</p>;
    }

    return (
        <div className="grid gap-6">
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description ?? ''}
                    technologies={project.technologies ?? []}
                    link={project.link ?? undefined}
                />
            ))}
        </div>
    );
}

function ProjectsHeader({ currentType }: { currentType?: string }) {
    return (
        <div className="mt-4 mb-6 pb-6 border-b border-pink-200">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
                ⋆.❀° Projects Directory
            </h1>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Explore my school projects and open-source contributions.
            </p>

            {/* Filter Navigation Tabs */}
            <div className="inline-flex gap-1 bg-[#FFF0F3] p-1.5 rounded-xl border border-[#FFB6C1]/60 shadow-sm">
                <Link
                    href="/projects"
                    className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${!currentType
                        ? 'bg-[#FFB6C1] text-gray-900 shadow-sm font-semibold'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-[#FFB6C1]/20'
                        }`}
                >
                    All
                </Link>
                <Link
                    href="/projects?type=school"
                    className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${currentType === 'school'
                        ? 'bg-[#FFB6C1] text-gray-900 shadow-sm font-semibold'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-[#FFB6C1]/20'
                        }`}
                >
                    School
                </Link>
                <Link
                    href="/projects?type=opensource"
                    className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${currentType === 'opensource'
                        ? 'bg-[#FFB6C1] text-gray-900 shadow-sm font-semibold'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-[#FFB6C1]/20'
                        }`}
                >
                    Open Source
                </Link>
            </div>
        </div>
    );
}

// Inner async component handling searchParams promise & data queries
async function FilteredProjects({
    searchParams,
}: {
    searchParams: Promise<{ query?: string; page?: string; type?: string }>;
}) {
    const resolvedParams = await searchParams;
    const query = resolvedParams.query || '';
    const currentPage = Number(resolvedParams.page) || 1;
    const filterType = resolvedParams.type;

    const totalPages = await fetchProjectsPages(query, filterType);

    return (
        <>
            <ProjectsHeader currentType={filterType} />
            <ProjectSearch />

            <Suspense
                fallback={
                    <div className="grid gap-6 animate-pulse">
                        <div className="h-40 rounded-2xl bg-pink-50 border border-pink-100 p-6" />
                        <div className="h-40 rounded-2xl bg-pink-50 border border-pink-100 p-6" />
                    </div>
                }
            >
                <ProjectList query={query} currentPage={currentPage} type={filterType} />
            </Suspense>

            <Pagination totalPages={totalPages} />
        </>
    );
}

// Main synchronous page component wrapper
export default function ProjectsPage({
    searchParams,
}: {
    searchParams: Promise<{ query?: string; page?: string; type?: string }>;
}) {
    return (
        <main className="max-w-4xl mx-auto px-4 py-8">
            <Suspense fallback={
                <div className="animate-pulse space-y-6">
                    <div className="h-24 bg-pink-100 rounded-xl" />
                    <div className="h-12 bg-pink-50 rounded-xl" />
                    <div className="h-40 bg-pink-50 rounded-2xl" />
                </div>
            }>
                <FilteredProjects searchParams={searchParams} />
            </Suspense>
        </main>
    );
}