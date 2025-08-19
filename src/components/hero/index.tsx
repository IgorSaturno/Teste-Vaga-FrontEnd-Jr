import "./styles.scss";
import Container from "../common/Container";
import SEO from "../common/SEO";

export default function Hero() {
  return (
    <>
      <SEO
        title="Promoções Imperdíveis"
        description="Venha conhecer nossas promoções com até 50% Off em produtos de tecnologia. Ofertas limitadas!"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "SpecialAnnouncement",
          name: "Promoções Econverse - 50% Off",
          text: "Venha conhecer nossas promoções com até 50% Off nos produtos",
          url: "https://econverse.com.br/promocoes",
          datePosted: new Date().toISOString(),
          expires: new Date(
            Date.now() + 30 * 24 * 60 * 60 * 1000
          ).toISOString(), // 30 dias
        }}
      />
      <section className="hero-container" aria-labelledby="hero-title">
        <Container>
          <div className="hero-content">
            <h1 id="hero-title">Venha conhecer nossas promoções</h1>
            <p className="hero-offer">
              <span className="offer-highlight">50% Off</span> nos produtos
            </p>
            <a
              href="#produtos"
              className="hero-cta"
              aria-label="Ver produtos em promoção"
            >
              Ver produto
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
