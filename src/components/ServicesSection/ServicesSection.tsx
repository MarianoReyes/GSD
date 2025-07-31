import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Shield, BarChart3, Users, Globe, Zap } from 'lucide-react';
import './ServicesSection.css';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Rocket size={32} />,
      title: "Desarrollo SAAS",
      description: "Aplicaciones web escalables con arquitectura moderna y tecnologías de vanguardia."
    },
    {
      icon: <Shield size={32} />,
      title: "Seguridad & Compliance",
      description: "Implementamos las mejores prácticas de seguridad y cumplimiento normativo."
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Analytics & BI",
      description: "Dashboards inteligentes y análisis de datos para tomar mejores decisiones."
    },
    {
      icon: <Users size={32} />,
      title: "Gestión de Usuarios",
      description: "Sistemas completos de autenticación, roles y gestión de usuarios."
    },
    {
      icon: <Globe size={32} />,
      title: "API Development",
      description: "APIs RESTful y GraphQL robustas para integrar con cualquier sistema."
    },
    {
      icon: <Zap size={32} />,
      title: "Optimización",
      description: "Mejoramos el rendimiento y la experiencia de usuario de tu aplicación."
    }
  ];

  return (
    <section id="services" className="services">
      <div className="section-content">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Nuestros Servicios</h2>
          <p>Soluciones completas para tu negocio digital</p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 