import React from 'react';
import NavbarVerticalUI from '../../components/Navbar/NavbarVerticalUI';
import Buscador from '../../components/Buscador/Buscador';
import Barco1 from '../../components/Imagen/barco1';

const GestionBarco = () => {
    return (
        <>
            <div className="container-fluid">
                        <div className="row">
                        <NavbarVerticalUI />
                        <div className="col-1"></div>
                        <div className="col-8">
                            <h5 className="fw-bold text-center mt-4 pt-2 pb-3">Barcos Habilitados/Inhabilitados </h5>
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
                                        <th scope="col">ID Barco</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Fecha</th>
                                        <th scope="col">Capacidad</th>
                                        <th scope="col">Rutas</th>
                                        <th scope="col">Capitan</th>
                                        <th scope="col">Estado</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Barco de Oro</td>
                                        <td>12/12/2021</td>
                                        <td>3Toneladas</td>
                                        <td>Barranquilla - Wugan</td>
                                        <td>Fray Arciniegas</td>
                                        <td>
                                                <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                                                <label className="form-check-label" for="flexSwitchCheckChecked">Estado Barco</label>
                                                </div>        
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>La Perla de America</td>
                                        <td>12/12/2021</td>
                                        <td>5 Toneladas</td>
                                        <td>Santa Marta - New York</td>
                                        <td>Pedro Meza</td>
                                        <td>
                                                <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" unchecked />
                                                <label className="form-check-label" for="flexSwitchCheckChecked">Estado Barco</label>
                                                </div>          
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Barco Buenaventura</td>
                                        <td>21/12/2020</td>
                                        <td>10 Toneladas</td>
                                        <td>Buenaventura - Estocolmo</td>
                                        <td>Frank Villa</td>
                                        <td>
                                                <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                                                <label className="form-check-label" for="flexSwitchCheckChecked">Estado Barco</label>
                                                </div>         
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Barco Murcielago</td>
                                        <td>11/11/2020</td>
                                        <td>7 Toneladas</td>
                                        <td>Guajira - Amsterdam</td>
                                        <td>Edison Palomares</td>
                                        <td>
                                                <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" unchecked />
                                                <label className="form-check-label" for="flexSwitchCheckChecked">Estado Barco</label>
                                                </div>          
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>La Pinta</td>
                                        <td>08/08/2021</td>
                                        <td>5 Toneladas</td>
                                        <td>Buenaventura - Shanghai</td>
                                        <td>German Loaiza</td>
                                        <td>
                                                <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                                                <label className="form-check-label" for="flexSwitchCheckChecked">Estado Barco</label>
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
                                    <Barco1 />
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

export default GestionBarco;