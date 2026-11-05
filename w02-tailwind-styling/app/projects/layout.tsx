import Link from 'next/link';

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="mx-auto max-w-4xl p-6">
            {/* Section-specific sub-navigation */}
            <nav className="mb-6 flex gap-4 border-b pb-4 text-sm font-medium text-gray-600">
                <Link href="/projects" className="hover:text-pink-600">Overview</Link>
                <span>|</span>
                <Link href="/projects/opensource" className="hover:text-pink-600">Open Source</Link>
                <span>|</span>
                <Link href="/projects/school" className="hover:text-pink-600">School</Link>
            </nav>

            {/* Renders the active sub-page content */}
            {children}
        </section>
    );
}