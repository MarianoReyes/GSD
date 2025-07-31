import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Zap } from 'lucide-react';
import './AboutUsSection.css';

const AboutUsSection: React.FC = () => {
  const features = [
    {
      icon: <Users />,
      title: "Equipo Experto",
      description: "Más de 10 años de experiencia en desarrollo web y aplicaciones móviles."
    },
    {
      icon: <Target />,
      title: "Enfoque Cliente",
      description: "Cada proyecto se adapta a las necesidades específicas de tu negocio."
    },
    {
      icon: <Award />,
      title: "Calidad Garantizada",
      description: "Código limpio, escalable y mantenible para el futuro de tu empresa."
    },
    {
      icon: <Zap />,
      title: "Entrega Rápida",
      description: "Proyectos entregados a tiempo con la máxima calidad y eficiencia."
    }
  ];

  return (
    <section id="about" className="about">
      <div className="section-content">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Acerca de Nosotros</h2>
          <p>Somos un equipo apasionado por crear soluciones digitales que transforman negocios</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Nuestra Misión</h3>
            <p>
              Desarrollamos soluciones tecnológicas innovadoras que ayudan a las empresas 
              a crecer y competir en el mercado digital. Nos especializamos en crear 
              aplicaciones web y móviles que no solo funcionan perfectamente, sino que 
              también proporcionan una experiencia excepcional al usuario.
            </p>
            
            <h3>Nuestro Enfoque</h3>
            <p>
              Trabajamos de manera colaborativa con nuestros clientes, entendiendo 
              sus necesidades específicas y objetivos de negocio. Utilizamos las 
              tecnologías más modernas para crear productos escalables y sostenibles 
              que evolucionen con tu empresa.
            </p>
          </motion.div>

          <motion.div
            className="about-features"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="features-grid">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection; 