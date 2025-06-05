import { motion, type Variants } from "framer-motion";

const Footer = () => {
    const developerTextVariants: Variants = {
        initial: {
            opacity: 1,
            scale: 1,
            rotate: 0
        },
        animate: {
            opacity: 1,
            scale: [1, 1.05, 1],
            rotate: [0, -2, 2, 0],
            transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "loop" as const,
                ease: "easeInOut"
            }
        },
        hover: {
            scale: 1.1,
            color: ["#3B82F6", "#10B981", "#3B82F6"],
            textShadow: "0 0 8px rgba(59, 130, 246, 0.5)",
            transition: {
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse" as const
            }
        }
    };

    return (
        <motion.footer
            className="bg-gray-100 text-center py-4 text-sm text-gray-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="container flex items-center justify-center gap-3">
                © 2025 Consultorio Médico – Proyecto EFSRT |{" "}
                <motion.a
                    href="https://wa.me/51957271213"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-gray-600 hover:text-primary transition-colors"
                    variants={developerTextVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                >
                    Desarrollado por: Ramiro Ls
                </motion.a>
            </div>
        </motion.footer>
    );
};

export default Footer;