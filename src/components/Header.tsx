import React from 'react';
import { Menu, Search, Globe, FileText, Mic, Video, CloudSun, Radio } from 'lucide-react';
import NavBar from './NavBar';

export default function Header() {
    return (
        <header style={{ position: 'sticky', top: 0, zIndex: 100 }}>
            {/* Top Gray Bar */}
            <div style={{ backgroundColor: '#e0e0e0', color: '#333', padding: '0.4rem 0', fontSize: '0.85rem', borderBottom: '1px solid #ccc' }}>
                <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', cursor: 'pointer' }}><Globe size={14} /> English</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', cursor: 'pointer' }}><FileText size={14} /> Explainers</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', cursor: 'pointer' }}><FileText size={14} /> Special reports</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', cursor: 'pointer' }}><Mic size={14} /> Podcast</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', cursor: 'pointer' }}><Video size={14} /> Video</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', cursor: 'pointer' }}><CloudSun size={14} /> Weather</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', cursor: 'pointer' }}><Search size={14} /> Search</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#d32f2f', fontWeight: 'bold', cursor: 'pointer' }}><Radio size={14} /> Live</span>
                    </div>
                </div>
            </div>

            {/* Main Header Area (Black) */}
            <div style={{ backgroundColor: '#000', color: '#fff' }}>
                <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
                    {/* Hamburger */}
                    <div style={{ padding: '1rem 1rem 1rem 0', cursor: 'pointer', borderRight: '1px solid #333', marginRight: '1rem' }}>
                        <Menu size={28} />
                    </div>

                    {/* Logo Placeholder */}
                    <div style={{ width: '50px', height: '50px', backgroundColor: '#d500f9', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem' }}>
                        {/* Pink Square */}
                    </div>

                    {/* NavBar Component (Integrated here or below? Prompt said "Logo abaixo, uma navbar preta". I'll put it here for a cleaner look or below.) */}
                    {/* If I put it here, it's side-by-side. If below, it's a new row. */}
                    {/* "Logo abaixo, uma navbar preta" -> "Below [that], a black navbar". */}
                    {/* So I will put the NavBar in a separate row below the logo row if I follow strictly. */}
                    {/* But usually "Logo abaixo" refers to the position relative to the gray bar? */}
                    {/* Let's assume the navbar is a separate row below the logo row. */}
                </div>
            </div>

            {/* Navbar Row */}
            <NavBar />
        </header>
    );
}
