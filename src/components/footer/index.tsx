import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import "./styles.scss";
import logo from "../../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            {/* Left side - Brand Information */}
            <div className="footer-brand">
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>
              <p className="brand-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <InstagramIcon size={24} />
                </a>
                <a href="#" className="social-icon">
                  <FacebookIcon size={24} />
                </a>
                <a href="#" className="social-icon">
                  <LinkedinIcon size={24} />
                </a>
              </div>
            </div>

            {/* Vertical separator line */}
            <div className="footer-separator"></div>

            {/* Right side - Navigation Links */}
            <div className="footer-navigation">
              <div className="nav-column">
                <h3>Institucional</h3>
                <ul>
                  <li>
                    <a href="#">Sobre Nós</a>
                  </li>
                  <li>
                    <a href="#">Movimento</a>
                  </li>
                  <li>
                    <a href="#">Trabalhe conosco</a>
                  </li>
                </ul>
              </div>
              <div className="nav-column">
                <h3>Ajuda</h3>
                <ul>
                  <li>
                    <a href="#">Suporte</a>
                  </li>
                  <li>
                    <a href="#">Fale Conosco</a>
                  </li>
                  <li>
                    <a href="#">Perguntas Frequentes</a>
                  </li>
                </ul>
              </div>
              <div className="nav-column">
                <h3>Termos</h3>
                <ul>
                  <li>
                    <a href="#">Termos e Condições</a>
                  </li>
                  <li>
                    <a href="#">Política de Privacidade</a>
                  </li>
                  <li>
                    <a href="#">Troca e Devolução</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="footer-bottom">
        <div className="container">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </footer>
  );
}
