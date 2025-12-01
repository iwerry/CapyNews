import React from 'react';
import { CategorySlug } from '../types/news';
import { getLatestArticles, getArticlesByCategory } from '../data/news';
import NewsHero from './NewsHero';
import NewsSidebar from './NewsSidebar';

interface NewsSectionProps {
    title: string;
    category?: CategorySlug;
}

export default function NewsSection({ title, category }: NewsSectionProps) {
    const articles = category ? getArticlesByCategory(category) : getLatestArticles();

    if (articles.length === 0) {
        return (
            <div style={{ padding: '2rem 0', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3.5rem', fontWeight: '900', letterSpacing: '-2px', lineHeight: 1 }}>{title}</h1>
                <p style={{ fontSize: '1.2rem', color: '#666', marginTop: '1rem' }}>No articles found in this section.</p>
            </div>
        );
    }

    const heroArticle = articles[0];
    const sidebarArticles = articles.slice(1, 4); // Take next 3 articles

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
