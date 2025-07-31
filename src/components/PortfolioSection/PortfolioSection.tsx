import React from 'react';
import { motion } from 'framer-motion';
import './PortfolioSection.css';

const PortfolioSection: React.FC = () => {
  const projects = [
    {
      title: "EcommerceFlow",
      category: "E-commerce SAAS",
      description: "Plataforma completa de comercio electrónico con gestión de inventario, pagos y analytics en tiempo real.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"]
    },
    {
      title: "TaskMaster Pro",
      category: "Gestión de Proyectos",
      description: "Herramienta de gestión de proyectos con colaboración en tiempo real y automatización de workflows.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Vue.js", "Express", "MongoDB", "Socket.io"]
    },
    {
      title: "AnalyticsPro",
      category: "Business Intelligence",
      description: "Dashboard inteligente para análisis de datos empresariales con visualizaciones interactivas.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Angular", "Python", "FastAPI", "D3.js"]
    }
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="section-content">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Proyectos Destacados</h2>
          <p>Casos de éxito que transformaron negocios</p>
        </motion.div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="portfolio-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -15 }}
            >
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <button className="btn-view">Ver Proyecto</button>
                </div>
              </div>
              <div className="portfolio-content">
                <span className="portfolio-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="portfolio-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection; 