import { useState, useMemo } from 'react';
import toast from 'react-hot-toast';

const AppointmentReport = () => {
  const [fechaSeleccionada, setFechaSeleccionada] = useState('');
  const [busqueda, setBusqueda] = useState('');
  const citas = JSON.parse(localStorage.getItem('citas') || '[]');
  const pacientes = JSON.parse(localStorage.getItem('pacientes') || '[]');

  const citasFiltradas = useMemo(() => {
    return citas.filter((cita: any) => {
      const cumpleFecha = !fechaSeleccionada || cita.fecha === fechaSeleccionada;
      const cumpleBusqueda = !busqueda ||
        cita.paciente.toLowerCase().includes(busqueda.toLowerCase()) ||
        cita.motivo.toLowerCase().includes(busqueda.toLowerCase());
      return cumpleFecha && cumpleBusqueda;
    });
  }, [citas, fechaSeleccionada, busqueda]);

  const eliminarCita = (index: number) => {
    const promiseEliminar = new Promise((resolve, reject) => {
      try {
        const citasActuales = JSON.parse(localStorage.getItem('citas') || '[]');
        citasActuales.splice(index, 1);
        localStorage.setItem('citas', JSON.stringify(citasActuales));
        resolve('Cita eliminada correctamente');
      } catch (error) {
        reject('Error al eliminar la cita');
      }
    });

    toast.promise(promiseEliminar, {
      loading: 'Eliminando cita...',
      success: () => {
        window.location.reload();
        return 'Cita eliminada correctamente';
      },
      error: 'Error al eliminar la cita',
    });
  };

  return (
    <div className="space-y-4 w-full overflow-x-auto">
      <div className="flex flex-col md:flex-row items-center gap-4 w-full">
        <input
          type="date"
          value={fechaSeleccionada}
          onChange={(e) => setFechaSeleccionada(e.target.value)}
          className="input w-full md:w-auto"
          min={new Date().toISOString().split('T')[0]}
          max="2025-12-31"
        />
        <input
          type="text"
          placeholder="Buscar por paciente o motivo..."
          value={busqueda}
          onChange={(e) => {
            if (e.target.value.length <= 50) {
              setBusqueda(e.target.value);
            }
          }}
          maxLength={50}
          list="pacientes-list"
          className="input w-full md:flex-1"
        />
        <datalist id="pacientes-list">
          {pacientes.map((p: any, i: number) => (
            <option key={i} value={p.nombre} />
          ))}
        </datalist>
        <p className="text-gray-600 text-sm md:text-base whitespace-nowrap">
          Total de citas: <span className="font-bold">{citasFiltradas.length}</span>
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border whitespace-nowrap">Paciente</th>
              <th className="p-2 border whitespace-nowrap">Fecha</th>
              <th className="p-2 border whitespace-nowrap">Hora</th>
              <th className="p-2 border whitespace-nowrap">Motivo</th>
              <th className="p-2 border whitespace-nowrap">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {citasFiltradas.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center p-4">No hay citas registradas.</td>
              </tr>
            ) : (
              citasFiltradas.map((cita: any, index: number) => (
                <tr key={index} className="text-center border-t hover:bg-gray-50">
                  <td className="p-2 border">{cita.paciente}</td>
                  <td className="p-2 border">{cita.fecha}</td>
                  <td className="p-2 border">{cita.hora}</td>
                  <td className="p-2 border break-words">{cita.motivo}</td>
                  <td className="p-2 border">
                    <button
                      onClick={() => eliminarCita(index)}
                      className="bg-red-500 text-white px-2 md:px-4 py-1 md:py-2 text-sm md:text-base rounded-md hover:bg-red-600 transition-colors cursor-pointer"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AppointmentReport;