# CapyNews Server

Backend API for CapyNews built with Node.js, TypeScript, Express, and Prisma with SQLite.

## Setup

1. **Copy environment variables**:
   ```bash
   cp .env.example .env
   ```

2. **Install dependencies**:
   ```bash
   cd server
   npm install
   ```

3. **Generate Prisma Client**:
   ```bash
   npm run prisma:generate
   ```

4. **Run database migrations**:
   ```bash
   npm run prisma:migrate
   ```

5. **Seed the database**:
   ```bash
   npm run prisma:seed
   ```

6. **Start development server**:
   ```bash
   npm run dev
   ```

The API will be available at `http://localhost:4000`.

## API Endpoints

### Articles

- `GET /api/articles` - List all articles
  - Query params: `?category=world` (optional)
- `GET /api/articles/:slug` - Get article by slug
- `POST /api/articles` - Create new article (TODO: Add auth)
- `PUT /api/articles/:id` - Update article (TODO: Add auth)
- `DELETE /api/articles/:id` - Delete article (TODO: Add auth)

### Categories

- `GET /api/categories` - List all categories

### Health Check

- `GET /health` - API health status

## Database

The project uses SQLite with Prisma ORM. The database file is located at `data/dev.db`.

### Schema

- **Category**: News categories (World, Business, Tourism, etc.)
- **Article**: News articles with title, content, images, etc.

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run prisma:generate` - Generate Prisma Client
- `npm run prisma:migrate` - Run database migrations
- `npm run prisma:seed` - Seed database with initial data

## Future Enhancements

- Add authentication middleware for POST/PUT/DELETE endpoints
- Implement pagination for article listing
- Add image upload functionality
- Migrate to PostgreSQL for production (DigitalOcean)
