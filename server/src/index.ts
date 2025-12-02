import express from 'express';
import cors from 'cors';
import { articlesRouter } from './routes/articles';
import { categoriesRouter } from './routes/categories';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/articles', articlesRouter);
app.use('/api/categories', categoriesRouter);

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'CapyNews API is running' });
});

// Start server
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`🚀 CapyNews API running on http://localhost:${port}`);
    console.log(`📊 Health check: http://localhost:${port}/health`);
    console.log(`📰 Articles: http://localhost:${port}/api/articles`);
    console.log(`📁 Categories: http://localhost:${port}/api/categories`);
});
