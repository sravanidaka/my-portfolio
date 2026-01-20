import { motion } from "framer-motion";
import { MdVolunteerActivism } from "react-icons/md";
import { FaRunning, FaPaintBrush } from "react-icons/fa";

const Achievements = () => {
  const achievements = [
    {
      title: "NSS Core Member",
      year: "2023",
      description: "Active member of the National Service Scheme",
      icon: MdVolunteerActivism,
      iconColor: "#667eea",
    },
    {
      title: "1st Prize – Kho Kho & 2nd Prize – Running",
      year: "2017",
      description: "Sports achievements in school competitions",
      icon: FaRunning,
      iconColor: "#38ef7d",
    },
    {
      title: "1st Prize – Painting Competition",
      year: "2016",
      description: "School-level art achievement",
      icon: FaPaintBrush,
      iconColor: "#f5576c",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="achievements-container">
      <motion.div
        className="achievements-content"
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
          Achievements
        </motion.h1>

        <motion.div
          className="achievements-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <motion.div
                key={index}
                className="achievement-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                style={{ "--icon-color": achievement.iconColor }}
              >
                <motion.div
                  className="achievement-icon-wrapper"
                  style={{
                    background: `linear-gradient(135deg, ${achievement.iconColor} 0%, ${achievement.iconColor}dd 100%)`,
                    boxShadow: `0 8px 20px ${achievement.iconColor}4d`,
                  }}
                  whileHover={{
                    boxShadow: `0 12px 30px ${achievement.iconColor}80`,
                    scale: 1.1,
                    rotate: 5,
                  }}
                >
                  <IconComponent className="achievement-icon" />
                </motion.div>
                <div className="achievement-year">{achievement.year}</div>
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">
                  {achievement.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Achievements;
