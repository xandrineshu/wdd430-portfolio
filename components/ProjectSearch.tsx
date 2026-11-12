// components/ProjectSearch.tsx
'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function ProjectSearch() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams.toString());

        // CRITICAL REQUIREMENT: Always reset to page 1 on every new search query
        params.set('page', '1');

        if (term.trim()) {
            params.set('query', term);
        } else {
            params.delete('query');
        }

        replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <div className="relative flex flex-1 shrink-0 mb-6">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                id="search"
                // key ensures the input re-renders if URL search query changes externally
                key={searchParams.get('query')?.toString()}
                className="peer block w-full rounded-xl border border-[#FFB6C1]/60 bg-[#FFF0F3] py-2 pl-4 pr-4 text-sm text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFB6C1]"
                placeholder="Search projects by title, description, or tech..."
                onChange={(e) => handleSearch(e.target.value)}
                defaultValue={searchParams.get('query')?.toString() || ''}
            />
        </div>
    );
}