import SkillCard from '@/components/SkillCard';

export default function About() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">.⋆❀° About Me</h2>
            <p className="text-lg text-gray-700 mb-8">
                Mabuhay! This AboutMe page shares more information about my background and work.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-gray-800">₊⊹ My Expertise ⊹₊</h3>

            <SkillCard
                category="˚˖𓍢ִ໋`🌿 Frontend Development"
                skills={['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3']}
            />

            <SkillCard
                category="˚˖𓍢ִ໋`🌱 Backend & Database"
                skills={['Node.js', 'Express', 'MongoDB Atlas', 'REST APIs']}
            />
        </div>
    );
}