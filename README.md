# CapyNews

Site de notícias CapyNews com frontend React + TypeScript + Vite e backend Node.js + Express + Prisma.

## Estrutura do Projeto

- `/` - Frontend (React + TypeScript + Vite)
- `/server` - Backend API (Node.js + Express + Prisma + SQLite)

## Como rodar localmente (com API)

### 1. Iniciar o Backend

Em um terminal:

```bash
cd server
npm install
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
npm run dev
```

A API estará disponível em `http://localhost:4000`

### 2. Iniciar o Frontend

Em outro terminal (na raiz do projeto):

```bash
npm install
npm run dev
```

O site estará disponível em `http://localhost:5173`

### Configuração da API

O frontend usa a variável de ambiente `VITE_API_URL` para se conectar à API. 

Crie um arquivo `.env.local` na raiz com:

```env
VITE_API_URL=http://localhost:4000/api
```

Se não configurado, o padrão é `http://localhost:4000/api`.

## Como fazer build e preview

```bash
npm run build
npm run preview
```

## Como configurar na Vercel

* Root Directory: `/`
* Framework preset: Vite
* Build Command: `npm run build`
* Output Directory: `dist`

**Nota**: Para produção, você precisará configurar a variável de ambiente `VITE_API_URL` apontando para a URL da API em produção.
