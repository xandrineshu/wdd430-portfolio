import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-[#FFB6C1] text-gray-800 py-4 shadow-sm">
            <nav className="max-w-5xl mx-auto px-6 flex justify-between items-center">
                <div id="header-title" className="text-xl text-white font-bold tracking-wide">
                    ⋆.ೃ࿔🌸 Jelina Alexandrine Concha
                </div>
                <ul className="flex gap-6 font-medium">
                    <li><Link href="/" className="text-white hover:text-black transition-colors">Home</Link></li>
                    <li><Link href="/about" className="text-white hover:text-black transition-colors">About</Link></li>
                </ul>
            </nav>
        </header>
    );
}