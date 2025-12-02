import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import LoginPage from './routes/LoginPage';
import ArticlesListPage from './routes/ArticlesListPage';
import ArticleFormPage from './routes/ArticleFormPage';

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<LoginPage />} />

      {/* Redirect root to login */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Protected Admin Routes */}
      <Route path="/admin" element={<Layout />}>
        <Route index element={<Navigate to="/admin/articles" replace />} />
        <Route path="articles" element={<ArticlesListPage />} />
        <Route path="articles/new" element={<ArticleFormPage />} />
        <Route path="articles/:id/edit" element={<ArticleFormPage />} />
      </Route>

      {/* Catch all */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
