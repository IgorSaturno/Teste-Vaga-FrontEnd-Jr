# 🛒 E-commerce Frontend - Teste Técnico

> **Projeto desenvolvido como teste técnico para vaga de Frontend Junior**

Este projeto é uma aplicação web de e-commerce desenvolvida em React + TypeScript, demonstrando habilidades em desenvolvimento frontend, responsividade e boas práticas de código.

## 📋 Sobre o Projeto

### 🎯 Objetivo

Desenvolver uma interface de e-commerce moderna e responsiva que demonstre:

- Componentização eficiente
- Design responsivo
- Boas práticas de desenvolvimento
- Uso de tecnologias modernas

### 🏪 Funcionalidades Implementadas

- **Header Responsivo**: Menu mobile funcional com navegação
- **Hero Section**: Banner promocional com imagem responsiva
- **Navegação por Categorias**: Grid de categorias com ícones
- **Galeria de Produtos**: Slider de produtos com abas de categoria
- **Modal de Produto**: Detalhes do produto com seletor de quantidade
- **Seção de Parceiros**: Banner promocional responsivo
- **Newsletter**: Formulário de inscrição
- **Footer**: Informações da empresa e links úteis

## 🚀 Tecnologias Utilizadas

### Frontend

- **React 19.1.1** - Biblioteca JavaScript para interfaces
- **TypeScript 5.8.3** - Tipagem estática
- **Vite 7.1.2** - Build tool e dev server
- **Sass 1.90.0** - Pré-processador CSS
- **Lucide React 0.539.0** - Ícones

### Desenvolvimento

- **ESLint** - Linting de código
- **TypeScript ESLint** - Regras específicas para TypeScript

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes React
│   ├── brand-nav/       # Navegação de marcas
│   ├── category-nav/    # Navegação de categorias
│   ├── common/          # Componentes comuns (Container, SEO)
│   ├── footer/          # Rodapé
│   ├── header/          # Cabeçalho com menu mobile
│   ├── hero/            # Seção hero/banner
│   ├── news-letter/     # Newsletter
│   ├── partner-section/ # Seção de parceiros
│   └── product-gallery/ # Galeria de produtos
├── assets/              # Imagens e ícones
├── constants/           # Constantes da aplicação
├── styles/              # Variáveis e mixins SCSS
├── types/               # Definições de tipos TypeScript
└── utils/               # Utilitários
```

## 🎨 Design System

### Cores

- **Primária**: `#ffd700` (Dourado)
- **Secundária**: `#271c47` (Roxo escuro)
- **Neutras**: Tons de cinza para textos e backgrounds

### Tipografia

- **Fonte Principal**: Poppins
- **Fonte Secundária**: Inter
- **Hierarquia**: Tamanhos responsivos (xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl)

### Breakpoints

- **Mobile**: ≤ 480px
- **Tablet**: ≤ 768px
- **Desktop**: ≤ 1024px
- **Large**: ≤ 1440px

## 🛠️ Como Executar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone [URL_DO_REPOSITORIO]

# Entre na pasta do projeto
cd teste-vaga-frontend-jr

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
```

### Executando o Projeto

```bash
# Modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Linting
npm run lint
```

## 📱 Responsividade

O projeto foi desenvolvido com foco em **Mobile First**, garantindo uma experiência otimizada em todos os dispositivos:

### Mobile (≤ 480px)

- Menu hambúrguer funcional
- Layout em coluna única
- Imagens otimizadas
- Touch-friendly

### Tablet (≤ 768px)

- Layout adaptativo
- Grid responsivo
- Navegação otimizada

### Desktop (> 768px)

- Layout completo
- Todas as funcionalidades
- Hover effects

## 🔧 Funcionalidades Técnicas

### Componentização

- Componentes reutilizáveis
- Props tipadas com TypeScript
- Separação de responsabilidades

### Estado

- Gerenciamento de estado local com React Hooks
- Modal de produto com estado controlado
- Filtros de categoria

### Performance

- Lazy loading de imagens
- Componentes otimizados
- Build otimizado com Vite

### Acessibilidade

- ARIA labels
- Navegação por teclado
- Contraste adequado
- Semântica HTML

## 📊 Dados

O projeto utiliza dados da API oficial da Econverse com proxy público para contornar CORS:

```
https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json
```

### Estrutura da API

- **Endpoint**: API oficial da Econverse
- **Método**: GET
- **Formato**: JSON
- **Produtos**: 10 produtos iPhone com preços variados
- **Imagens**: URLs hospedadas no servidor da Econverse
- **Proxy**: allorigins.win para contornar restrições de CORS

## 🎯 Melhorias Implementadas

### Menu Mobile

- ✅ Menu hambúrguer funcional
- ✅ Overlay de fundo
- ✅ Animações suaves
- ✅ Fechamento automático ao selecionar item

### Hero Responsivo

- ✅ Imagem cortada em telas < 1440px
- ✅ Gradiente adaptativo
- ✅ Texto responsivo

### Product Gallery

- ✅ Abas com wrap responsivo
- ✅ Slider funcional
- ✅ Modal de produto
- ✅ Seletor de quantidade

### Partner Section

- ✅ Layout responsivo com wrap
- ✅ Imagem adaptativa
- ✅ Conteúdo centralizado em mobile

## 🚀 Deploy

O projeto pode ser facilmente deployado em qualquer plataforma que suporte aplicações React:

- **Vercel**: `vercel --prod`
- **Netlify**: `netlify deploy --prod`
- **GitHub Pages**: Configuração automática

## 📝 Observações do Desenvolvedor

Este projeto foi desenvolvido como teste técnico, demonstrando:

1. **Conhecimento técnico**: React, TypeScript, Sass
2. **Responsividade**: Design adaptativo para todos os dispositivos
3. **Componentização**: Estrutura modular e reutilizável
4. **Boas práticas**: Código limpo, comentado e organizado
5. **Performance**: Otimizações e lazy loading
6. **Acessibilidade**: ARIA labels e navegação por teclado

### Tempo de Desenvolvimento

- **Estimado**: 8-12 horas
- **Real**: [A ser preenchido pelo desenvolvedor]

### Desafios Enfrentados

- Implementação do menu mobile responsivo
- Otimização de imagens para diferentes tamanhos de tela
- Estruturação de componentes reutilizáveis
- Configuração de build otimizado

> ⚠️ **Nota**: Este projeto foi desenvolvido especificamente como teste técnico para demonstração de habilidades em desenvolvimento frontend. Não é um produto comercial.

## 📄 Licença

Este projeto é de uso pessoal e educacional, desenvolvido como teste técnico.
