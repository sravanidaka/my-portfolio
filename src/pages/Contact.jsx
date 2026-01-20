import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import { useState } from "react";

const API_BASE = import.meta.env.VITE_API_URL || "/api";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    setSuccess("");

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };

    try {
      const response = await fetch(`${API_BASE}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setError(
          data.error || "Unable to send your message. Please try again."
        );
        setStatus("error");
        return;
      }

      setSuccess("Thank you! Your message has been sent.");
      setFormData({ name: "", email: "", message: "" });
      setStatus("success");
    } catch (err) {
      setError("Network error. Please try again.");
      setStatus("error");
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "Sravanidaka27@gmail.com",
      link: "mailto:Sravanidaka27@gmail.com",
    },
    // {
    //   icon: <FaPhone />,
    //   label: "Phone",
    //   value: "+91 9346882313",
    //   link: "tel:+919346882313",
    // },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "sravaniddaka2709",
      link: "https://www.linkedin.com/in/sravaniddaka2709",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "sravanidaka",
      link: "https://github.com/sravanidaka",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="contact-container">
      <motion.div
        className="contact-content"
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
          Contact Me
        </motion.h1>

        <div className="contact-wrapper">
          <motion.div
            className="contact-info"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="section-title">Get in Touch</h2>
            <div className="contact-items">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    info.link.startsWith("http") ? "noopener noreferrer" : ""
                  }
                  className="contact-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, x: 10 }}
                >
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-details">
                    <span className="contact-label">{info.label}</span>
                    <span className="contact-value">{info.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="section-title">Send a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </motion.button>
              {error && (
                <p style={{ color: "#f5576c", marginTop: "0.75rem" }}>
                  {error}
                </p>
              )}
              {success && (
                <p style={{ color: "#38ef7d", marginTop: "0.75rem" }}>
                  {success}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
