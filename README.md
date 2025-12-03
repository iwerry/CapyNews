# CapyNews (Frontend)

Este repositório contém apenas o **frontend público** do CapyNews, desenvolvido em React + TypeScript + Vite.
Ele consome uma API externa para exibir as notícias.

## Estrutura

O projeto é uma SPA (Single Page Application) estática.
- Não possui backend embutido.
- Não possui painel administrativo (estes ficam em outro repositório).

## Como rodar localmente

Para rodar este frontend, você precisará de uma API rodando (seja localmente em outro terminal ou em um servidor remoto).

1. **Instale as dependências**:
   ```bash
   npm install
   ```

2. **Configure a API**:
   Crie um arquivo `.env.local` na raiz com a URL da API:
   ```env
   VITE_API_URL="http://localhost:4000/api"
   ```
   *(Se você não tiver o backend rodando, o site abrirá mas não carregará notícias).*

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```
   Acesse `http://localhost:5173`.

## Configuração na Vercel

Este projeto está pronto para deploy na Vercel como uma aplicação estática.

- **Root Directory**: `/`
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Environment Variables**:
  - `VITE_API_URL`: URL da API de produção (ex: `https://api.capynews.com/api`)

## Scripts

- `npm run dev`: Inicia servidor local.
- `npm run build`: Gera build de produção em `dist/`.
- `npm run preview`: Visualiza o build gerado.
