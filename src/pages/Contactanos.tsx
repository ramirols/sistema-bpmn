import { motion } from 'framer-motion';
import ContactanosHeroSection from '../components/ContactanosHeroSection';
import ContactanosCotizacionSection from '../components/ContactanosCotizacionSection';
import InicioContactoSection from '../components/InicioContactoSection';

const Contactanos = () => {
  return (
    <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <ContactanosHeroSection />
            <ContactanosCotizacionSection />
            <InicioContactoSection />
    </motion.div>
  );
};

export default Contactanos