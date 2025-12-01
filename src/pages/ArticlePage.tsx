import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { getArticleBySlug } from '../data/news'

export default function ArticlePage() {
    const { slug } = useParams<{ slug: string }>();

    if (!slug) {
        return <Navigate to="/" replace />;
    }

    const article = getArticleBySlug(slug);

    if (!article) {
        return (
            <div style={{ padding: '2rem 0', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Article not found</h1>
                <p style={{ fontSize: '1.2rem', color: '#666', marginTop: '1rem' }}>
                    The article you're looking for doesn't exist.
                </p>
                <Link to="/" style={{ color: '#2196f3', fontSize: '1.1rem', marginTop: '1rem', display: 'inline-block' }}>
                    ← Back to Home
                </Link>
            </div>
        );
    }

    const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <article style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 0' }}>
            {/* Breadcrumb */}
            <div style={{ marginBottom: '1rem' }}>
                <Link
                    to={`/${article.category}`}
                    style={{
                        color: '#2196f3',
                        fontSize: '0.9rem',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        textDecoration: 'none'
                    }}
                >
                    ← {article.category}
                </Link>
            </div>

            {/* Title */}
            <h1 style={{
                fontSize: '3rem',
                fontWeight: '900',
                lineHeight: '1.1',
                marginBottom: '1rem',
                letterSpacing: '-1px'
            }}>
                {article.title}
            </h1>

            {/* Meta info */}
            <div style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
                marginBottom: '2rem',
                paddingBottom: '1rem',
                borderBottom: '1px solid #eee',
                fontSize: '0.95rem',
                color: '#666'
            }}>
                <span>{formattedDate}</span>
                {article.tag && (
                    <>
                        <span>•</span>
                        <span style={{ color: '#2196f3', fontWeight: 'bold' }}>{article.tag}</span>
                    </>
                )}
            </div>

            {/* Hero Image */}
            {article.heroImageUrl && (
                <div style={{
                    width: '100%',
                    aspectRatio: '16/9',
                    backgroundColor: '#eee',
                    overflow: 'hidden',
                    marginBottom: '2rem',
                    borderRadius: '4px'
                }}>
                    <img
                        src={article.heroImageUrl}
                        alt={article.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
            )}

            {/* Summary */}
            <p style={{
                fontSize: '1.25rem',
                fontWeight: '500',
                lineHeight: '1.6',
                color: '#333',
                marginBottom: '2rem'
            }}>
                {article.summary}
            </p>

            {/* Content */}
            <div style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: '#444'
            }}>
                {article.content.split('\n').map((paragraph, index) => (
                    <p key={index} style={{ marginBottom: '1.5rem' }}>
                        {paragraph}
                    </p>
                ))}
            </div>

            {/* Back link */}
            <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #eee' }}>
                <Link
                    to={`/${article.category}`}
                    style={{
                        color: '#2196f3',
                        fontSize: '1rem',
                        textDecoration: 'none',
                        fontWeight: '500'
                    }}
                >
                    ← More from {article.category}
                </Link>
            </div>
        </article>
    );
}
