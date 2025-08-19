import "./styles.scss";
import Container from "../common/Container";
import SEO from "../common/SEO";

export default function NewsLetter() {
  return (
    <>
      <SEO
        title="Newsletter"
        description="Inscreva-se na nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "NewsletterService",
          name: "Newsletter Econverse",
          description:
            "Receba as novidades e conteúdos exclusivos da Econverse",
          provider: {
            "@type": "Organization",
            name: "Econverse",
          },
        }}
      />
      <section
        className="news-letter-section"
        aria-labelledby="newsletter-title"
      >
        <Container>
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h2 id="newsletter-title">Inscreva-se na nossa newsletter</h2>
              <p>
                Assine a nossa newsletter e receba as novidades e conteúdos
                exclusivos da Econverse.
              </p>
            </div>
            <div className="newsletter-form">
              <div className="form-inputs">
                <input
                  type="text"
                  placeholder="Digite seu nome"
                  className="input-field"
                  aria-label="Nome completo"
                  required
                />
                <input
                  type="email"
                  placeholder="Digite seu e-mail"
                  className="input-field"
                  aria-label="Endereço de e-mail"
                  required
                />
                <button
                  type="submit"
                  className="subscribe-btn"
                  aria-label="Inscrever-se na newsletter"
                >
                  INSCREVER
                </button>
              </div>
              <div className="form-actions">
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    required
                    aria-describedby="terms-description"
                  />
                  <span className="checkmark"></span>
                  <span id="terms-description">
                    Aceito os termos e condições
                  </span>
                </label>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
