import { motion } from 'framer-motion';
import myPhoto from '../assets/my-photo.jpeg';
import '../App.css';

const About = () => {
  return (
    <div className="about-container">
      <motion.h1
        className="page-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h1>
      
      <div className="about-wrapper">
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="about-photo-container"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={myPhoto} alt="Sravani Daka" className="about-photo" />
          </motion.div>
        </motion.div>

        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p>
              I am an enthusiastic ECE undergraduate at KL University with a strong foundation in Computer Communication and emerging 5G technologies. Currently, I am working as a Full-Stack Developer Intern at Net Pulse Innovation S IT Solutions Pvt. Ltd., where I build and enhance web applications using ReactJS and Node.js, particularly focusing on an Asset Management System.
            </p>
            <p>
              My technical journey has strengthened my skills in wireless communication systems, frontend and backend development, project coordination, and problem-solving. I am passionate about developing efficient, user-centric solutions and collaborating with cross-functional teams. I continuously strive to learn new technologies, improve my capabilities, and contribute meaningfully to impactful engineering and software projects.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

