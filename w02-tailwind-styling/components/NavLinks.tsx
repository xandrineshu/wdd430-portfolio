'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <nav aria-label="Primary" className="flex gap-6 text-sm font-medium">
            <Link
                href="/"
                className={pathname === '/' ? 'text-pink-600 font-bold underline' : 'text-gray-600 hover:text-pink-600'}
                aria-current={pathname === '/' ? 'page' : undefined}
            >
                Home
            </Link>
            <Link
                href="/about"
                className={pathname === '/about' ? 'text-pink-600 font-bold underline' : 'text-gray-600 hover:text-pink-600'}
                aria-current={pathname === '/about' ? 'page' : undefined}
            >
                About Us
            </Link>
            <Link
                href="/contact"
                className={pathname === '/contact' ? 'text-pink-600 font-bold underline' : 'text-gray-600 hover:text-pink-600'}
                aria-current={pathname === '/contact' ? 'page' : undefined}
            >
                Contact
            </Link>
            <Link
                href="/projects"
                className={pathname.startsWith('/projects') ? 'text-pink-600 font-bold underline' : 'text-gray-600 hover:text-pink-600'}
                aria-current={pathname.startsWith('/projects') ? 'page' : undefined}
            >
                Projects
            </Link>
        </nav>
    );
}