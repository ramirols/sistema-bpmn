import type { FC } from "react";
import {
    FaCalendarCheck,
    FaClock,
    FaChartBar,
    FaCheck,
    FaComments,
} from "react-icons/fa6";

import doctoraSonriendo from "../assets/por-que-elegirnos.webp";
import { motion } from "framer-motion";

const beneficios = [
    {
        icon: <FaCalendarCheck className="text-white" size={20} />,
        text: "Resultados Online el mismo día.",
    },
    {
        icon: <FaClock className="text-white" size={20} />,
        text: "Optimización en tiempos de atención y espera.",
    },
    {
        icon: <FaCheck className="text-white" size={20} />,
        text: "Atención personalizada",
    },
    {
        icon: <FaChartBar className="text-white" size={20} />,
        text: "Reportes estadísticos e información en tiempo real.",
    },
    {
        icon: <FaCheck className="text-white" size={20} />,
        text: "Mejora en la atención y calidad del servicio.",
    },
    {
        icon: <FaComments className="text-white" size={20} />,
        text: "Asesoría Permanente",
    },
];

const InicioPorqueElegirnosSection: FC = () => {
    return (
        <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full bg-[#ecf9f5] py-10"
        >
            <div className="container px-4">

                {/* Título */}
                <motion.h2 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-start text-2xl md:text-3xl font-bold text-tertiary mb-8 md:mb-12"
                >
                    ¿Por qué elegirnos?
                </motion.h2>

                {/* Contenido principal */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10">
                    {/* Imagen */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex justify-center"
                    >
                        <img
                            src={doctoraSonriendo}
                            alt="Doctora sonriendo"
                            className="rounded-xl w-full max-w-[250px] sm:max-w-[300px] md:max-w-sm h-auto"
                        />
                    </motion.div>

                    {/* Lista de beneficios */}
                    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-6">
                        {beneficios.map((item, index) => (
                            <motion.div 
                                key={index} 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                className="flex items-center sm:items-start gap-3 flex-col text-center sm:text-left"
                            >
                                <div className="flex items-center justify-center bg-secondary rounded-full p-2 w-10 h-10">
                                    {item.icon}
                                </div>
                                <p className="text-black text-sm sm:text-base md:text-xl max-w-[200px]">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default InicioPorqueElegirnosSection;