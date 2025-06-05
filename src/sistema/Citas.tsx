import AppointmentForm from '../components/AppointmentForm';
import { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';

const Citas = () => {
    return (
        <motion.div
            className="min-h-200 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Toaster position="top-center" reverseOrder={false} />
            <div className="container">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4">Reservar Cita</h2>
                    <div className="max-w-xl mx-auto">
                        <AppointmentForm />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Citas;