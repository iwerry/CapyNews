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
   VITE_API_URL=http://localhost:4000/api
   ```
   *(Se você não tiver o backend rodando, o site abrirá mas não carregará notícias).*

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```
   Acesse `http://localhost:5173`.

## Scripts

- `npm run dev`: Inicia servidor local de desenvolvimento.
- `npm run build`: Gera build de produção em `dist/`.
- `npm run preview`: Visualiza o build gerado localmente.

## Configuração na Vercel

Este projeto está pronto para deploy na Vercel como uma aplicação estática.

### Configurações do Projeto

- **Root Directory**: `/`
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

### Variáveis de Ambiente

Configure a seguinte variável de ambiente no painel da Vercel:

- **`VITE_API_URL`**: URL da API de produção
  - Exemplo: `https://capynews-api.exemplo.com/api`
  - Sem esta variável, o site tentará usar `http://localhost:4000/api` (que não funcionará em produção)

## Arquitetura

Este frontend consome dados de uma API REST externa. Todas as chamadas HTTP são centralizadas em `src/services/apiClient.ts`, que usa a variável de ambiente `VITE_API_URL` para determinar o endpoint da API.

### Endpoints Consumidos

- `GET /articles` - Lista todos os artigos
- `GET /articles?category={slug}` - Filtra artigos por categoria
- `GET /articles/{slug}` - Busca artigo individual por slug
- `GET /categories` - Lista todas as categorias

## Desenvolvimento

O projeto usa:
- **React 18** com TypeScript
- **React Router** para navegação
- **Vite** como bundler
- **Lucide React** para ícones

Para mais informações sobre o backend e painel administrativo, consulte o repositório separado.
