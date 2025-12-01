import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Section from './pages/Section'
import ArticlePage from './pages/ArticlePage'

function App() {
    return (
        <BrowserRouter>
            <div style={{ backgroundColor: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Header />
                <main className="container" style={{ padding: '2rem 1rem', flex: 1 }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/article/:slug" element={<ArticlePage />} />
                        <Route path="/:section" element={<Section />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    )
}

export default App
