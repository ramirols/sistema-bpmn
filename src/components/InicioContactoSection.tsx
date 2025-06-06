import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const contactItems = [
  {
    icon: <FaMapMarkerAlt size={24} />,
    title: 'UBÍCANOS EN',
    lines: ['Ca. Argentina 358, el Parral - Comas'],
  },
  {
    icon: <FaPhoneAlt size={24} />,
    title: 'LLÁMANOS',
    lines: ['+51 957 271 213'],
  },
  {
    icon: <FaEnvelope size={24} />,
    title: 'ENVÍANOS UN CORREO',
    lines: ['ramirols.dev@gmail.com'],
  },
];

const InicioContactoSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-primary text-white py-10"
    >
      <div className="container">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 text-center md:text-left relative">
          {contactItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="flex flex-col justify-center items-center md:items-start md:flex-row gap-4 md:gap-3 w-full md:w-1/3 relative px-4 md:px-0"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="text-white"
              >
                {item.icon}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.3 }}
              >
                <h4 className="font-semibold uppercase mb-2 md:mb-0">{item.title}</h4>
                {item.lines.map((line, i) => (
                  <p key={i} className="text-sm leading-tight">
                    {line}
                  </p>
                ))}
              </motion.div>
              {/* Divider vertical para desktop */}
              {idx < contactItems.length - 1 && (
                <div className="hidden md:block h-16 border-r border-white absolute right-0 top-1/2 transform -translate-y-1/2"></div>
              )}
              {/* Divider horizontal para mobile */}
              {idx < contactItems.length - 1 && (
                <div className="w-1/2 h-[1px] bg-white/30 md:hidden my-4"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default InicioContactoSection;