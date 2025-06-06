import { motion } from 'framer-motion';

import NosotrosHeroSection from "../components/NosotrosHeroSection"
import NosotrosQuienesSomosSection from "../components/NosotrosQuienesSomosSection"
import NosotrosPorqueElegirnosSection from "../components/NosotrosPorqueElegirnosSection"
import InicioContactoSection from "../components/InicioContactoSection"

const Nosotros = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <NosotrosHeroSection />
            <NosotrosQuienesSomosSection />
            <NosotrosPorqueElegirnosSection />
            <InicioContactoSection />
        </motion.div>
    )
}

export default Nosotros