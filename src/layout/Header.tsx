import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-primary text-white p-4 fixed top-0 left-0 right-0 z-50"
    >
      <nav className="container">
        <div className="flex justify-between items-center">
          <motion.h1
            className="text-xl md:text-2xl font-bold cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate('/')}
          >
            Consultorio Médico
          </motion.h1>

          {/* Botón hamburguesa para móvil */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Menú de navegación */}
          <AnimatePresence>
            {(isOpen || window.innerWidth >= 768) && (
              <motion.ul
                className={`md:flex flex-col md:flex-row absolute md:relative top-15 md:top-0 left-0 md:left-auto right-0 md:right-auto bg-primary md:bg-transparent p-4 md:p-0 gap-4 shadow-lg md:shadow-none ${isOpen ? 'border-t-1 border-white' : ''}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.li whileHover={{ scale: 1.1 }}>
                  <Link to="/" onClick={handleNavClick} className="block py-2 md:py-0 hover:text-gray-200 transition-colors">Inicio</Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }}>
                  <Link to="/pacientes" onClick={handleNavClick} className="block py-2 md:py-0 hover:text-gray-200 transition-colors">Pacientes</Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }}>
                  <Link to="/citas" onClick={handleNavClick} className="block py-2 md:py-0 hover:text-gray-200 transition-colors">Citas</Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }}>
                  <Link to="/reporte" onClick={handleNavClick} className="block py-2 md:py-0 hover:text-gray-200 transition-colors">Reporte</Link>
                </motion.li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;