// Breakpoints para responsividade
export const BREAKPOINTS = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1024px",
  large: "1440px",
} as const;

// Categorias de produtos
export const PRODUCT_CATEGORIES = [
  "CELULAR",
  "ACESSÓRIOS",
  "TABLETS",
  "NOTEBOOKS",
  "TVS",
  "VER TODOS",
] as const;

// URLs da API
export const API_ENDPOINTS = {
  products: "/api/produtos.json",
} as const;

// Configurações de SEO
export const SEO_CONFIG = {
  siteName: "Econverse",
  siteUrl: "https://econverse.com.br",
  defaultTitle: "Econverse - Sua Loja Online de Tecnologia",
  defaultDescription:
    "Descubra as melhores ofertas em tecnologia na Econverse. Celulares, tablets, notebooks e acessórios com frete grátis e parcelas sem juros.",
  keywords:
    "celular, smartphone, tablet, notebook, tecnologia, eletrônicos, ofertas, frete grátis",
  ogImage: "/og-image.jpg",
} as const;

// Configurações do carrinho
export const CART_CONFIG = {
  freeShippingThreshold: 200,
  maxInstallments: 12,
  defaultInstallments: 2,
} as const;

// Links de redes sociais
export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/econverse",
  instagram: "https://www.instagram.com/econverse",
  linkedin: "https://www.linkedin.com/company/econverse",
} as const;

// Configurações do slider
export const SLIDER_CONFIG = {
  itemsPerPage: 4,
  autoPlayInterval: 5000,
} as const;
