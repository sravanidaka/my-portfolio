import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const technicalSkills = [
    'C, Java (Basics)',
    'HTML, CSS, JavaScript, Angular',
    'OOP, Computer Networks',
    'MATLAB, MS Excel, MS Word'
  ];

  const softSkills = [
    'Adaptability',
    'Time Management',
    'Teamwork',
    'Creativity'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="skills-container">
      <motion.div
        className="skills-content"
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
          Skills
        </motion.h1>

        <div className="skills-sections">
          <motion.div
            className="skills-section"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills-grid">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="skills-section"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="section-title">Soft Skills</h2>
            <div className="skills-grid">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-item soft-skill"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;

