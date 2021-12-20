import './css/spur.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

import Inicio from './pages/inicio/Inicio';
import QuienesSomos from './pages/QuienesSomos/QuienesSomos';
import PoliticaEmpresarial from './pages/PoliticaEmpresarial/PoliticaEmpresarial';
import Organigrama from './pages/Organigrama/Organigrama';
import Rutas from './pages/Rutas/Rutas';
import Flota from './pages/Flota/Flota';
import Clientes from './pages/Clientes/Clientes';
import Contacto from './pages/Contacto/Contacto';
import Login from './pages/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Error404 from './pages/Error404/Error404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registro from './pages/Registro/Registro';
import RecuperarPassword from './pages/RecuperarPassword/RecurarPassword';
import UsuarioExterno from './pages/UsuarioExterno/UsuarioExterno';
import HistorialCliente from './pages/HistorialCliente/HistorialCliente';
import RastreoEnvio from './pages/RastreoEnvio/RastreoEnvio';
import CrearPuerto from './pages/CrearPuerto/CrearPuerto';
import GestionPuerto from './pages/GestionPuerto/GestionPuerto';
import GestionUsuario from './pages/GestionUsuario/GestionUsuario';
import CrearUsuario from './pages/CrearUsuario/CrearUsuario';
import GestionOrden from './pages/GestionOrden/GestionOrden';
import ConsultarOrden from './pages/ConsultarOrden/ConsultarOrden';
import Dashboard from './pages/Dashboard/Dashboard';
import CrearBarco from './pages/CrearBarco/CrearBarco';
import GestionBarco from './pages/GestionBarco/GestionBarco';

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Inicio />} />
					<Route path='/quienessomos' element={<QuienesSomos />} />
					<Route
						path='/politicaempresarial'
						element={<PoliticaEmpresarial />}
					/>
					<Route path='/organigrama' element={<Organigrama />} />
					<Route path='/rutas' element={<Rutas />} />
					<Route path='/flota' element={<Flota />} />
					<Route path='/clientes' element={<Clientes />} />
					<Route path='/contacto' element={<Contacto />} />
					<Route path='/login' element={<Login />} />
					<Route path='/registro' element={<Registro />} />
					<Route path='/recuperarpassword' element={<RecuperarPassword />} />
					<Route path='/usuarioexterno' element={<UsuarioExterno />} />
					<Route path='/historialcliente' element={<HistorialCliente />} />
					<Route path='/rastreoenvio' element={<RastreoEnvio />} />
					{/* A partir de aca son usuarioInterno   */}
					<Route path='/crearpuerto' element={<CrearPuerto />} />
					<Route path='/gestionpuerto' element={<GestionPuerto />} />
					<Route path='/gestionusuario' element={<GestionUsuario />} />
					<Route path='/crearusuario' element={<CrearUsuario />} />
					<Route path='/gestionorden' element={<GestionOrden />} />
					<Route path='/consultarorden' element={<ConsultarOrden />} />
					<Route path='/dashboard' element={<Dashboard />} />
					<Route path='/crearbarco' element={<CrearBarco />} />
					<Route path='/gestionbarco' element={<GestionBarco />} />
					<Route path='*' element={<Error404 />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</>
	);
}

export default App;
