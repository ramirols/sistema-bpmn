import { MessageCircleMore, Stethoscope } from "lucide-react";
import doctorImage from "../assets/sobre-nosotros.webp";
import { motion } from "framer-motion";

const NosotrosQuienesSomosSection = () => {
    return (
        <motion.section
            className="py-10 bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 px-4 lg:px-0">
                {/* Texto */}
                <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center lg:text-left">
                        ¿Quiénes somos?
                    </h2>
                    <p className="text-slate-700 leading-relaxed text-justify mb-8 text-sm md:text-base">
                        Somos un centro médico especializado en brindar cuidado integral para la salud en entornos tanto hogareños como laborales. Nuestra misión es asegurar que cada individuo disfrute de un bienestar óptimo, ya sea en la comodidad de su hogar o en su entorno de trabajo. Contamos con un equipo de profesionales altamente capacitados, cuya experiencia se combina con una dedicación inquebrantable y un compromiso genuino con el bienestar de nuestros pacientes.
                    </p>

                    {/* Íconos */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="flex items-center gap-3">
                            <MessageCircleMore className="text-green-500 w-6 h-6" />
                            <div>
                                <p className="font-medium text-slate-800">Asesoría</p>
                                <p className="text-sm text-slate-600">Permanente</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Stethoscope className="text-green-500 w-6 h-6" />
                            <div>
                                <p className="font-medium text-slate-800">Atención</p>
                                <p className="text-sm text-slate-600">personalizada</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Imagen */}
                <motion.div
                    className="flex-1 max-w-sm mx-auto w-full px-4 sm:px-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <img
                        src={doctorImage}
                        alt="Doctora"
                        className="rounded-xl shadow-lg w-full object-cover"
                    />
                </motion.div>
            </div>
        </motion.section>
    );
};

export default NosotrosQuienesSomosSection;