import type { Solicitud } from '../types/Solicitud';

const STORAGE_KEY = 'solicitudes_bpmn';

export function guardarSolicitud(data: Solicitud) {
  const solicitudes: Solicitud[] = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  solicitudes.push(data);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(solicitudes));
}

export function obtenerSolicitudes(): Solicitud[] {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
}