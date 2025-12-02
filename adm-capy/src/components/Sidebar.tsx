import React from 'react';
import { NavLink } from 'react-router-dom';
import { FileText, PlusCircle } from 'lucide-react';

export default function Sidebar() {
    const linkStyle = ({ isActive }: { isActive: boolean }) => ({
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '0.75rem 1rem',
        textDecoration: 'none',
        color: isActive ? '#2196f3' : '#333',
        backgroundColor: isActive ? '#e3f2fd' : 'transparent',
        borderRadius: '4px',
        marginBottom: '0.5rem',
        fontWeight: isActive ? 500 : 400
    });

    return (
        <aside style={{ width: '250px', backgroundColor: '#f9f9f9', borderRight: '1px solid #eee', padding: '1.5rem' }}>
            <nav>
                <NavLink to="/admin/articles" end style={linkStyle}>
                    <FileText size={20} />
                    Articles
                </NavLink>
                <NavLink to="/admin/articles/new" style={linkStyle}>
                    <PlusCircle size={20} />
                    New Article
                </NavLink>
            </nav>
        </aside>
    );
}
