import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import myPhoto from "../assets/my-photo.jpeg";

const Home = () => {
  const navigate = useNavigate();

  const handleResumeClick = () => {
    navigate("/resume");
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div className="home-container">
      <div className="home-wrapper">
        <motion.div
          className="home-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="home-name"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            SRAVANI DAKA
          </motion.h1>

          <motion.h2
            className="home-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Frontend React.js Developer | Greenlanter IT Solutions
          </motion.h2>

          <motion.p
            className="home-intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Currently working as a Frontend React.js Developer at Greenlanter IT
            Solutions, building responsive and dynamic user interfaces.
            Passionate about creating innovative solutions and delivering
            high-quality, user-centric digital experiences.
          </motion.p>

          <motion.div
            className="home-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button
              className="btn btn-primary"
              onClick={handleResumeClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Resume
            </motion.button>
            <motion.button
              className="btn btn-secondary"
              onClick={handleContactClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </motion.div>

          <motion.div
            className="home-social"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/sravaniddaka2709"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/sravanidaka"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="home-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            className="home-photo-container"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={myPhoto} alt="Sravani Daka" className="home-photo" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
