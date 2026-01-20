import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  FaPalette,
  FaMoon,
  FaSun,
  FaLeaf,
  FaFire,
  FaWater,
} from "react-icons/fa";

const ThemeSwitcher = () => {
  const { theme, changeTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    {
      id: "default",
      name: "Default",
      icon: <FaPalette />,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      description: "Original Theme",
    },
    {
      id: "dark",
      name: "Dark",
      icon: <FaMoon />,
      gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
      description: "Dark Mode",
    },
    {
      id: "ocean",
      name: "Ocean",
      icon: <FaWater />,
      gradient: "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)",
      description: "Ocean Blue",
    },
    {
      id: "forest",
      name: "Forest",
      icon: <FaLeaf />,
      gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
      description: "Nature Green",
    },
    {
      id: "sunset",
      name: "Sunset",
      icon: <FaFire />,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      description: "Warm Sunset",
    },
  ];

  return (
    <div className="theme-switcher-container">
      <motion.button
        className="theme-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <FaPalette />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="theme-options"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="theme-options-header">
              <h3>Choose Theme</h3>
            </div>
            <div className="theme-grid">
              {themes.map((themeOption) => (
                <motion.button
                  key={themeOption.id}
                  className={`theme-option ${
                    theme === themeOption.id ? "active" : ""
                  }`}
                  onClick={() => {
                    changeTheme(themeOption.id);
                    setIsOpen(false);
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: themes.indexOf(themeOption) * 0.1 }}
                >
                  <div
                    className="theme-preview"
                    style={{ background: themeOption.gradient }}
                  >
                    {themeOption.icon}
                  </div>
                  <span className="theme-name">{themeOption.name}</span>
                  {theme === themeOption.id && (
                    <motion.div
                      className="theme-check"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500 }}
                    >
                      ✓
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher;
