import React from 'react';
import NavbarVerticalUI from '../../components/Navbar/NavbarVerticalUI';
import Buscador from '../../components/Buscador/Buscador';
import Puerto1 from '../../components/Imagen/puerto1';

const GestionPuerto = () => {
    return (
        <>
            <div className="container-fluid">
                        <div className="row">
                        <NavbarVerticalUI />
                        <div className="col-1"></div>
                        <div className="col-8">
                            <h5 className="fw-bold text-center mt-4 pt-2 pb-3">Puertos Habilitados/Inhabilitados </h5>
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
                                        <th scope="col">ID Puerto</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Ubicación</th>
                                        <th scope="col">Tarifa</th>
                                        <th scope="col">Observaciones</th>
                                        <th scope="col">Estado</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Puerto de Oro</td>
                                        <td>Barranquilla</td>
                                        <td>$2.121.231</td>
                                        <td>-//-</td>
                                        <td>
                                                <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                                                <label class="form-check-label" for="flexSwitchCheckChecked">Estado Puerto</label>
                                                </div>        
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>La Perla de America</td>
                                        <td>Santa Marta</td>
                                        <td>$3.000.000</td>
                                        <td>En mantenimiento</td>
                                        <td>
                                                <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" unchecked />
                                                <label class="form-check-label" for="flexSwitchCheckChecked">Estado Puerto</label>
                                                </div>          
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Puerto Buenaventura</td>
                                        <td>Buenaventura</td>
                                        <td>$2.500.000</td>
                                        <td>-//-</td>
                                        <td>
                                                <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                                                <label class="form-check-label" for="flexSwitchCheckChecked">Estado Puerto</label>
                                                </div>         
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Puerto Murcielago</td>
                                        <td>Wugan</td>
                                        <td>$5.000.000</td>
                                        <td>Cerrado</td>
                                        <td>
                                                <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" unchecked />
                                                <label class="form-check-label" for="flexSwitchCheckChecked">Estado Puerto</label>
                                                </div>          
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Puerto Italia</td>
                                        <td>Atalanta</td>
                                        <td>$4.500.000</td>
                                        <td>-//-</td>
                                        <td>
                                                <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                                                <label class="form-check-label" for="flexSwitchCheckChecked">Estado Puerto</label>
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
                                    <Puerto1 />
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

export default GestionPuerto;