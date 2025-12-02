import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

export default function Layout() {
    const token = localStorage.getItem('admToken');

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Header />
            <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
                <Sidebar />
                <main style={{ flex: 1, padding: '2rem', overflowY: 'auto', backgroundColor: '#fff' }}>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
