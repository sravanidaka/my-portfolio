import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      icon: '🏷️',
      title: 'Asset Management System',
      description: 'A full-stack asset tracking and lifecycle management platform built using React.js, Node.js/Express, and MySQL. Features include authentication, asset assignment, barcode generation, depreciation tracking, and bulk Excel upload.',
      techStack: ['React.js', 'Node.js', 'MySQL'],
      githubUrl: 'https://github.com/sravanidaka/asset_management'
    },
    {
      icon: '🍞',
      title: 'Greeta Bakery Website',
      description: 'A fully responsive bakery website created using HTML, CSS, and Bootstrap. Includes a modern product section, gallery, and minimalist UI designed for better user experience and branding.',
      techStack: ['HTML', 'CSS', 'Bootstrap'],
      githubUrl: 'https://github.com/sravanidaka/greeta.git'
    },
    {
      icon: '🦺',
      title: 'Safety Helmet (Innovative Hardware Project)',
      description: 'A hardware-based innovative safety system designed to enhance worker protection by integrating sensors and communication modules. Detects hazards, monitors environmental conditions, and ensures real-time alerts to improve workplace safety. Built as a core engineering project during undergraduate studies.',
      techStack: ['Embedded Sensors', 'Communication Modules', 'Hardware Prototyping'],
      githubUrl: null
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="projects-container">
      <motion.div
        className="projects-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="page-title"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Projects
        </motion.h1>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-icon">{project.icon}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech-stack">
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-github-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="github-icon">🔗</span> View on GitHub
                </motion.a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;

