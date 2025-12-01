import React from 'react'
import { useParams } from 'react-router-dom'

export default function Section() {
    const { section } = useParams();
    const title = section ? section.charAt(0).toUpperCase() + section.slice(1) : 'Section';

    return (
        <div style={{ padding: '2rem 0', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', textTransform: 'capitalize' }}>{title}</h1>
            <p style={{ fontSize: '1.2rem', color: '#666', marginTop: '1rem' }}>Coming soon...</p>
        </div>
    )
}
