import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Inicio = () => {
    return (
        <motion.div
            className="min-h-200 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Consultorio Médico</h1>
                    <p className="text-lg mb-8">Bienvenido al sistema de gestión de citas</p>
                    <div className="flex flex-col gap-4 max-w-md mx-auto px-4">
                        <Link to="/dashboard-pacientes" className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors">
                            Registrar Paciente
                        </Link>
                        <Link to="/dashboard-citas" className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors">
                            Reservar Cita
                        </Link>
                        <Link to="/dashboard-reporte" className="bg-indigo-500 text-white py-3 px-6 rounded-lg hover:bg-indigo-600 transition-colors">
                            Ver Reporte de Citas
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Inicio;