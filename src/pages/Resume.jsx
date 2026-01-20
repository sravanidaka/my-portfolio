import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaArrowLeft,
  FaFilePdf,
  FaFileWord,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Resume = () => {
  const navigate = useNavigate();

  const handlePrintPDF = () => {
    window.print();
  };

  const handleDownloadWord = () => {
    // Create a Blob with HTML content that Word can open
    const resumeContent = document.querySelector(".resume-document").innerHTML;
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Sravani Daka - Resume</title>
        <style>
          body { font-family: 'Calibri', Arial, sans-serif; line-height: 1.6; color: #000; max-width: 800px; margin: 0 auto; padding: 20px; }
          h1 { font-size: 24pt; font-weight: bold; text-align: center; margin-bottom: 10px; }
          h2 { font-size: 14pt; font-weight: bold; text-transform: uppercase; border-bottom: 2px solid #333; padding-bottom: 5px; margin-top: 15px; margin-bottom: 10px; }
          h3 { font-size: 11pt; font-weight: bold; margin-bottom: 5px; }
          p { font-size: 11pt; margin: 5px 0; }
          ul { margin: 5px 0 10px 20px; padding: 0; }
          li { font-size: 11pt; margin-bottom: 3px; }
          .resume-contact-info { text-align: center; font-size: 10pt; margin-bottom: 15px; }
          .resume-job-header { display: flex; justify-content: space-between; margin-bottom: 5px; }
          .resume-company { font-style: italic; color: #555; }
          .resume-date { color: #666; }
        </style>
      </head>
      <body>${resumeContent}</body>
      </html>
    `;

    const blob = new Blob([htmlContent], { type: "application/msword" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Sravani_Daka_Resume.doc";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="resume-container">
      <motion.div
        className="resume-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="resume-actions no-print">
          <motion.button
            className="resume-back-btn"
            onClick={handleBack}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaArrowLeft /> Back to Home
          </motion.button>
          <div className="resume-download-buttons">
            <motion.button
              className="resume-download-btn pdf"
              onClick={handlePrintPDF}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFilePdf /> Download PDF
            </motion.button>
            <motion.button
              className="resume-download-btn word"
              onClick={handleDownloadWord}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFileWord /> Download Word
            </motion.button>
          </div>
        </div>

        <div className="resume-document">
          {/* Header */}
          <header className="resume-header">
            <h1 className="resume-name">SRAVANI DAKA</h1>
            <div className="resume-contact-info">
              <span>
                <FaEnvelope /> Sravanidaka27@gmail.com
              </span>
              <span>
                <FaLinkedin /> linkedin.com/in/sravaniddaka2709
              </span>
              <span>
                <FaGithub /> github.com/sravanidaka
              </span>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="resume-section">
            <h2 className="resume-section-title">PROFESSIONAL SUMMARY</h2>
            <p className="resume-text">
              Frontend React.js Developer with hands-on experience in building
              responsive, user-centric web applications. Currently working at
              Greenlanter IT Solutions, specializing in modern JavaScript
              frameworks and UI/UX implementation. Strong foundation in ECE with
              expertise in web development, problem-solving, and agile
              collaboration.
            </p>
          </section>

          {/* Work Experience */}
          <section className="resume-section">
            <h2 className="resume-section-title">WORK EXPERIENCE</h2>

            <div className="resume-job">
              <div className="resume-job-header">
                <div>
                  <h3 className="resume-job-title">
                    Frontend React.js Developer
                  </h3>
                  <p className="resume-company">Greenlanter IT Solutions</p>
                </div>
                <p className="resume-date">Present</p>
              </div>
              <ul className="resume-list">
                <li>
                  Developed responsive and dynamic user interfaces using
                  React.js, HTML5, CSS3, and JavaScript ES6+
                </li>
                <li>
                  Implemented component-based architecture following React best
                  practices and modern design patterns
                </li>
                <li>
                  Collaborated with cross-functional teams to deliver
                  high-quality, user-centric web applications
                </li>
                <li>
                  Optimized application performance and ensured cross-browser
                  compatibility
                </li>
              </ul>
            </div>

            <div className="resume-job">
              <div className="resume-job-header">
                <div>
                  <h3 className="resume-job-title">
                    Full-Stack Developer Intern
                  </h3>
                  <p className="resume-company">
                    Net Pulse Innovation IT Solutions Pvt. Ltd.
                  </p>
                </div>
                <p className="resume-date">2024</p>
              </div>
              <ul className="resume-list">
                <li>
                  Built and enhanced an Asset Management System using React.js,
                  Node.js/Express, and MySQL
                </li>
                <li>
                  Implemented features including authentication, asset
                  assignment, barcode generation, and bulk Excel upload
                </li>
                <li>
                  Developed RESTful APIs and integrated frontend with backend
                  services
                </li>
                <li>
                  Gained experience in full software development lifecycle and
                  deployment processes
                </li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section className="resume-section">
            <h2 className="resume-section-title">EDUCATION</h2>

            <div className="resume-education">
              <div className="resume-job-header">
                <div>
                  <h3 className="resume-job-title">
                    Bachelor of Technology (B.Tech) - Electronics and
                    Communication Engineering
                  </h3>
                  <p className="resume-company">
                    Koneru Lakshmaiah University, Vijayawada
                  </p>
                </div>
                <p className="resume-date">2021 - 2025</p>
              </div>
              <p className="resume-text">CGPA: 8.46/10</p>
            </div>

            <div className="resume-education">
              <div className="resume-job-header">
                <div>
                  <h3 className="resume-job-title">
                    Intermediate (MPC) - Mathematics, Physics, Chemistry
                  </h3>
                  <p className="resume-company">
                    Narayana Junior College, Ongole
                  </p>
                </div>
                <p className="resume-date">2019 - 2021</p>
              </div>
              <p className="resume-text">Marks: 905/1000</p>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="resume-section">
            <h2 className="resume-section-title">TECHNICAL SKILLS</h2>
            <div className="resume-skills-grid">
              <div className="resume-skill-category">
                <strong>Frontend:</strong> React.js, HTML5, CSS3, JavaScript
                (ES6+), Angular, Bootstrap, Responsive Design
              </div>
              <div className="resume-skill-category">
                <strong>Backend:</strong> Node.js, Express.js, RESTful APIs
              </div>
              <div className="resume-skill-category">
                <strong>Database:</strong> MySQL, Database Design
              </div>
              <div className="resume-skill-category">
                <strong>Programming:</strong> JavaScript, C, Java (Basics)
              </div>
              <div className="resume-skill-category">
                <strong>Tools & Technologies:</strong> Git, VS Code, MATLAB, MS
                Excel, Postman
              </div>
              <div className="resume-skill-category">
                <strong>Concepts:</strong> OOP, Computer Networks, Data
                Structures, UI/UX Principles
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="resume-section">
            <h2 className="resume-section-title">KEY PROJECTS</h2>

            <div className="resume-project">
              <h3 className="resume-job-title">Asset Management System</h3>
              <p className="resume-text">
                <strong>Technologies:</strong> React.js, Node.js, Express, MySQL
              </p>
              <ul className="resume-list">
                <li>
                  Developed full-stack asset tracking platform with
                  authentication and lifecycle management
                </li>
                <li>
                  Implemented barcode generation, depreciation tracking, and
                  bulk Excel upload functionality
                </li>
                <li>
                  Created responsive UI components and integrated with backend
                  REST APIs
                </li>
              </ul>
            </div>

            <div className="resume-project">
              <h3 className="resume-job-title">Greeta Bakery Website</h3>
              <p className="resume-text">
                <strong>Technologies:</strong> HTML, CSS, Bootstrap
              </p>
              <ul className="resume-list">
                <li>
                  Designed and developed fully responsive bakery website with
                  modern UI/UX
                </li>
                <li>
                  Implemented product gallery, navigation, and mobile-first
                  design approach
                </li>
              </ul>
            </div>

            <div className="resume-project">
              <h3 className="resume-job-title">
                Safety Helmet (Hardware Innovation)
              </h3>
              <p className="resume-text">
                <strong>Technologies:</strong> Embedded Systems, Sensors,
                Communication Modules
              </p>
              <ul className="resume-list">
                <li>
                  Designed hardware-based safety system for worker protection
                  with real-time alerts
                </li>
                <li>
                  Integrated sensors and communication modules for hazard
                  detection
                </li>
              </ul>
            </div>
          </section>

          {/* Certifications */}
          <section className="resume-section">
            <h2 className="resume-section-title">CERTIFICATIONS & TRAINING</h2>
            <ul className="resume-list">
              <li>
                <strong>
                  VLSI Design Training (6-Week Virtual Internship)
                </strong>{" "}
                - HDL coding, FPGA design, FSM implementation
              </li>
              <li>
                <strong>AI & ML Fundamentals</strong> - Tessolve (07/2023)
              </li>
              <li>
                <strong>Evolution of Air Interface Towards 5G</strong> - NPTEL
                (03/2023)
              </li>
              <li>
                <strong>SystemVerilog & UVM Training</strong> - Advanced
                verification concepts (2023)
              </li>
            </ul>
          </section>

          {/* Soft Skills */}
          <section className="resume-section">
            <h2 className="resume-section-title">SOFT SKILLS</h2>
            <div className="resume-skills-grid">
              <div className="resume-skill-category">
                Adaptability • Time Management • Teamwork • Creativity •
                Problem-Solving • Communication
              </div>
            </div>
          </section>

          {/* Achievements */}
          <section className="resume-section">
            <h2 className="resume-section-title">ACHIEVEMENTS & ACTIVITIES</h2>
            <ul className="resume-list">
              <li>
                NSS Core Member (2023) - Active community service participant
              </li>
              <li>
                Sports: 1st Prize - Kho Kho, 2nd Prize - Running (School Level,
                2017)
              </li>
              <li>
                Arts: 1st Prize - Painting Competition (School Level, 2016)
              </li>
            </ul>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default Resume;
