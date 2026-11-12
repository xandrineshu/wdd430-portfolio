// lib/projects-db.ts
import { sql } from '@vercel/postgres';

export interface Project {
    id: number;
    title: string;
    description: string;
    type: 'opensource' | 'school';
    technologies: string[];
    link?: string;
}

// Set to 5 items per page for a comfortable grid layout
export const ITEMS_PER_PAGE = 5;

// Fetch filtered and paginated projects (searching title, description, and technologies)
export async function fetchFilteredProjects(query: string, currentPage: number, type?: string | null): Promise<Project[]> {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    const searchParam = `%${query}%`;

    if (type) {
        const { rows } = await sql<Project>`
            SELECT * FROM projects 
            WHERE type = ${type}
            AND (
                title ILIKE ${searchParam} 
                OR description ILIKE ${searchParam} 
                OR array_to_string(technologies, ' ') ILIKE ${searchParam}
            )
            ORDER BY id 
            LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
        `;
        return rows;
    }

    const { rows } = await sql<Project>`
        SELECT * FROM projects 
        WHERE 
            title ILIKE ${searchParam} 
            OR description ILIKE ${searchParam} 
            OR array_to_string(technologies, ' ') ILIKE ${searchParam}
        ORDER BY id 
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;
    return rows;
}

// Fetch total pages for pagination controls
export async function fetchProjectsPages(query: string, type?: string | null): Promise<number> {
    const searchParam = `%${query}%`;

    let countResult;
    if (type) {
        countResult = await sql`
            SELECT COUNT(*) FROM projects 
            WHERE type = ${type}
            AND (
                title ILIKE ${searchParam} 
                OR description ILIKE ${searchParam} 
                OR array_to_string(technologies, ' ') ILIKE ${searchParam}
            )
        `;
    } else {
        countResult = await sql`
            SELECT COUNT(*) FROM projects 
            WHERE 
                title ILIKE ${searchParam} 
                OR description ILIKE ${searchParam} 
                OR array_to_string(technologies, ' ') ILIKE ${searchParam}
        `;
    }

    const totalCount = Number(countResult.rows[0].count);
    return Math.ceil(totalCount / ITEMS_PER_PAGE);
}

// Keep existing helper functions
export async function getProjects(type?: string | null): Promise<Project[]> {
    if (type) {
        const { rows } = await sql<Project>`
            SELECT * FROM projects WHERE type = ${type} ORDER BY id
        `;
        return rows;
    }
    const { rows } = await sql<Project>`SELECT * FROM projects ORDER BY id`;
    return rows;
}

export async function getProjectById(id: number): Promise<Project | null> {
    const { rows } = await sql<Project>`
        SELECT * FROM projects WHERE id = ${id}
    `;
    return rows[0] ?? null;
}