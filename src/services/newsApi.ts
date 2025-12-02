import { apiGet } from './apiClient';
import { NewsArticle, CategorySlug } from '../types/news';

// DTO from API
interface ArticleDTO {
    id: number;
    slug: string;
    title: string;
    summary: string;
    content: string;
    category: {
        slug: string;
        name: string;
    };
    tag?: string;
    publishedAt: string;
    heroImageUrl?: string;
}

// Map DTO to NewsArticle
function mapArticleDTO(dto: ArticleDTO): NewsArticle {
    return {
        id: dto.id,
        slug: dto.slug,
        title: dto.title,
        summary: dto.summary,
        content: dto.content,
        category: dto.category.slug as CategorySlug,
        tag: dto.tag,
        publishedAt: dto.publishedAt,
        heroImageUrl: dto.heroImageUrl,
    };
}

export async function fetchLatestArticles(): Promise<NewsArticle[]> {
    try {
        const articles = await apiGet<ArticleDTO[]>('/articles');
        return articles.map(mapArticleDTO);
    } catch (error) {
        console.error('Failed to fetch latest articles:', error);
        throw new Error('Failed to load articles');
    }
}

export async function fetchArticlesByCategory(category: CategorySlug): Promise<NewsArticle[]> {
    try {
        const articles = await apiGet<ArticleDTO[]>(`/articles?category=${category}`);
        return articles.map(mapArticleDTO);
    } catch (error) {
        console.error(`Failed to fetch articles for category ${category}:`, error);
        throw new Error('Failed to load articles');
    }
}

export async function fetchArticleBySlug(slug: string): Promise<NewsArticle | null> {
    try {
        const article = await apiGet<ArticleDTO>(`/articles/${slug}`);
        return mapArticleDTO(article);
    } catch (error) {
        console.error(`Failed to fetch article ${slug}:`, error);
        return null;
    }
}
