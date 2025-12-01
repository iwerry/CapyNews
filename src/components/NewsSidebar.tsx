import React from 'react';
import { Link } from 'react-router-dom';
import { NewsArticle } from '../types/news';

interface NewsSidebarProps {
    articles: NewsArticle[];
}

export default function NewsSidebar({ articles }: NewsSidebarProps) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {articles.map((item) => (
                <div key={item.id} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '120px', height: '80px', flexShrink: 0, backgroundColor: '#eee' }}>
                        <Link to={`/article/${item.slug}`}>
                            <img
                                src={item.heroImageUrl || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=400&auto=format&fit=crop'}
                                alt={item.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </Link>
                    </div>
                    <div>
                        <div style={{ color: '#2196f3', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                            {item.tag || item.category}
                        </div>
                        <div style={{ fontSize: '0.95rem', fontWeight: '700', lineHeight: '1.3' }}>
                            <Link to={`/article/${item.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                {item.title}
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
