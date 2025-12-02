import React, { useState, useEffect } from 'react';
import { CategorySlug, NewsArticle } from '../types/news';
import { fetchLatestArticles, fetchArticlesByCategory } from '../services/newsApi';
import NewsHero from './NewsHero';
import NewsSidebar from './NewsSidebar';

interface NewsSectionProps {
    title: string;
    category?: CategorySlug;
}

export default function NewsSection({ title, category }: NewsSectionProps) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [articles, setArticles] = useState<NewsArticle[]>([]);

    useEffect(() => {
        async function loadArticles() {
            setLoading(true);
            setError(null);

            try {
                const data = category
                    ? await fetchArticlesByCategory(category)
                    : await fetchLatestArticles();

                setArticles(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load articles');
            } finally {
                setLoading(false);
            }
        }

        loadArticles();
    }, [category]);

    if (loading) {
        return (
            <div style={{ padding: '2rem 0', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3.5rem', fontWeight: '900', letterSpacing: '-2px', lineHeight: 1 }}>{title}</h1>
                <p style={{ fontSize: '1.2rem', color: '#666', marginTop: '1rem' }}>Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ padding: '2rem 0', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3.5rem', fontWeight: '900', letterSpacing: '-2px', lineHeight: 1 }}>{title}</h1>
                <p style={{ fontSize: '1.2rem', color: '#d32f2f', marginTop: '1rem' }}>{error}</p>
                <p style={{ fontSize: '1rem', color: '#666', marginTop: '0.5rem' }}>
                    Make sure the API server is running on http://localhost:4000
                </p>
            </div>
        );
    }

    if (articles.length === 0) {
        return (
            <div style={{ padding: '2rem 0', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3.5rem', fontWeight: '900', letterSpacing: '-2px', lineHeight: 1 }}>{title}</h1>
                <p style={{ fontSize: '1.2rem', color: '#666', marginTop: '1rem' }}>No articles found in this section.</p>
            </div>
        );
    }

    const heroArticle = articles[0];
    const sidebarArticles = articles.slice(1, 4);

    return (
        <>
            <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                <h1 style={{ fontSize: '3.5rem', fontWeight: '900', letterSpacing: '-2px', lineHeight: 1 }}>{title}</h1>
                {category && category !== 'latest' && (
                    <div style={{ color: '#2196f3', fontWeight: 'bold', fontSize: '0.9rem', marginTop: '0.5rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                        {category}
                    </div>
                )}
            </div>

            <div className="news-grid">
                <NewsHero article={heroArticle} />
                <NewsSidebar articles={sidebarArticles} />
            </div>
        </>
    );
}
