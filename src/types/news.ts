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
    category: CategorySlug;
    tag?: string;
    publishedAt: string; // ISO string
    heroImageUrl?: string;
}
