import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { guardarSolicitud, obtenerSolicitudes } from '../utils/storage';
import type { Solicitud } from '../types/Solicitud';

export default function Formulario() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Solicitud>();
  const [solicitudes, setSolicitudes] = useState<Solicitud[]>([]);

  useEffect(() => {
    setSolicitudes(obtenerSolicitudes());
  }, []);

  const onSubmit = (data: Solicitud) => {
    const nueva = {
      ...data,
      fecha: new Date().toLocaleString(),
      estado: 'Pendiente',
    };
    guardarSolicitud(nueva);
    setSolicitudes(prev => [...prev, nueva]);
    reset();
  };

  return (
    <div className="flex gap-8 w-full">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-1/2"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 rounded shadow">
          <div>
            <label className="block text-sm font-medium">Nombre completo</label>
            <input 
              {...register('nombre', { 
                required: 'El nombre es requerido',
                minLength: { value: 3, message: 'El nombre debe tener al menos 3 caracteres' }
              })} 
              className="w-full border p-2 rounded" 
            />
            {errors.nombre && <span className="text-red-500 text-sm">{errors.nombre.message}</span>}
          </div>
          <div>
            <label className="block text-sm font-medium">Correo electrónico</label>
            <input 
              type="email" 
              {...register('correo', { 
                required: 'El correo es requerido',
                pattern: { 
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Correo electrónico inválido'
                }
              })} 
              className="w-full border p-2 rounded" 
            />
            {errors.correo && <span className="text-red-500 text-sm">{errors.correo.message}</span>}
          </div>
          <div>
            <label className="block text-sm font-medium">Motivo</label>
            <textarea 
              {...register('motivo', { 
                required: 'El motivo es requerido',
                minLength: { value: 10, message: 'El motivo debe tener al menos 10 caracteres' }
              })} 
              className="w-full border p-2 rounded"
            ></textarea>
            {errors.motivo && <span className="text-red-500 text-sm">{errors.motivo.message}</span>}
          </div>
          <motion.button 
            type="submit" 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enviar solicitud
          </motion.button>
        </form>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-1/2"
      >
        <h2 className="text-xl font-semibold mb-4">Solicitudes registradas</h2>
        <div className="max-h-[600px] overflow-y-auto pr-2">
          {solicitudes.length === 0 ? (
            <p className="text-gray-500">No hay solicitudes aún.</p>
          ) : (
            <div className="space-y-4">
              <AnimatePresence>
                {solicitudes.map((s, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="p-4 border rounded shadow bg-white relative"
                    whileHover={{ 
                      backgroundColor: "#f8fafc",
                      borderColor: "#3b82f6",
                      zIndex: 10,
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <p>
                      <strong>{i + 1}. {s.nombre}</strong> - {s.correo}
                    </p>
                    <p>Motivo: {s.motivo}</p>
                    <p className="text-sm text-gray-500">Fecha: {s.fecha} | Estado: {s.estado}</p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}