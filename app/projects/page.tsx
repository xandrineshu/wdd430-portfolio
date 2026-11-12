import Link from 'next/link';
import { Suspense } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { getProjects } from '@/lib/projects-db';
import type { Project } from '@/lib/projects-db';

async function ProjectList({ type }: { type?: string }) {
    const projects: Project[] = await getProjects(type);

    if (projects.length === 0) {
        return <p className="text-gray-500 text-center py-8">No projects found.</p>;
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
        <div className="mt-4 mb-8 pb-6 border-b border-pink-200">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
                ⋆.❀° Projects Directory
            </h1>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Explore my school projects and open-source contributions.
            </p>

            {/* Filter Navigation Box with exact pink palette */}
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

// Inner async component to safely unwrap searchParams
async function FilteredProjects({
    searchParams,
}: {
    searchParams: Promise<{ type?: string }>;
}) {
    const resolvedSearchParams = await searchParams;
    const filterType = resolvedSearchParams.type;

    return (
        <>
            <ProjectsHeader currentType={filterType} />
            <Suspense
                fallback={
                    <div className="grid gap-6 animate-pulse">
                        <div className="h-40 rounded-2xl bg-pink-50 border border-pink-100 p-6" />
                        <div className="h-40 rounded-2xl bg-pink-50 border border-pink-100 p-6" />
                    </div>
                }
            >
                <ProjectList type={filterType} />
            </Suspense>
        </>
    );
}

// The default export MUST be a synchronous React Component
export default function ProjectsPage({
    searchParams,
}: {
    searchParams: Promise<{ type?: string }>;
}) {
    return (
        <main className="max-w-4xl mx-auto px-4 py-8">
            <Suspense fallback={
                <div className="animate-pulse space-y-6">
                    <div className="h-24 bg-pink-100 rounded-xl" />
                    <div className="h-40 bg-pink-50 rounded-2xl" />
                </div>
            }>
                <FilteredProjects searchParams={searchParams} />
            </Suspense>
        </main>
    );
}