import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const menuItems = [
    { label: "Inicio", path: "/" },
    { label: "Servicios", path: "/servicios" },
    { label: "Nosotros", path: "/nosotros" },
    { label: "Contactanos", path: "/contactanos" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white text-black p-4 fixed top-0 left-0 right-0 z-50"
    >
      <nav className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.h1
            className="text-2xl font-bold cursor-pointer text-primary"
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/")}
          >
            VitalyCare
          </motion.h1>

          {/* Botón hamburguesa para móvil */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                className={`md:flex items-center gap-6 absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 shadow-lg md:shadow-none ${isOpen ? 'block' : 'hidden'}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {menuItems.map((item) => (
                  <motion.li key={item.label} whileHover={{ scale: 1.05 }}>
                    <Link
                      to={item.path}
                      onClick={handleNavClick}
                      className={`block py-2 md:py-0 transition-colors ${
                        location.pathname === item.path 
                          ? "text-primary font-semibold"
                          : "text-black hover:text-primary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}

                {/* Botón de acción */}
                <motion.li whileHover={{ scale: 1.05 }}>
                  <Link
                    to="/dashboard-inicio"
                    onClick={handleNavClick}
                    className={`block bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors ${
                      location.pathname === "/dashboard-inicio" ? "bg-primary-dark" : ""
                    }`}
                  >
                    Reservar una cita
                  </Link>
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