import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// GET /api/articles - List all articles with optional category filter
router.get('/', async (req, res) => {
    try {
        const { category } = req.query;

        const articles = await prisma.article.findMany({
            where: category
                ? {
                    category: {
                        slug: category as string
                    }
                }
                : undefined,
            include: {
                category: true
            },
            orderBy: {
                publishedAt: 'desc'
            }
        });

        res.json(articles);
    } catch (error) {
        console.error('Error fetching articles:', error);
        res.status(500).json({ error: 'Failed to fetch articles' });
    }
});

// GET /api/articles/:slugOrId - Get single article by slug or ID
router.get('/:slugOrId', async (req, res) => {
    try {
        const { slugOrId } = req.params;
        const id = parseInt(slugOrId);

        // If it's a number, assume ID. Otherwise assume slug.
        // Note: Slugs shouldn't be just numbers ideally.
        const where = !isNaN(id) ? { id } : { slug: slugOrId };

        const article = await prisma.article.findUnique({
            where: where as any,
            include: {
                category: true
            }
        });

        if (!article) {
            return res.status(404).json({ error: 'Article not found' });
        }

        res.json(article);
    } catch (error) {
        console.error('Error fetching article:', error);
        res.status(500).json({ error: 'Failed to fetch article' });
    }
});

// POST /api/articles - Create new article (TODO: Add auth middleware)
router.post('/', async (req, res) => {
    try {
        const { slug, title, summary, content, categoryId, tag, heroImageUrl } = req.body;

        const article = await prisma.article.create({
            data: {
                slug,
                title,
                summary,
                content,
                categoryId,
                tag,
                heroImageUrl
            },
            include: {
                category: true
            }
        });

        res.status(201).json(article);
    } catch (error) {
        console.error('Error creating article:', error);
        res.status(500).json({ error: 'Failed to create article' });
    }
});

// PUT /api/articles/:id - Update article (TODO: Add auth middleware)
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { slug, title, summary, content, categoryId, tag, heroImageUrl } = req.body;

        const article = await prisma.article.update({
            where: { id: parseInt(id) },
            data: {
                slug,
                title,
                summary,
                content,
                categoryId,
                tag,
                heroImageUrl
            },
            include: {
                category: true
            }
        });

        res.json(article);
    } catch (error) {
        console.error('Error updating article:', error);
        res.status(500).json({ error: 'Failed to update article' });
    }
});

// DELETE /api/articles/:id - Delete article (TODO: Add auth middleware)
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        await prisma.article.delete({
            where: { id: parseInt(id) }
        });

        res.status(204).send();
    } catch (error) {
        console.error('Error deleting article:', error);
        res.status(500).json({ error: 'Failed to delete article' });
    }
});

export { router as articlesRouter };
