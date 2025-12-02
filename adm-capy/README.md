# CapyNews Admin (adm-capy)

Painel administrativo para o CapyNews.

## Como rodar localmente

1. **Backend**:
   Certifique-se de que o backend está rodando em `http://localhost:4000`.
   ```bash
   cd ../server
   npm run dev
   ```

2. **Admin Panel**:
   ```bash
   npm install
   npm run dev
   ```
   Acesse `http://localhost:5174` (ou a porta que o Vite indicar).

## Login

- **Email**: `admin@capynews.com`
- **Senha**: `CapyNews2025!`

## Funcionalidades

- Listar artigos
- Criar novo artigo
- Editar artigo existente
- Excluir artigo

## Configuração

O painel se conecta à API definida em `.env.local`:
```env
VITE_API_URL="http://localhost:4000/api"
```

## Deploy na Vercel

Para fazer deploy deste painel na Vercel:

- **Root Directory**: `adm-capy`
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Environment Variables**:
  - `VITE_API_URL`: URL da sua API em produção (ex: `https://capynews-api.onrender.com/api`)
