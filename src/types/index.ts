// Tipos de produtos
export interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

export interface ApiResponse {
  success: boolean;
  products: Product[];
}

// Tipos de componentes
export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ProductCardProps extends ComponentProps {
  product: Product;
  onBuyClick?: (product: Product) => void;
}

export interface ModalProps extends ComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface ProductModalProps extends ModalProps {
  product: Product;
}

// Tipos de navegação
export type CategoryType =
  | "CELULAR"
  | "ACESSÓRIOS"
  | "TABLETS"
  | "NOTEBOOKS"
  | "TVS"
  | "VER TODOS";

export interface CategoryTabsProps extends ComponentProps {
  categories: readonly string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

// Tipos de formulário
export interface FormData {
  name: string;
  email: string;
  acceptTerms: boolean;
}

// Tipos de SEO
export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

// Tipos de responsividade
export type BreakpointKey = "mobile" | "tablet" | "desktop" | "large";

// Tipos de estado
export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}

export interface PaginationState {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
}
