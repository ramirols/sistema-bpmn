import CotizacionImg from "../assets/contactanos-img.webp";
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';

const ContactanosCotizacionSection = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            servicio: 'Exámenes médicos ocupacionales',
            nombres: '',
            apellidos: '', 
            telefono: '',
            email: '',
            mensaje: ''
        }
    });

    const onSubmit = async (data: any) => {
        console.log(data);
        toast.promise(
            new Promise((resolve) => setTimeout(resolve, 2000)),
            {
                loading: 'Enviando formulario...',
                success: 'Formulario enviado exitosamente',
                error: 'Error al enviar el formulario',
            }
        );
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="py-10 bg-white mb-20"
        >
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-10">
                {/* Imagen con texto superpuesto */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative w-full lg:w-1/2"
                >
                    <img
                        src={CotizacionImg}
                        alt="Personal médico"
                        className="rounded-xl w-full h-[300px] md:h-auto object-cover"
                    />
                    {/* Mensaje flotante */}
                    <div className="absolute -bottom-16 md:bottom-0 left-0 md:translate-y-1/2 bg-white border border-blue-300 rounded-md p-4 md:p-5 w-[95%] md:w-[90%] shadow-md text-xs md:text-base leading-relaxed">
                        <p className="text-slate-700">
                            Esperamos poder ser parte importante de su empresa y demostrar nuestra experiencia.
                            Si necesita que nos comuniquemos con ustedes, complete el siguiente formulario:
                        </p>
                    </div>
                </motion.div>

                {/* Formulario */}
                <motion.form 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="w-full lg:w-1/2 space-y-4 mt-20 md:mt-0"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {/* Servicio */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-slate-700">Servicio</label>
                        <select 
                            {...register("servicio")}
                            className="w-full border border-gray-300 rounded px-4 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            <option>Exámenes médicos ocupacionales</option>
                            <option>Exámenes de ingreso</option>
                            <option>Pruebas Covid</option>
                            <option>Otros</option>
                        </select>
                    </div>

                    {/* Nombre y Apellido */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="w-full">
                            <input
                                type="text"
                                placeholder="Nombres"
                                {...register("nombres", { 
                                    required: "Este campo es requerido",
                                    maxLength: {
                                        value: 50,
                                        message: "Los nombres no deben exceder 50 caracteres"
                                    }
                                })}
                                className="w-full border border-gray-300 rounded px-4 py-2 bg-gray-100 focus:outline-none"
                            />
                            {errors.nombres && <span className="text-red-500 text-sm">{errors.nombres.message}</span>}
                        </div>
                        <div className="w-full">
                            <input
                                type="text"
                                placeholder="Apellidos"
                                {...register("apellidos", {
                                    required: "Este campo es requerido",
                                    maxLength: {
                                        value: 50,
                                        message: "Los apellidos no deben exceder 50 caracteres"
                                    }
                                })}
                                className="w-full border border-gray-300 rounded px-4 py-2 bg-gray-100 focus:outline-none"
                            />
                            {errors.apellidos && <span className="text-red-500 text-sm">{errors.apellidos.message}</span>}
                        </div>
                    </div>

                    {/* Teléfono */}
                    <div>
                        <input
                            type="tel"
                            placeholder="Número de teléfono"
                            {...register("telefono", {
                                required: "Este campo es requerido",
                                pattern: {
                                    value: /^\d{9}$/,
                                    message: "Ingrese un número de teléfono válido de 9 dígitos"
                                }
                            })}
                            className="w-full border border-gray-300 rounded px-4 py-2 bg-gray-100 focus:outline-none"
                        />
                        {errors.telefono && <span className="text-red-500 text-sm">{errors.telefono.message}</span>}
                    </div>

                    {/* Correo */}
                    <div>
                        <input
                            type="email"
                            placeholder="Correo Electrónico"
                            {...register("email", {
                                required: "Este campo es requerido",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Ingrese un correo electrónico válido"
                                }
                            })}
                            className="w-full border border-gray-300 rounded px-4 py-2 bg-gray-100 focus:outline-none"
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                    </div>

                    {/* Mensaje */}
                    <div>
                        <textarea
                            rows={3}
                            placeholder="Mensaje"
                            {...register("mensaje", {
                                maxLength: {
                                    value: 500,
                                    message: "El mensaje no debe exceder los 500 caracteres"
                                }
                            })}
                            className="w-full border border-gray-300 rounded px-4 py-2 bg-gray-100 focus:outline-none resize-none"
                        ></textarea>
                        {errors.mensaje && <span className="text-red-500 text-sm">{errors.mensaje.message}</span>}
                    </div>

                    {/* Botón */}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded shadow"
                    >
                        SOLICITAR COTIZACIÓN
                    </motion.button>
                </motion.form>
            </div>
        </motion.section>
    );
};

export default ContactanosCotizacionSection;  