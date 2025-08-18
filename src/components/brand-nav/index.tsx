import "./styles.scss";

export default function BrandNav() {
  // Array com os logos das marcas (usando o mesmo logo para demonstração)
  const brands = [
    { name: "eConverse", logo: "/src/assets/logo.svg" },
    { name: "eConverse", logo: "/src/assets/logo.svg" },
    { name: "eConverse", logo: "/src/assets/logo.svg" },
    { name: "eConverse", logo: "/src/assets/logo.svg" },
    { name: "eConverse", logo: "/src/assets/logo.svg" },
  ];

  return (
    <section className="brand-nav-section" aria-label="Navegação por marcas">
      <div className="container">
        <header className="section-header">
          <h2>Navegue por marcas</h2>
        </header>

        <div className="brands-container">
          {brands.map((brand, index) => (
            <div key={index} className="brand-circle">
              <img src={brand.logo} alt={`Logo ${brand.name}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
