import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Rocket } from 'lucide-react';
import './ContactSection.css';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="section-content">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="contact-info">
            <h2>¿Listo para Transformar tu Negocio?</h2>
            <p>
              Conversemos sobre tu proyecto y descubre cómo podemos ayudarte 
              a crear la solución SAAS perfecta para tu empresa.
            </p>
            <div className="contact-features">
              <div className="contact-feature">
                <Zap size={20} />
                <span>Consulta gratuita</span>
              </div>
              <div className="contact-feature">
                <Shield size={20} />
                <span>Propuesta personalizada</span>
              </div>
              <div className="contact-feature">
                <Rocket size={20} />
                <span>Desarrollo ágil</span>
              </div>
            </div>
          </div>
          
          <motion.div
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form>
              <div className="form-group">
                <input type="text" placeholder="Nombre completo" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email empresarial" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Empresa" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Cuéntanos sobre tu proyecto..." rows={4} required></textarea>
              </div>
              <button type="submit" className="btn-primary full-width">
                Enviar Mensaje
                <ArrowRight size={20} />
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection; 