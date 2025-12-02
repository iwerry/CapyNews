import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchArticles, deleteArticle } from '../services/articlesApi';
import { NewsArticle } from '../types/news';
import { Edit, Trash2 } from 'lucide-react';

export default function ArticlesListPage() {
    const [articles, setArticles] = useState<NewsArticle[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const loadArticles = async () => {
        setLoading(true);
        try {
            const data = await fetchArticles();
            setArticles(data);
        } catch (err) {
            setError('Failed to load articles');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadArticles();
    }, []);

    const handleDelete = async (id: number) => {
        if (window.confirm('Are you sure you want to delete this article?')) {
            try {
                await deleteArticle(id);
                loadArticles();
            } catch (err) {
                alert('Failed to delete article');
            }
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div style={{ color: 'red' }}>{error}</div>;

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>Articles</h1>
                <Link
                    to="/admin/articles/new"
                    style={{
                        backgroundColor: '#2196f3',
                        color: '#fff',
                        padding: '0.5rem 1rem',
                        borderRadius: '4px',
                        textDecoration: 'none',
                        fontWeight: 'bold'
                    }}
                >
                    New Article
                </Link>
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ borderBottom: '2px solid #eee', textAlign: 'left' }}>
                        <th style={{ padding: '1rem' }}>Title</th>
                        <th style={{ padding: '1rem' }}>Category</th>
                        <th style={{ padding: '1rem' }}>Published At</th>
                        <th style={{ padding: '1rem', textAlign: 'right' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map(article => (
                        <tr key={article.id} style={{ borderBottom: '1px solid #eee' }}>
                            <td style={{ padding: '1rem' }}>{article.title}</td>
                            <td style={{ padding: '1rem' }}>
                                <span style={{
                                    backgroundColor: '#e3f2fd',
                                    color: '#1976d2',
                                    padding: '0.25rem 0.5rem',
                                    borderRadius: '12px',
                                    fontSize: '0.85rem',
                                    textTransform: 'capitalize'
                                }}>
                                    {article.category.name}
                                </span>
                            </td>
                            <td style={{ padding: '1rem' }}>
                                {new Date(article.publishedAt).toLocaleDateString()}
                            </td>
                            <td style={{ padding: '1rem', textAlign: 'right' }}>
                                <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                                    <Link
                                        to={`/admin/articles/${article.id}/edit`}
                                        style={{
                                            color: '#666',
                                            padding: '0.25rem',
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Edit size={18} />
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(article.id)}
                                        style={{
                                            border: 'none',
                                            background: 'transparent',
                                            color: '#d32f2f',
                                            cursor: 'pointer',
                                            padding: '0.25rem',
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
