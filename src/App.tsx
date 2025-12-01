import React from 'react'
import Header from './components/Header'
import NewsHero from './components/NewsHero'
import NewsSidebar from './components/NewsSidebar'

function App() {
    return (
        <div style={{ backgroundColor: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <main className="container" style={{ padding: '2rem 1rem', flex: 1 }}>
                <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: '900', letterSpacing: '-2px', lineHeight: 1 }}>News</h1>
                    <div style={{ color: '#2196f3', fontWeight: 'bold', fontSize: '0.9rem', marginTop: '0.5rem', letterSpacing: '1px' }}>WORLD</div>
                </div>

                <div className="news-grid">
                    <NewsHero />
                    <NewsSidebar />
                </div>
            </main>
        </div>
    )
}

export default App
