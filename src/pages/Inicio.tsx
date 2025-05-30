import Formulario from '../components/Formulario';

const Inicio = () => {
    return (
        <div className="container p-6 min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold mb-6 text-center">Sistema BPMN - Registro de Solicitudes</h1>
            <Formulario />
        </div>
    );
}

export default Inicio