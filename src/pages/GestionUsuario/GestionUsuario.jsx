import React from 'react';
import NavbarVerticalUI from '../../components/Navbar/NavbarVerticalUI';
import Buscador from '../../components/Buscador/Buscador';
import UserIcon from '../../components/Imagen/usericon';

const GestionUsuario = () => {
    return (
        <>
            <div className="container-fluid">
                        <div className="row">
                        <NavbarVerticalUI />
                        <div className="col-1"></div>
                        <div className="col-8">
                            <h5 className="fw-bold text-center mt-4 pt-2 pb-3">Gestionar Usuarios </h5>
                            <div className="row">
                                <div className="col"> </div>

                                <div className="col-4">
                                    <Buscador />
                                </div>
                            </div>

                            <div className="row">
                                <table className="table caption-top">

                                    <thead>
                                    <tr>
                                        <th scope="col">ID Usuario</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Rol</th>
                                        <th scope="col">Fecha Creación</th>
                                        <th scope="col">Ciudad</th>
                                        <th scope="col">Estado</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Pedro Mesas</td>
                                        <td>Administrador</td>
                                        <td>30/11/2021</td>
                                        <td>Barranquilla</td>
                                        <td>
                                                <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                                                <label className="form-check-label" for="flexSwitchCheckChecked">Estado Usuario</label>
                                                </div>        
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Juan Dams</td>
                                        <td>User Interno</td>
                                        <td>01/12/2021</td>
                                        <td>Santa Marta</td>
                                        <td>
                                                <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" unchecked />
                                                <label className="form-check-label" for="flexSwitchCheckChecked">Estado Usuario</label>
                                                </div>          
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Edison Palomares</td>
                                        <td>Usuario Interno</td>
                                        <td>02/12/2021</td>
                                        <td>Barrancabermeja</td>
                                        <td>
                                                <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" unchecked />
                                                <label className="form-check-label" for="flexSwitchCheckChecked">Estado Usuario</label>
                                                </div>         
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Frank Villa</td>
                                        <td>Usuario Externo</td>
                                        <td>03/12/2021</td>
                                        <td>Wugan</td>
                                        <td>
                                                <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                                                <label className="form-check-label" for="flexSwitchCheckChecked">Estado Usuario</label>
                                                </div>          
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>German Loaiza</td>
                                        <td>Administrador</td>
                                        <td>29/11/2021</td>
                                        <td>Atalanta</td>
                                        <td>
                                                <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                                                <label className="form-check-label" for="flexSwitchCheckChecked">Estado Usuario</label>
                                                </div>         
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>

                                <nav aria-label="Page navigation example">
                                    <ul className="pagination">
                                    <li className="page-item"><a className="page-link" href="#/">Previous</a></li>
                                    <li className="page-item"><a className="page-link" href="#/">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#/">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#/">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#/">Next</a></li>
                                    </ul>
                                </nav>

                            </div>

                            <div className="row">
                                <div className="col"></div>
                                <div className="col-5">
                                    <UserIcon />
                                </div>
                                <div className="col"></div>
                            </div>





                        </div>
                        <div className="col-1"></div>
                        </div>
                    </div>

                    
        </>
    );
}

export default GestionUsuario;