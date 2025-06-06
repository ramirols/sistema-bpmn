import { motion } from 'framer-motion';

import Hero from '../components/InicioHero';
import InicioServiciosSection from '../components/InicioServiciosSection';
import InicioNosotrosSection from '../components/InicioNosotrosSection';
import InicioPorqueElegirnosSection from '../components/InicioPorqueElegirnosSection';
import InicioSpecialtySection from '../components/InicioSpecialtySection';
import InicioContactoSection from '../components/InicioContactoSection';
import WhatsAppWidget from '../components/WhatsAppWidget';

const Inicio = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <InicioServiciosSection />
      <InicioNosotrosSection />
      <InicioPorqueElegirnosSection />
      <InicioSpecialtySection />
      <InicioContactoSection />
      <WhatsAppWidget />
    </motion.div>
  )
}

export default Inicio