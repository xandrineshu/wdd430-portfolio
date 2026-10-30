interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}

export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
    return (
        <article className="p-6 border-l-4 border-[#8FBC8F] bg-[#F9FAF8] rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
            <p className="text-sm text-gray-500 mb-4">
                <strong className="text-gray-700">✿ Technologies:</strong> {technologies.join(', ')}
            </p>
            {link && (
                <div>
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-sm font-semibold text-[#556B2F] hover:underline"
                    >
                        View Project &rarr;
                    </a>
                </div>
            )}
        </article>
    );
}