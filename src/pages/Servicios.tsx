import { motion } from 'framer-motion';

import ServiciosHeroSection from "../components/ServiciosHeroSection";
import ServiciosCards from "../components/InicioServiciosSection";
import ServiciosCallToAction from "../components/ServiciosCallToAction";
import InicioContactoSection from "../components/InicioContactoSection";

const Servicios = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
        <ServiciosHeroSection />
        <ServiciosCards />
        <ServiciosCallToAction />
        <InicioContactoSection />
    </motion.div>
  )
}

export default Servicios