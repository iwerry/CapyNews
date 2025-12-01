import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
    'Latest', 'World', 'Business', 'Tourism', 'Culture', 'Health', 'Science', 'Green', 'Lifestyle', 'Weather'
];

export default function NavBar() {
    return (
        <nav style={{ backgroundColor: '#000', color: '#fff' }}>
            <div className="container" style={{
                display: 'flex',
                gap: '1.5rem',
                overflowX: 'auto',
                whiteSpace: 'nowrap',
                padding: '0.8rem 0',
                scrollbarWidth: 'none'
            }}>
                {categories.map(cat => {
                    const path = cat === 'Latest' ? '/' : `/${cat.toLowerCase()}`;
                    return (
                        <Link key={cat} to={path} style={{ fontSize: '1rem', fontWeight: 'bold', textTransform: 'capitalize', color: 'inherit', textDecoration: 'none' }}>
                            {cat}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
