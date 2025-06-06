import IconPsicologia from "../assets/icon-psicologia.webp";
import IconNutricion from "../assets/icon-nutricion.webp";
import IconCardiologia from "../assets/icon-cardiologia.webp";
import { motion } from 'framer-motion';

const specialties = [
  {
    icon: <img src={IconPsicologia} alt="Psicología" className="w-20 sm:w-24 md:w-auto" />,
    title: 'Psicología',
  },
  {
    icon: <img src={IconNutricion} alt="Nutrición" className="w-20 sm:w-24 md:w-auto" />,
    title: 'Nutrición',
  },
  {
    icon: <img src={IconCardiologia} alt="Cardiología" className="w-20 sm:w-24 md:w-auto" />,
    title: 'Cardiología',
  },
];

const InicioSpecialtySection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-10 flex flex-col items-center justify-center"
    >
        <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold text-tertiary mb-8 md:mb-12 text-center md:text-start"
            >
                Contamos con las siguientes especialidades
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-row items-center justify-between gap-8 md:gap-12 pt-6 md:pt-10">
                {specialties.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.3, delay: idx * 0.2 }}
                      className="flex flex-col items-center gap-4 w-full md:w-auto bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                        <motion.div
                          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          {item.icon}
                        </motion.div>
                        <span className="text-slate-800 text-lg font-medium text-center">{item.title}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    </motion.section>
  );
};

export default InicioSpecialtySection;