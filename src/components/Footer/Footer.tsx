import React from 'react';
import { Zap } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="section-content">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <Zap className="logo-icon" />
              <span>SaasFlow</span>
            </div>
            <p>Transformando ideas en soluciones SAAS exitosas</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Servicios</h4>
              <a href="#services">Desarrollo SAAS</a>
              <a href="#services">API Development</a>
              <a href="#services">Analytics & BI</a>
            </div>
            <div className="footer-column">
              <h4>Empresa</h4>
              <a href="#portfolio">Portafolio</a>
              <a href="#about">Acerca de</a>
              <a href="#contact">Contacto</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 SaasFlow. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 