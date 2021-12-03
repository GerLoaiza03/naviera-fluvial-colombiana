import React from "react";
import { NavLink } from 'react-router-dom';

const NavbarVertical = () => {
    return (
        <>

            <div className="col color1 pt-3">

                <ul className="nav flex-column ">
                    <li className="nav-item ">

                        <NavLink className="nav-link  text-white" to="/usuarioexterno" activeClassName="active" exact="true">Crear orden</NavLink>

                    </li>
                    <li className="nav-item">

                        <NavLink className="nav-link  text-white" to="/historialcliente" activeClassName="active" exact="true">Historial de órdenes</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link  text-white" to="/rastreoenvio" activeClassName="active" exact="true">Rastrear envío</NavLink>
                    </li>
                </ul>

            </div>


        </>
    );
}

export default NavbarVertical;