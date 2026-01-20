import { motion } from "framer-motion";
import myPhoto from "../assets/my-photo.jpeg";

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
              I am a Frontend React.js Developer at Greenlanter IT Solutions,
              specializing in building responsive and dynamic web applications.
              I bring a unique blend of technical expertise in electronics and
              software development. My journey in web development has equipped
              me with hands-on experience in React.js, Node.js, and modern
              JavaScript frameworks.
            </p>
            <p>
              Previously, I worked as a Full-Stack Developer Intern at Net Pulse
              Innovation IT Solutions, where I developed an Asset Management
              System from the ground up. My passion lies in creating
              user-centric, efficient solutions with clean code and modern UI/UX
              principles. I thrive in collaborative environments and
              continuously seek to expand my knowledge in frontend technologies,
              performance optimization, and agile development practices.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
