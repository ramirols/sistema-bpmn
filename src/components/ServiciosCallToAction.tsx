import { motion } from 'framer-motion';

const ServiciosCallToAction = () => {
  return (
    <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-white py-10"
    >
        <div className="container flex flex-col items-center justify-center gap-10 px-4 md:px-0">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-3xl font-bold text-tertiary text-center"
            >
                Siempre un paso adelante de la enfermedad
            </motion.h2>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <a 
                    href="https://wa.me/+51957271213"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary text-white px-6 py-3 md:px-4 md:py-2 rounded-md inline-block text-center"
                >
                    Escríbenos al WhatsApp
                </a>
            </motion.div>
        </div>
    </motion.section>
  )
}

export default ServiciosCallToAction