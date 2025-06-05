import { motion } from 'framer-motion';

import Hero from '../components/Hero';
import ContactoSection from '../components/ContactoSection';
import ServiciosSection from '../components/ServiciosSection';
import NosotrosSection from '../components/NosotrosSection';

const Inicio = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <ServiciosSection />
      <NosotrosSection />
      <ContactoSection />
    </motion.div>
  )
}

export default Inicio