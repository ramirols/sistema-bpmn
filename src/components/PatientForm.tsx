import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

interface Paciente {
  nombre: string;
  dni: string;
  correo: string;
}

const PatientForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Paciente>();

  const onSubmit = (data: Paciente) => {
    try {
      const pacientes = JSON.parse(localStorage.getItem('pacientes') || '[]');

      const existeDNI = pacientes.some((p: Paciente) => p.dni === data.dni);
      if (existeDNI) {
        toast.error('Ya existe un paciente con ese DNI');
        return;
      }

      pacientes.push(data);
      localStorage.setItem('pacientes', JSON.stringify(pacientes));
      toast.success('Paciente registrado correctamente');
      reset();
    } catch (error) {
      toast.error('Error al registrar el paciente');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div>
        <input
          type="text"
          placeholder="Nombre completo"
          maxLength={50}
          {...register('nombre', {
            required: 'El nombre es requerido',
            minLength: { value: 3, message: 'El nombre debe tener al menos 3 caracteres' },
            maxLength: { value: 50, message: 'El nombre no puede exceder los 50 caracteres' },
            pattern: { value: /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/, message: 'El nombre solo debe contener letras' }
          })}
          className="input w-full"
        />
        {errors.nombre && <span className="text-red-500 text-sm">{errors.nombre.message}</span>}
      </div>

      <div>
        <input
          type="text"
          placeholder="DNI"
          maxLength={8}
          {...register('dni', {
            required: 'El DNI es requerido',
            pattern: { value: /^\d{8}$/, message: 'El DNI debe tener exactamente 8 dígitos numéricos' },
            validate: (value) => value.length === 8 || 'El DNI debe tener exactamente 8 dígitos'
          })}
          className="input w-full"
          onKeyPress={(e) => {
            if (!/[0-9]/.test(e.key)) {
              e.preventDefault();
            }
          }}
        />
        {errors.dni && <span className="text-red-500 text-sm">{errors.dni.message}</span>}
      </div>

      <div>
        <input
          type="email"
          placeholder="Correo electrónico"
          maxLength={100}
          {...register('correo', {
            required: 'El correo es requerido',
            maxLength: { value: 100, message: 'El correo no puede exceder los 100 caracteres' },
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Ingrese un correo electrónico válido'
            }
          })}
          className="input w-full"
        />
        {errors.correo && <span className="text-red-500 text-sm">{errors.correo.message}</span>}
      </div>

      <button type="submit" className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Guardar
      </button>
    </form>
  );
}

export default PatientForm;