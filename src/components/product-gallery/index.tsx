import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductModal from "./components/ProductModal";
import Container from "../common/Container";
import type { Product, ApiResponse, CategoryTabsProps } from "../../types";
import {
  PRODUCT_CATEGORIES,
  API_ENDPOINTS,
  SLIDER_CONFIG,
} from "../../constants";
import "./styles.scss";

// Componente para o card de produto individual
function ProductCard({
  product,
  onBuyClick,
}: {
  product: Product;
  onBuyClick: (product: Product) => void;
}) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  const calculateInstallment = (price: number) => {
    const installmentPrice = price / 2;
    return formatPrice(installmentPrice);
  };

  const originalPrice = product.price + 2000;

  return (
    <article className="product-card" role="article">
      <div style={{ margin: "30px 0px 9px" }}>
        <img
          src={product.photo}
          alt={product.productName}
          loading="lazy"
          width="278"
          height="228"
        />
      </div>
      <div className="product-info">
        <span className="product-name">{product.productName}</span>

        <div className="price-container">
          <span className="original-price">{formatPrice(originalPrice)}</span>
          <span className="current-price">{formatPrice(product.price)}</span>
          <span className="installment-info">
            ou 2x de {calculateInstallment(product.price)} sem juros
          </span>
        </div>
        <p className="shipping-info">Frete grátis</p>
        <button className="buy-button" onClick={() => onBuyClick(product)}>
          Comprar
        </button>
      </div>
    </article>
  );
}

// Componente para as abas de categoria
function CategoryTabs({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryTabsProps) {
  return (
    <nav
      className="category-tabs"
      role="tablist"
      aria-label="Categorias de produtos"
    >
      {categories.map((category) => (
        <button
          key={category}
          className={`category-tab ${
            selectedCategory === category ? "active" : ""
          }`}
          onClick={() => onCategoryChange(category)}
          role="tab"
          aria-selected={selectedCategory === category}
          aria-controls="products-slider"
          type="button"
        >
          {category}
        </button>
      ))}
    </nav>
  );
}

// Componente para os botões de navegação
function NavigationButtons({
  onPrev,
  onNext,
  hasProducts,
}: {
  onPrev: () => void;
  onNext: () => void;
  hasProducts: boolean;
}) {
  return (
    <>
      <button
        className="nav-button prev-button"
        onClick={onPrev}
        aria-label="Produtos anteriores"
        disabled={!hasProducts}
        type="button"
      >
        <ChevronLeft aria-hidden="true" />
      </button>

      <button
        className="nav-button next-button"
        onClick={onNext}
        aria-label="Próximos produtos"
        disabled={!hasProducts}
        type="button"
      >
        <ChevronRight aria-hidden="true" />
      </button>
    </>
  );
}

// Componente principal
interface ProductGalleryProps {
  variant?: "default" | "no-tabs";
}

export default function ProductGallery({
  variant = "default",
}: ProductGalleryProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("CELULAR");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = PRODUCT_CATEGORIES;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setError(null);

        // Usando um proxy público para contornar CORS
        const proxyUrl = "https://api.allorigins.win/raw?url=";
        const targetUrl = encodeURIComponent(API_ENDPOINTS.products);
        const response = await fetch(`${proxyUrl}${targetUrl}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: ApiResponse = await response.json();

        if (data.success) {
          setProducts(data.products);
        } else {
          throw new Error("Falha ao carregar produtos");
        }
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        setError(error instanceof Error ? error.message : "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev + SLIDER_CONFIG.itemsPerPage >= products.length
        ? 0
        : prev + SLIDER_CONFIG.itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev - SLIDER_CONFIG.itemsPerPage < 0
        ? Math.max(0, products.length - SLIDER_CONFIG.itemsPerPage)
        : prev - SLIDER_CONFIG.itemsPerPage
    );
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentSlide(0); // Reset para o início ao trocar categoria
  };

  const handleBuyClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Estados de renderização
  if (loading) {
    return (
      <section
        className="product-gallery-wrapper"
        aria-label="Galeria de produtos"
      >
        <div className="container">
          <div className="loading" role="status" aria-live="polite">
            Carregando produtos...
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        className="product-gallery-wrapper"
        aria-label="Galeria de produtos"
      >
        <div className="container">
          <div className="error" role="alert">
            <p>Erro ao carregar produtos: {error}</p>
            <button
              onClick={() => window.location.reload()}
              type="button"
              className="retry-button"
            >
              Tentar novamente
            </button>
          </div>
        </div>
      </section>
    );
  }

  const visibleProducts = products.slice(
    currentSlide,
    currentSlide + SLIDER_CONFIG.itemsPerPage
  );
  const hasProducts = products.length > 0;

  return (
    <section
      className="product-gallery-wrapper"
      aria-label="Galeria de produtos"
      id="produtos"
    >
      <Container>
        <header className="section-title">
          <h2>Produtos relacionados</h2>
        </header>
        <div className="section-link">
          <a href="/#">Ver todos</a>
        </div>

        {variant === "default" && (
          <CategoryTabs
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        )}

        <div className="slider-container">
          <NavigationButtons
            onPrev={prevSlide}
            onNext={nextSlide}
            hasProducts={hasProducts}
          />

          <div
            className="products-slider"
            id="products-slider"
            role="tabpanel"
            aria-label={`Produtos da categoria ${selectedCategory}`}
          >
            {hasProducts ? (
              visibleProducts.map((product, index) => (
                <ProductCard
                  key={`${product.productName}-${index}`}
                  product={product}
                  onBuyClick={handleBuyClick}
                />
              ))
            ) : (
              <div className="no-products" role="status">
                <p>Nenhum produto encontrado para esta categoria.</p>
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}
