import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppWidget = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.3,
                ease: "easeOut"
            }}
            className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50"
        >
            <motion.a
                href="https://wa.me/+51957271213?text=¡Hola! Me gustaría recibir más información sobre sus servicios."
                target="_blank"
                rel="noopener noreferrer"
                className="relative block"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                    className="absolute inset-0 bg-green-500 rounded-full blur-md"
                />
                <motion.div
                    className="relative bg-green-500 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
                    whileHover={{
                        boxShadow: "0 0 20px rgba(34, 197, 94, 0.4)"
                    }}
                >
                    <FaWhatsapp className="w-6 h-6 md:w-8 md:h-8" />
                </motion.div>
            </motion.a>

            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-lg shadow-md hidden md:block"
            >
                <p className="text-sm font-medium text-gray-700 whitespace-nowrap">
                    ¿Necesitas ayuda? ¡Escríbenos!
                </p>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 transform rotate-45 w-2 h-2 bg-white" />
            </motion.div>
        </motion.div>
    );
};

export default WhatsAppWidget;