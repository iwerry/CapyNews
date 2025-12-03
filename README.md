# CapyNews - Frontend

Site público do jornal CapyNews. Este repositório contém **apenas o frontend** - uma aplicação React que consome uma API externa.

## 📋 Sobre o Projeto

- **Frontend**: Este repositório (React + TypeScript + Vite)
- **Backend + Admin**: Repositório separado (API Node.js + Painel Admin)
- **Produção**: https://capynews2025.vercel.app

## 🚀 Desenvolvimento Local

### Pré-requisitos

- Node.js 18+ instalado
- API do CapyNews rodando (em outro projeto)

### Configuração

1. **Clone e instale**:
   ```bash
   git clone https://github.com/iwerry/CapyNews.git
   cd CapyNews
   npm install
   ```

2. **Configure a API**:
   ```bash
   # Copie o arquivo de exemplo
   cp .env.example .env.local
   ```
   
   Edite `.env.local` e configure:
   ```env
   VITE_API_URL=http://localhost:4000/api
   ```

3. **Inicie o servidor**:
   ```bash
   npm run dev
   ```
   
   Acesse http://localhost:5173

### Scripts

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build de produção
- `npm run preview` - Preview do build

## ☁️ Deploy na Vercel

### Configuração do Projeto

No painel da Vercel, configure:

| Configuração | Valor |
|--------------|-------|
| **Root Directory** | `/` (raiz do repositório) |
| **Framework Preset** | Vite |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |

### Variáveis de Ambiente

**OBRIGATÓRIO**: Configure a variável de ambiente no painel da Vercel:

```
VITE_API_URL=https://sua-api-em-producao.com/api
```

**⚠️ IMPORTANTE**: 
- Sem esta variável, o site tentará usar `http://localhost:4000/api` e falhará em produção
- A URL deve apontar para a API pública (será definida quando o backend estiver no ar)
- Não invente URLs - use apenas a URL real da API quando ela estiver disponível

### Passos para Deploy

1. Conecte o repositório GitHub à Vercel
2. Configure a variável `VITE_API_URL` (quando a API estiver disponível)
3. Deploy automático a cada push

## 🔧 Estrutura do Projeto

```
CapyNews/
├── src/
│   ├── components/      # Componentes React (Header, NewsSection, etc)
│   ├── pages/           # Páginas (Home, ArticlePage, Section)
│   ├── services/        # API client e integrações
│   │   ├── apiClient.ts # Cliente HTTP centralizado
│   │   └── newsApi.ts   # Funções de busca de notícias
│   ├── types/           # Tipos TypeScript
│   └── styles/          # Estilos globais
├── public/              # Assets estáticos
├── .env.example         # Exemplo de variáveis de ambiente
├── package.json         # Dependências e scripts
└── vite.config.ts       # Configuração do Vite
```

## 📡 Integração com API

O frontend consome os seguintes endpoints:

- `GET /articles` - Lista todos os artigos
- `GET /articles?category={slug}` - Filtra por categoria
- `GET /articles/{slug}` - Busca artigo por slug
- `GET /categories` - Lista categorias

**Centralização**: Todas as chamadas HTTP passam por `src/services/apiClient.ts`, que:
- Lê `VITE_API_URL` do ambiente
- Usa fallback `http://localhost:4000/api` apenas em desenvolvimento
- Trata erros de conexão de forma amigável

## 🐛 Troubleshooting

### "Não foi possível carregar as notícias"

**Causa**: A API não está acessível

**Soluções**:
1. **Em desenvolvimento**: Verifique se a API está rodando em `http://localhost:4000`
2. **Em produção**: 
   - Confirme que `VITE_API_URL` está configurada na Vercel
   - Verifique se a URL da API está correta e acessível
   - Veja os logs do console do navegador (F12) para mais detalhes

### Build falha na Vercel

1. Verifique se todos os comandos funcionam localmente:
   ```bash
   npm install
   npm run build
   ```
2. Revise os logs de build no painel da Vercel
3. Confirme que não há erros de TypeScript

## 🛠️ Tecnologias

- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool rápido
- **React Router** - Navegação SPA
- **Lucide React** - Ícones

## 📝 Notas Importantes

- ✅ Este projeto **não contém** backend ou painel admin
- ✅ Não há dados mockados - tudo vem da API
- ✅ A URL da API é **sempre** configurável via `VITE_API_URL`
- ✅ Nunca use URLs inventadas ou hardcoded
- ✅ Em desenvolvimento, use `.env.local` (não commitado)
- ✅ Em produção, configure no painel da Vercel

## 🔗 Links

- **Produção**: https://capynews2025.vercel.app
- **Repositório**: https://github.com/iwerry/CapyNews
- **Backend**: (Repositório separado - será linkado quando disponível)
