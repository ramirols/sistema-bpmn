import type { FC } from "react";
import { Link } from "react-router-dom";

import doctorEquipo from "../assets/sobre-nosotros.webp";
import { motion } from "framer-motion";

const NosotrosSection: FC = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container bg-white py-16"
    >
      {/* Contenido principal */}
      <div className="pb-16 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Texto */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-tertiary leading-tight mb-4">
            Comprometidos con la excelencia en Medicina ocupacional
          </h2>
          <p className="text-black text-lg mb-6">
            Centro médico dedicado al cuidado de la salud en el hogar y el trabajo, contamos con
            profesionales con experiencia, dedicación y compromiso.
          </p>
          <Link to="/nosotros" className="bg-secondary hover:bg-secondary/80 text-white px-6 py-2 rounded transition">
            Conócenos
          </Link>
        </div>

        {/* Imagen */}
        <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden flex justify-end items-center">
          <img
            src={doctorEquipo}
            alt="Equipo médico"
            className="object-cover w-[400px] h-full rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Sección azul de contacto */}
      <div className="bg-primary text-white px-6 md:px-20 py-10 rounded-t-3xl rounded-b-3xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Escríbenos hoy para consultas</h3>
            <p className="text-white text-sm max-w-md">
              ¡Prioriza tu bienestar laboral hoy! En nuestra clínica ocupacional, estamos listos para
              brindarte atención personalizada y soluciones integrales.
            </p>
          </div>
          <a
            href="https://wa.me/51999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary px-5 py-2 rounded shadow hover:bg-gray-100 transition"
          >
            Escríbenos al WhatsApp
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default NosotrosSection;