import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
import Inicio from "./pages/inicio/Inicio";
import QuienesSomos from "./pages/QuienesSomos/QuienesSomos";
import PoliticaEmpresarial from "./pages/PoliticaEmpresarial/PoliticaEmpresarial";
import Organigrama from "./pages/Organigrama/Organigrama";
import Rutas from "./pages/Rutas/Rutas";
import Flota from "./pages/Flota/Flota";
import Clientes from "./pages/Clientes/Clientes";
import Contacto from "./pages/Contacto/Contacto";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Error404 from "./pages/Error404/Error404";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Inicio />}/> 
        <Route path="/quienessomos" element={<QuienesSomos/>}/>
        <Route path="/politicaempresarial" element={<PoliticaEmpresarial/>}/>
        <Route path="/organigrama" element={<Organigrama/>}/>   
        <Route path="/rutas" element={<Rutas/>}/>   
        <Route path="/flota" element={<Flota/>}/>   
        <Route path="/clientes" element={<Clientes/>}/>   
        <Route path="/contacto" element={<Contacto/>}/>   
        <Route path="/login" element={<Login/>}/>  
        <Route path="*" element={<Error404/>}/>        
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
