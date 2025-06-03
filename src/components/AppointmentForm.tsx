import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

interface Cita {
  paciente: string;
  fecha: string;
  hora: string;
  motivo: string;
}

const AppointmentForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Cita>();
  const pacientes = JSON.parse(localStorage.getItem('pacientes') || '[]');

  const onSubmit = (data: Cita) => {
    try {
      const citas = JSON.parse(localStorage.getItem('citas') || '[]');

      // Validar que la fecha no sea anterior a hoy
      const fechaSeleccionada = new Date(data.fecha);
      const hoy = new Date();
      hoy.setHours(0, 0, 0, 0);

      if (fechaSeleccionada < hoy) {
        toast.error('No se pueden agendar citas en fechas pasadas');
        return;
      }

      // Validar que no exista otra cita en la misma fecha y hora
      const citaExistente = citas.some((cita: Cita) =>
        cita.fecha === data.fecha && cita.hora === data.hora
      );

      if (citaExistente) {
        toast.error('Ya existe una cita en ese horario');
        return;
      }

      citas.push(data);
      localStorage.setItem('citas', JSON.stringify(citas));
      toast.success('Cita registrada correctamente');
      reset();
    } catch (error) {
      toast.error('Error al registrar la cita');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div>
        <select
          {...register('paciente', {
            required: 'Debe seleccionar un paciente'
          })}
          className="input w-full"
        >
          <option value="">Seleccione un paciente</option>
          {pacientes.map((p: any, i: number) => (
            <option key={i} value={p.nombre}>{p.nombre}</option>
          ))}
        </select>
        {errors.paciente && <span className="text-red-500 text-sm">{errors.paciente.message}</span>}
      </div>

      <div>
        <input
          type="date"
          {...register('fecha', {
            required: 'La fecha es requerida'
          })}
          className="input w-full"
          min={new Date().toISOString().split('T')[0]}
          max="2025-12-31"
        />
        {errors.fecha && <span className="text-red-500 text-sm">{errors.fecha.message}</span>}
      </div>

      <div>
        <input
          type="time"
          {...register('hora', {
            required: 'La hora es requerida',
            validate: (value) => {
              if (!value) return 'La hora es requerida';
              const [hours] = value.split(':');
              const hour = parseInt(hours || '0');
              return (hour >= 9 && hour <= 18) || 'El horario debe estar entre 9:00 y 18:00';
            }
          })}
          className="input w-full"
          min="09:00"
          max="18:00"
          step="1800"
        />
        {errors.hora && <span className="text-red-500 text-sm">{errors.hora.message}</span>}
      </div>

      <div>
        <textarea
          placeholder="Motivo de la cita"
          {...register('motivo', {
            required: 'El motivo es requerido',
            minLength: { value: 10, message: 'El motivo debe tener al menos 10 caracteres' },
            maxLength: { value: 200, message: 'El motivo no puede exceder los 200 caracteres' }
          })}
          className="input w-full resize-none"
          rows={3}
          maxLength={200}
        />
        {errors.motivo && <span className="text-red-500 text-sm">{errors.motivo.message}</span>}
      </div>

      <button type="submit" className="bg-green-500 text-white py-2 rounded hover:bg-green-600">
        Reservar
      </button>
    </form>
  );
}

export default AppointmentForm;