import { apiGet, apiPost, apiPut, apiDelete } from './apiClient';
import { NewsArticle } from '../types/news';

export async function fetchArticles(): Promise<NewsArticle[]> {
    return apiGet<NewsArticle[]>('/articles');
}

export async function fetchArticleById(id: number): Promise<NewsArticle> {
    return apiGet<NewsArticle>(`/articles/${id}`); // Note: Backend needs to support ID or we filter? Backend has /:slug usually for public, but let's see. 
    // The prompt says: GET /api/articles/:id is available in backend.
    // Wait, the backend implementation in server/src/routes/articles.ts had:
    // router.get('/:slug', ...) which treats the param as slug.
    // But router.put('/:id', ...) treats it as ID.
    // I might need to check if the backend supports GET by ID.
    // Looking at the backend code I wrote:
    // router.get('/:slug', async (req, res) => { const { slug } = req.params; ... where: { slug } ... })
    // It seems GET only supports slug.
    // However, for admin, editing by ID is safer if slug changes.
    // But if I only have GET /:slug, I might need to use that or update backend.
    // The prompt says: "GET /api/articles/:id" in the list of endpoints for adm-capy prompt.
    // BUT in the backend implementation step, I wrote:
    // router.get('/:slug', ...)
    // I should probably update the backend to support ID or Slug, OR just use slug for now if unique.
    // Actually, let's check the backend code again.
    // It definitely does `where: { slug }`.
    // If I pass an ID like '1', it will look for slug '1'.
    // I should probably fix the backend to be more flexible or add a specific ID endpoint.
    // OR, since I am in the "adm-capy" step, I can assume I should use what's available or fix it.
    // Let's assume for now I can fetch by slug if I have it, or I'll just fetch all and find by ID if needed (inefficient).
    // BETTER: I will add a check in the backend or just use slug for fetch.
    // But wait, the edit page usually takes an ID.
    // Let's stick to the plan. I'll implement fetchArticleById but it might fail if backend expects slug.
    // Actually, let's look at `fetchArticles` list. It returns the full objects including slugs.
    // So when I click edit, I can pass the slug to the URL if I want.
    // But the prompt says: "Botão 'Edit' → /admin/articles/:id/edit".
    // And "Carrega dados de GET /api/articles/:id".
    // So I really should have GET /api/articles/:id.
    // I will quickly patch the backend to support GET /:id if it looks like a number.
}

export async function createArticle(data: Partial<NewsArticle>): Promise<NewsArticle> {
    return apiPost<NewsArticle>('/articles', data);
}

export async function updateArticle(id: number, data: Partial<NewsArticle>): Promise<NewsArticle> {
    return apiPut<NewsArticle>(`/articles/${id}`, data);
}

export async function deleteArticle(id: number): Promise<void> {
    return apiDelete(`/articles/${id}`);
}
