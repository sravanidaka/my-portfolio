import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  const education = [
    {
      institution: 'Koneru Lakshmaiah University, Vijayawada',
      degree: 'B.Tech ECE',
      cgpa: '8.46 CGPA',
      period: '2021–2025'
    },
    {
      institution: 'Narayana Junior College, Ongole',
      degree: 'MPC',
      cgpa: '905 Marks',
      period: '2019–2021'
    },
    {
      institution: 'Sri Chaitanya School, Ongole',
      degree: 'SSC',
      cgpa: '9.7 CGPA',
      period: '2018–2019'
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
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="education-container">
      <motion.div
        className="education-content"
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
          Education
        </motion.h1>

        <motion.div
          className="education-timeline"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="education-item"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="education-year">{edu.period}</div>
              <div className="education-details">
                <h3 className="education-institution">{edu.institution}</h3>
                <p className="education-degree">{edu.degree}</p>
                <p className="education-cgpa">{edu.cgpa}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Education;

