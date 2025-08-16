import { useState } from "react";
import "./styles.scss";
import tecnologia from "../../assets/category-nav/tecnologia.svg";
import supermercado from "../../assets/category-nav/supermercado.svg";
import whiskey from "../../assets/category-nav/whiskey.svg";
import ferramentas from "../../assets/category-nav/ferramentas.svg";
import cuidadosDeSaude from "../../assets/category-nav/cuidados-de-saude.svg";
import corrida from "../../assets/category-nav/corrida.svg";
import moda from "../../assets/category-nav/moda.svg";

export default function CategoryNav() {
  const [selectedCategory, setSelectedCategory] = useState("Tecnologia");

  const categories = [
    {
      icon: tecnologia,
      name: "Tecnologia",
      href: "#tecnologia",
    },
    {
      icon: supermercado,
      name: "Supermercado",
      href: "#supermercado",
    },
    {
      icon: whiskey,
      name: "Bebidas",
      href: "#bebidas",
    },
    {
      icon: ferramentas,
      name: "Ferramentas",
      href: "#ferramentas",
    },
    {
      icon: cuidadosDeSaude,
      name: "Saúde",
      href: "#saude",
    },
    {
      icon: corrida,
      name: "Esportes e Fitness",
      href: "#esportes",
    },
    {
      icon: moda,
      name: "Moda",
      href: "#moda",
    },
  ];

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  return (
    <div className="category-nav-wrapper">
      <div className="container">
        <div className="category-nav-grid">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`category-nav-item ${
                selectedCategory === category.name ? "active" : ""
              }`}
            >
              <a
                href={category.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryClick(category.name);
                }}
              >
                <div className="nav-item">
                  <img src={category.icon} alt={category.name} />
                </div>
              </a>
              <span className="category-name">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
