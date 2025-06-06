import BannerPaginaServicios from "../assets/banner-servicios.webp";
import { motion } from "framer-motion";

const ServiciosHeroSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.section
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-cover bg-center bg-no-repeat py-4 md:py-16 h-[200px] md:h-[350px] relative"
                style={{
                    backgroundImage: `url(${BannerPaginaServicios})`,
                    backgroundBlendMode: 'lighten',
                }}
            >
                <div className="absolute inset-0 bg-black/20 md:bg-transparent"></div>
                <div className="container flex flex-col items-center justify-center h-full relative z-10">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-3xl font-bold text-white md:text-tertiary text-center px-4 md:px-0"
                    >
                        Nuestros servicios
                    </motion.h2>
                </div>
            </motion.section>
        </motion.div>
    );
};

export default ServiciosHeroSection;  