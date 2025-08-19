import {
  Search,
  Heart,
  ShoppingCart,
  Shield,
  Truck,
  CreditCard,
  Calendar,
  CircleUserRoundIcon,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import "./styles.scss";
import logo from "../../assets/logo.svg";
import Container from "../common/Container";
import BoxIcon from "../../assets/box.svg";

export default function Header() {
  const [activeCategory, setActiveCategory] = useState("OFERTAS DO DIA");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    setIsMobileMenuOpen(false); // Fecha o menu mobile ao selecionar
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="header-wrapper">
      {/* Top Bar - Hidden on mobile */}
      <div className="top-bar">
        <Container>
          <div className="top-info">
            <div className="info-item">
              <Shield size={16} />
              <span>
                Compra <strong>100% segura</strong>
              </span>
            </div>
            <div className="info-item">
              <Truck size={16} />
              <span>
                <strong>Frete grátis</strong> acima de R$ 200
              </span>
            </div>
            <div className="info-item">
              <CreditCard size={16} />
              <span>
                <strong>Parcele</strong> suas compras
              </span>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <Container>
          <div className="header-content">
            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-toggle"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <div className="logo">
              <a href="/" aria-label="Econverse - Página inicial">
                <img src={logo} alt="Econverse" width={139} height={41} />
              </a>
            </div>

            {/* Search Bar - Desktop */}
            <div
              className={`search-section ${isSearchOpen ? "search-open" : ""}`}
            >
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="O que você está buscando?"
                  className="search-input"
                  aria-label="Campo de busca"
                />
                <button className="search-button" aria-label="Buscar">
                  <Search size={18} />
                </button>
              </div>
            </div>

            {/* Header Actions */}
            <div className="header-actions">
              {/* Mobile Search Toggle */}
              <button
                className="action-item mobile-search-toggle"
                onClick={toggleSearch}
                aria-label="Toggle search"
              >
                <Search size={20} />
              </button>

              <button className="action-item" aria-label="Categorias">
                <img src={BoxIcon} alt="Pedidos" width={20} height={20} />
              </button>
              <button className="action-item" aria-label="Favoritos">
                <Heart size={20} />
              </button>
              <button className="action-item" aria-label="Minha conta">
                <CircleUserRoundIcon size={20} />
              </button>
              <button className="action-item" aria-label="Carrinho de compras">
                <ShoppingCart size={20} />
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div
            className={`mobile-search ${
              isSearchOpen ? "mobile-search-open" : ""
            }`}
          >
            <div className="search-bar">
              <input
                type="text"
                placeholder="O que você está buscando?"
                className="search-input"
                aria-label="Campo de busca mobile"
              />
              <button className="search-button" aria-label="Buscar">
                <Search size={18} />
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Navigation Menu */}
      <div className={`nav-header ${isMobileMenuOpen ? "nav-open" : ""}`}>
        <Container>
          <nav
            className="nav-menu"
            role="navigation"
            aria-label="Menu principal"
          >
            <a
              href="#"
              className={`nav-item ${
                activeCategory === "TODAS CATEGORIAS" ? "active" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleCategoryClick("TODAS CATEGORIAS");
              }}
            >
              TODAS CATEGORIAS
            </a>
            <a
              href="#"
              className={`nav-item ${
                activeCategory === "SUPERMERCADO" ? "active" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleCategoryClick("SUPERMERCADO");
              }}
            >
              SUPERMERCADO
            </a>
            <a
              href="#"
              className={`nav-item ${
                activeCategory === "LIVROS" ? "active" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleCategoryClick("LIVROS");
              }}
            >
              LIVROS
            </a>
            <a
              href="#"
              className={`nav-item ${
                activeCategory === "MODA" ? "active" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleCategoryClick("MODA");
              }}
            >
              MODA
            </a>
            <a
              href="#"
              className={`nav-item ${
                activeCategory === "LANÇAMENTOS" ? "active" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleCategoryClick("LANÇAMENTOS");
              }}
            >
              LANÇAMENTOS
            </a>
            <a
              href="#"
              className={`nav-item ${
                activeCategory === "OFERTAS DO DIA" ? "active" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleCategoryClick("OFERTAS DO DIA");
              }}
            >
              OFERTAS DO DIA
            </a>
            <a href="#" className="nav-item signature">
              <Calendar size={14} />
              <span>ASSINATURA</span>
            </a>
          </nav>
        </Container>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
