import BannerPaginaServicios from "../assets/banner-servicios.webp";
import { motion } from "framer-motion";

const NosotrosHeroSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <section
                className="bg-cover bg-center bg-no-repeat py-8 md:py-16 h-[250px] md:h-[350px]"
                style={{
                    backgroundImage: `url(${BannerPaginaServicios})`,
                    backgroundBlendMode: 'lighten',
                }}
            >
                <div className="container flex flex-col items-center justify-center h-full px-4 md:px-0">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-2xl md:text-3xl font-bold text-tertiary text-center"
                    >
                        Nosotros
                    </motion.h2>
                </div>
            </section>
        </motion.div>
    );
};

export default NosotrosHeroSection;