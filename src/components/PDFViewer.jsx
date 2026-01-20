import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaDownload } from "react-icons/fa";

const PDFViewer = ({ isOpen, onClose, pdfUrl, fileName }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = fileName || "certificate.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="pdf-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="pdf-modal"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="pdf-modal-header">
              <h3 className="pdf-modal-title">{fileName || "Certificate"}</h3>
              <div className="pdf-modal-actions">
                <motion.button
                  className="pdf-download-btn"
                  onClick={handleDownload}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title="Download PDF"
                >
                  <FaDownload />
                </motion.button>
                <motion.button
                  className="pdf-close-btn"
                  onClick={onClose}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  title="Close"
                >
                  <FaTimes />
                </motion.button>
              </div>
            </div>
            <div className="pdf-viewer-container">
              <iframe
                src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                className="pdf-iframe"
                title={fileName || "PDF Viewer"}
                type="application/pdf"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PDFViewer;
