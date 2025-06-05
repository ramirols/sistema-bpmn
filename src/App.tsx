import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

{/* Layout del cliente */ }
import Header from './layout/Header'
import Footer from './layout/Footer'

{/* Layout del sistema */ }
import HeaderSistema from './sistema/layout/Header'
import FooterSistema from './sistema/layout/Footer'

{/* Páginas del sistema */ }
import SistemaInicio from './sistema/Inicio'
import SistemaCitas from './sistema/Citas'
import SistemaPacientes from './sistema/Pacientes'
import SistemaReporte from './sistema/Reporte'

{/* Páginas del cliente */ }
import Error404 from './pages/Error404'
import Inicio from './pages/Inicio'
import Servicios from './pages/Servicios'
import Nosotros from './pages/Nosotros'
import Contactanos from './pages/Contactanos'

{/* Páginas de autenticación */ }
import Login from './auth/Login'
import Register from './auth/Register'

const DashboardLayout = () => {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <HeaderSistema />
      <main className="pt-[72px] flex-1">
        <Routes>
          <Route path="/dashboard-inicio" element={<SistemaInicio />} />
          <Route path="/dashboard-citas" element={<SistemaCitas />} />
          <Route path="/dashboard-pacientes" element={<SistemaPacientes />} />
          <Route path="/dashboard-reporte" element={<SistemaReporte />} />
        </Routes>
      </main>
      <FooterSistema />
    </div>
  )
}

const MainLayout = () => {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Header />
      <main className="pt-[72px] flex-1">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contactanos" element={<Contactanos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

const AppLayout = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  return isDashboard ? <DashboardLayout /> : <MainLayout />;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </>
  )
}

export default App