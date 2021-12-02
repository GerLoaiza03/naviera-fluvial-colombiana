import React from "react";
import logo from "../../img/logo.png";
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (

  <div className="container-fluid gradiente texto">
    <div className="row d-flex align-items-center">
      <div className="col-md-3 col-sm-12">
        <div className="row">
        <div className="col-5">
        <img className="navbar-brand"  src={logo} width="120" height="90" alt="" />
        </div>
        <div className="col-7 d-flex align-items-center">
        <span className="text-white ">Te llevamos a buen puerto!</span>
        </div>
        </div>
      </div>

      <div className="col-md-9 col-sm-12 ">
        <div className="row">
       <nav className="navbar navbar-expand-md navbar-light ">

          <div className="col-md-5 col-12">
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          </div>
          <div className="col-md-7 col-12 ">
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" style={{color:'white'}} to="/" activeClassName="active" exact="true">Inicio</NavLink>
              </li>

            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="drowt" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'white'}}>
                  Empresa
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><NavLink className="dropdown-item" to="/quienessomos" activeClassName="active" exact="true">Quienes somos</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/politicaempresarial" activeClassName="active" exact="true" >Política empresarial</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/organigrama" activeClassName="active" exact="true">Organigrama</NavLink></li>
                </ul>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" style={{color:'white'}} to="/rutas" activeClassName="active" exact="true">Rutas</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" style={{color:'white'}} to="/flota" activeClassName="active" exact="true">Flota</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" style={{color:'white'}} to="/clientes" activeClassName="active" exact="true">Alianzas comerciales</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" style={{color:'white'}} to="/contacto" activeClassName="active" exact="true">Contacto</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" style={{color:'white'}} to="/login" activeClassName="active" exact="true">Login</NavLink>
              </li>
              
            </ul>
          </div>

          </div>       

          
      </nav>
        </div>
      </div>
    </div>
  </div>
   
     );
};

export default Navbar;
