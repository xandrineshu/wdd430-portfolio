// components/Pagination.tsx
'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Pagination({ totalPages }: { totalPages: number }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;

    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    };

    if (totalPages <= 1) return null;

    return (
        <div className="flex justify-center items-center gap-3 mt-8">
            <Link
                href={createPageURL(currentPage - 1)}
                className={`px-4 py-2 rounded-xl text-sm font-medium border transition-colors ${currentPage <= 1
                        ? 'pointer-events-none opacity-40 bg-gray-100 text-gray-400 border-gray-200'
                        : 'bg-[#FFF0F3] text-gray-700 border-[#FFB6C1]/60 hover:bg-[#FFB6C1]/30'
                    }`}
                aria-disabled={currentPage <= 1}
            >
                Previous
            </Link>

            <span className="text-sm font-medium text-gray-700 px-2">
                Page {currentPage} of {totalPages}
            </span>

            <Link
                href={createPageURL(currentPage + 1)}
                className={`px-4 py-2 rounded-xl text-sm font-medium border transition-colors ${currentPage >= totalPages
                        ? 'pointer-events-none opacity-40 bg-gray-100 text-gray-400 border-gray-200'
                        : 'bg-[#FFF0F3] text-gray-700 border-[#FFB6C1]/60 hover:bg-[#FFB6C1]/30'
                    }`}
                aria-disabled={currentPage >= totalPages}
            >
                Next
            </Link>
        </div>
    );
}