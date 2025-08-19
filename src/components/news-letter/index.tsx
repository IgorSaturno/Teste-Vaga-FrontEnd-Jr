import "./styles.scss";

export default function NewsLetter() {
  return (
    <section className="news-letter-section">
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h2>Inscreva-se na nossa newsletter</h2>
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
              />
              <input
                type="email"
                placeholder="Digite seu e-mail"
                className="input-field"
              />
              <button className="subscribe-btn">INSCREVER</button>
            </div>
            <div className="form-actions">
              <label className="checkbox-container">
                <input type="checkbox" />
                <span className="checkmark"></span>
                Aceito os termos e condições
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
