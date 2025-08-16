import {
  Search,
  Heart,
  ShoppingCart,
  Shield,
  Truck,
  CreditCard,
  Grid3X3,
  Calendar,
  CircleUserRoundIcon,
} from "lucide-react";
import { useState } from "react";
import "./styles.scss";
import logo from "../../assets/logo.svg";

export default function Header() {
  const [activeCategory, setActiveCategory] = useState("OFERTAS DO DIA");

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <header className="header-wrapper">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
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
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <div className="logo">
              <a href="/">
                <img src={logo} alt="logo" width={139} height={41} />
              </a>
            </div>

            {/* Search Bar */}
            <div className="search-section">
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="O que você está buscando?"
                  className="search-input"
                />
                <button className="search-button">
                  <Search size={18} />
                </button>
              </div>
            </div>

            {/* Header Actions */}
            <div className="header-actions">
              <div className="action-item">
                <Grid3X3 size={20} />
              </div>
              <div className="action-item">
                <Heart size={20} />
              </div>
              <div className="action-item">
                <CircleUserRoundIcon size={20} />
              </div>
              <div className="action-item">
                <ShoppingCart size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="nav-header">
        <div className="container">
          <nav className="nav-menu">
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
        </div>
      </div>
    </header>
  );
}
