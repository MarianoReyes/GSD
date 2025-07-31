import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import './Navigation.css';

interface NavigationProps {
  scrollToSection: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ scrollToSection }) => {
  return (
    <motion.nav 
      className="nav"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="nav-container">
        <div className="logo">
          <Zap className="logo-icon" />
          <span>SaasFlow</span>
        </div>
        <div className="nav-links">
          <a href="#services" onClick={() => scrollToSection('services')}>Servicios</a>
          <a href="#about" onClick={() => scrollToSection('about')}>Acerca de</a>
          <a href="#portfolio" onClick={() => scrollToSection('portfolio')}>Portafolio</a>
          <a href="#contact" onClick={() => scrollToSection('contact')}>Contacto</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation; 