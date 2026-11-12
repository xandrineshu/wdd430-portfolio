// components/ProjectList.tsx
import ProjectCard from './ProjectCard';
import { getProjects } from '@/lib/projects-db';

interface ProjectListProps {
    type?: string;
}

export default async function ProjectList({ type }: ProjectListProps) {
    // This will hit the 2-second delay we added for testing!
    const projects = await getProjects(type);

    if (projects.length === 0) {
        return <p className="text-gray-500 text-center py-8">No projects found.</p>;
    }

    return (
        <section className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto px-4">
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description ?? ''}
                    technologies={project.technologies ?? []}
                    link={project.link ?? undefined}
                />
            ))}
        </section>
    );
}