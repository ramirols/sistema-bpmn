import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './layout/Header'
import Footer from './layout/Footer'

import Inicio from './pages/Inicio'
import Citas from './pages/Citas'
import Pacientes from './pages/Pacientes'
import Reporte from './pages/Reporte'
import Error404 from './pages/Error404'
import './index.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="min-h-[100dvh] flex flex-col">
          <Header />
          <main className="pt-[60px] flex-1">
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/citas" element={<Citas />} />
              <Route path="/pacientes" element={<Pacientes />} />
              <Route path="/reporte" element={<Reporte />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App