import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaDownload } from 'react-icons/fa';
import PDFViewer from '../components/PDFViewer';
import './Certificates.css';

// Import PDF files
import vlsiInternshipPDF from '../assets/VLSI Design Training - Certificate of Completion.pdf';
import aiMlPDF from '../assets/DAKA SRAVANI machine learning.pdf';
import nptel5GPDF from '../assets/Evolution Of Air Interface Towards 5G.pdf';
import systemVerilogPDF from '../assets/SYSTEMVERILOG&UVM-L2.pdf';

const Certificates = () => {
  const [selectedPDF, setSelectedPDF] = useState(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const internship = {
    title: '6-Week Virtual Internship on VLSI Design',
    description: 'VLSI basics, HDL coding, combinational & sequential circuits, FSM, FPGA design',
    pdf: vlsiInternshipPDF,
    fileName: 'VLSI Design Training - Certificate of Completion.pdf'
  };

  const certificates = [
    {
      title: 'AI & ML Fundamentals',
      issuer: 'Tessolve',
      date: '07/2023',
      pdf: aiMlPDF,
      fileName: 'DAKA SRAVANI machine learning.pdf'
    },
    {
      title: 'Evolution of Air Interface Towards 5G',
      issuer: 'NPTEL',
      date: '03/2023',
      pdf: nptel5GPDF,
      fileName: 'Evolution Of Air Interface Towards 5G.pdf'
    },
    {
      title: 'SystemVerilog & UVM',
      issuer: 'Training',
      date: '2023',
      pdf: systemVerilogPDF,
      fileName: 'SYSTEMVERILOG&UVM-L2.pdf'
    },
    // {
    //   title: 'Java Full Stack',
    //   issuer: 'Wipro TalentNext',
    //   date: '09/2023',
    //   pdf: null,
    //   fileName: null
    // },
    // {
    //   title: 'Java Full Stack',
    //   issuer: 'Wipro TalentNext',
    //   date: '10/2024',
    //   pdf: null,
    //   fileName: null
    // }
  ];

  const handlePreview = (pdf, fileName) => {
    if (pdf) {
      setSelectedPDF({ url: pdf, fileName });
      setIsViewerOpen(true);
    }
  };

  const handleDownload = (pdf, fileName) => {
    if (pdf) {
      const link = document.createElement('a');
      link.href = pdf;
      link.download = fileName || 'certificate.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

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
    <div className="certificates-container">
      <motion.div
        className="certificates-content"
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
          Internship & Certificates
        </motion.h1>

        <div className="certificates-sections">
          <motion.div
            className="certificate-section"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="section-title">Internship</h2>
            <motion.div
              className="internship-card"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="cert-title">{internship.title}</h3>
              <p className="cert-description">{internship.description}</p>
              {internship.pdf && (
                <div className="cert-actions">
                  <motion.button
                    className="cert-action-btn preview-btn"
                    onClick={() => handlePreview(internship.pdf, internship.fileName)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaEye /> Preview
                  </motion.button>
                  <motion.button
                    className="cert-action-btn download-btn"
                    onClick={() => handleDownload(internship.pdf, internship.fileName)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaDownload /> Download
                  </motion.button>
                </div>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            className="certificate-section"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="section-title">Certificates</h2>
            <div className="certificates-grid">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  className="certificate-card"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-date">{cert.date}</p>
                  {cert.pdf && (
                    <div className="cert-actions">
                      <motion.button
                        className="cert-action-btn preview-btn"
                        onClick={() => handlePreview(cert.pdf, cert.fileName)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaEye /> Preview
                      </motion.button>
                      <motion.button
                        className="cert-action-btn download-btn"
                        onClick={() => handleDownload(cert.pdf, cert.fileName)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaDownload /> Download
                      </motion.button>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      <PDFViewer
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
        pdfUrl={selectedPDF?.url}
        fileName={selectedPDF?.fileName}
      />
    </div>
  );
};

export default Certificates;

