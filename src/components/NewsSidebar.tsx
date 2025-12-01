import React from 'react';

const newsItems = [
    {
        category: 'No Comment',
        title: "Pope Leo XIV visits Istanbul's Blue Mosque for a brief moment of prayer",
        image: 'https://images.unsplash.com/photo-1548625361-e88c60eb83fe?q=80&w=400&auto=format&fit=crop'
    },
    {
        category: 'Top News Stories Today',
        title: "Latest news bulletin | November 29th, 2025 - Midday",
        image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=400&auto=format&fit=crop'
    },
    {
        category: 'USA',
        title: "US halts all asylum decisions and pauses visas for Afghan nationals",
        image: 'https://images.unsplash.com/photo-1508612761958-e931d843bdd5?q=80&w=400&auto=format&fit=crop'
    }
];

export default function NewsSidebar() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {newsItems.map((item, index) => (
                <div key={index} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '120px', height: '80px', flexShrink: 0, backgroundColor: '#eee' }}>
                        <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                        <div style={{ color: '#2196f3', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '0.2rem' }}>{item.category}</div>
                        <div style={{ fontSize: '0.95rem', fontWeight: '700', lineHeight: '1.3' }}>{item.title}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
