import React from 'react';

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
                {categories.map(cat => (
                    <a key={cat} href="#" style={{ fontSize: '1rem', fontWeight: 'bold', textTransform: 'capitalize' }}>{cat}</a>
                ))}
            </div>
        </nav>
    );
}
