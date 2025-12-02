import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';

export default function Header() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('admToken');
        navigate('/login');
    };

    return (
        <header style={{
            height: '60px',
            backgroundColor: '#fff',
            borderBottom: '1px solid #eee',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 2rem'
        }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>CapyNews Admin</div>
            <button
                onClick={handleLogout}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    color: '#666'
                }}
            >
                <LogOut size={18} />
                Logout
            </button>
        </header>
    );
}
