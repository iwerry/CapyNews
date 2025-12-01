import React from 'react';
import { Link } from 'react-router-dom';
import { NewsArticle } from '../types/news';

interface NewsHeroProps {
    article: NewsArticle;
}

export default function NewsHero({ article }: NewsHeroProps) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ width: '100%', aspectRatio: '2/1', backgroundColor: '#eee', overflow: 'hidden' }}>
                <Link to={`/article/${article.slug}`}>
                    <img
                        src={article.heroImageUrl || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1600&auto=format&fit=crop"}
                        alt={article.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </Link>
            </div>
            <div style={{ marginTop: '0.5rem' }}>
                <span style={{ color: '#2196f3', fontWeight: 'bold', fontSize: '0.85rem', textTransform: 'uppercase' }}>
                    {article.tag || article.category}
                </span>
                <h2 style={{ fontSize: '2rem', fontWeight: '800', lineHeight: '1.1', margin: '0.5rem 0' }}>
                    <Link to={`/article/${article.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        {article.title}
                    </Link>
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#555', margin: 0 }}>
                    {article.summary}
                </p>
            </div>
        </div>
    );
}
