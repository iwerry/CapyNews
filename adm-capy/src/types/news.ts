export type CategorySlug =
    | "latest"
    | "world"
    | "business"
    | "tourism"
    | "culture"
    | "health"
    | "science"
    | "green"
    | "lifestyle";

export interface NewsArticle {
    id: number;
    slug: string;
    title: string;
    summary: string;
    content: string;
    category: {
        slug: string;
        name: string;
    };
    categoryId: number;
    tag?: string;
    publishedAt: string; // ISO string
    heroImageUrl?: string;
}

export interface Category {
    id: number;
    slug: string;
    name: string;
}
