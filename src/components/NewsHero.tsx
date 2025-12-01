import React from 'react';

export default function NewsHero() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ width: '100%', aspectRatio: '2/1', backgroundColor: '#eee', overflow: 'hidden' }}>
                <img
                    src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1600&auto=format&fit=crop"
                    alt="Hero"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>
            <div style={{ marginTop: '0.5rem' }}>
                <span style={{ color: '#2196f3', fontWeight: 'bold', fontSize: '0.85rem', textTransform: 'uppercase' }}>Ukraine</span>
                <h2 style={{ fontSize: '2rem', fontWeight: '800', lineHeight: '1.1', margin: '0.5rem 0' }}>
                    Russia launches close to 600 drones on Ukraine killing three
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#555', margin: 0 }}>
                    Massive drone attack targets energy infrastructure across the country as winter approaches.
                </p>
            </div>
        </div>
    );
}
