import {
    CalendarCheck,
    Clock,
    BarChart3,
    CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const NosotrosPorqueElegirnosSection = () => {
    return (
        <motion.section 
            className="py-10 bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container px-4 lg:px-0">
                <motion.h2 
                    className="text-2xl font-bold text-slate-900 mb-10 text-center sm:text-left"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    ¿Por qué elegirnos?
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
                    <motion.div 
                        className="flex flex-col items-center sm:items-start bg-white p-4 rounded-lg shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <CalendarCheck className="text-green-500 w-8 h-8 mb-2" />
                        <p className="font-medium text-slate-800">Resultados Online el mismo día.</p>
                    </motion.div>
                    <motion.div 
                        className="flex flex-col items-center sm:items-start bg-white p-4 rounded-lg shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Clock className="text-green-500 w-8 h-8 mb-2" />
                        <p className="font-medium text-slate-800">
                            Optimización en tiempos de atención y espera.
                        </p>
                    </motion.div>
                    <motion.div 
                        className="flex flex-col items-center sm:items-start bg-white p-4 rounded-lg shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <BarChart3 className="text-green-500 w-8 h-8 mb-2" />
                        <p className="font-medium text-slate-800">
                            Reportes estadísticos e información en tiempo real.
                        </p>
                    </motion.div>
                    <motion.div 
                        className="flex flex-col items-center sm:items-start bg-white p-4 rounded-lg shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <CheckCircle className="text-green-500 w-8 h-8 mb-2" />
                        <p className="font-medium text-slate-800">
                            Mejora en la atención y calidad del servicio.
                        </p>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default NosotrosPorqueElegirnosSection;  