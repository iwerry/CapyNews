# CapyNews (Frontend)

Site público do jornal CapyNews, desenvolvido em React + TypeScript + Vite.
Este é apenas o **frontend** - ele consome uma API externa para exibir as notícias.

## 🏗️ Arquitetura

- **Frontend**: Este repositório (SPA estática)
- **Backend + Admin**: Repositório separado (API + Painel Administrativo)
- **Comunicação**: Via API REST usando `VITE_API_URL`

## 🚀 Desenvolvimento Local

### Pré-requisitos

1. Node.js instalado
2. API do CapyNews rodando (em outro projeto/terminal)

### Setup

1. **Clone e instale dependências**:
   ```bash
   git clone https://github.com/iwerry/CapyNews.git
   cd CapyNews
   npm install
   ```

2. **Configure a API**:
   ```bash
   # Copie o arquivo de exemplo
   cp .env.example .env.local
   
   # Edite .env.local e configure a URL da API:
   # VITE_API_URL=http://localhost:4000/api
   ```

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```
   
   Acesse `http://localhost:5173`

### Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Gera build de produção em `dist/`
- `npm run preview` - Visualiza o build localmente

## ☁️ Deploy na Vercel

### Configuração do Projeto (capynews2025)

No painel da Vercel, configure:

- **Root Directory**: `/`
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

### Variáveis de Ambiente

Configure a seguinte variável no painel da Vercel:

| Variável | Valor | Descrição |
|----------|-------|-----------|
| `VITE_API_URL` | `https://sua-api.exemplo.com/api` | URL pública da API em produção |

**⚠️ Importante**: Sem esta variável configurada, o site tentará usar `http://localhost:4000/api` e não funcionará em produção.

### Passos para Deploy

1. Conecte o repositório GitHub à Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push na branch `main`

## 🔧 Tecnologias

- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **React Router** - Navegação SPA
- **Lucide React** - Ícones

## 📡 API

O frontend consome os seguintes endpoints:

- `GET /articles` - Lista todos os artigos
- `GET /articles?category={slug}` - Filtra por categoria
- `GET /articles/{slug}` - Busca artigo individual
- `GET /categories` - Lista categorias

Todas as chamadas são centralizadas em `src/services/apiClient.ts`.

## 📁 Estrutura do Projeto

```
CapyNews/
├── src/
│   ├── components/     # Componentes React
│   ├── pages/          # Páginas/rotas
│   ├── services/       # Cliente HTTP e API
│   ├── types/          # Tipos TypeScript
│   └── styles/         # Estilos globais
├── public/             # Assets estáticos
├── .env.example        # Exemplo de variáveis de ambiente
└── package.json
```

## 🐛 Troubleshooting

### "Failed to load articles"

Se você ver esta mensagem:
1. Verifique se a API está rodando
2. Confirme que `VITE_API_URL` está configurado corretamente
3. A mensagem de erro mostrará a URL que está sendo usada

### Build falha na Vercel

1. Verifique se `VITE_API_URL` está configurada nas variáveis de ambiente
2. Confirme que a URL da API é acessível publicamente
3. Revise os logs de build no painel da Vercel

## 📝 Notas

- Este projeto **não** contém backend ou painel administrativo
- O código não possui dados mockados - tudo vem da API
- A URL da API é configurável via variável de ambiente
- Em desenvolvimento, use `.env.local` (não commitado)
- Em produção, configure no painel da Vercel

## 🔗 Links

- **Produção**: https://capynews2025.vercel.app/
- **Repositório**: https://github.com/iwerry/CapyNews
