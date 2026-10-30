interface SkillCardProps {
    category: string;
    skills: string[];
}

export default function SkillCard({ category, skills }: SkillCardProps) {
    return (
        <article className="p-6 border-l-4 border-[#8FBC8F] bg-[#F9FAF8] rounded-xl shadow-sm hover:shadow-md transition-shadow mb-6">
            <h3 className="text-xl font-bold mb-3 text-gray-800">{category}</h3>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="bg-[#E8F0E6] text-[#4F6F23] text-sm font-medium px-3.5 py-1 rounded-full border border-[#D5E3D0]"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </article>
    );
}