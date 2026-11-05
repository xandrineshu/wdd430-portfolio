import { getProjects } from '@/lib/projects-db';

export default function ProjectsPage() {
    const projects = getProjects();

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Projects Overview</h2>
            <div className="grid gap-4">
                {projects.map((p: any) => (
                    <div key={p.id} className="rounded-lg border bg-white p-4 shadow-sm">
                        <h3 className="text-lg font-semibold text-pink-600">{p.title}</h3>
                        <p className="text-sm text-gray-600">{p.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}