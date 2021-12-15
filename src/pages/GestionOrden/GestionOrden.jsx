import React from 'react';
import NavbarVerticalUI from '../../components/Navbar/NavbarVerticalUI';
import Buscador from '../../components/Buscador/Buscador';
import VectorOrden from '../../components/Imagen/vectororden';

const GestionOrden = () => {
    return (
        <>
            <div className="container-fluid">
                        <div className="row">
                        <NavbarVerticalUI />
                        <div className="col-1"></div>
                        <div className="col-8">
                            <h5 className="fw-bold text-center mt-4 pt-2 pb-3">Gestionar Ordenes Despacho Generadas</h5>
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
                                        <th scope="col">ID Orden</th>
                                        <th scope="col">Cliente</th>
                                        <th scope="col">Tipo Carga</th>
                                        <th scope="col">Puerto Origen</th>
                                        <th scope="col">Puerto Destino</th>
                                        <th scope="col">Estado</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Pepito Paz</td>
                                        <td>Textil</td>
                                        <td>Santa Marta - Colombia</td>
                                        <td>Wugan - China</td>
                                        <td>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked/>
                                                <label className="form-check-label" for="inlineRadio1">Pendiente</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                <label className="form-check-label" for="inlineRadio2">Aprobar</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
                                                <label className="form-check-label" for="inlineRadio2">Rechazar</label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Juan Perez</td>
                                        <td>Alimentos</td>
                                        <td>Barranquilla - Colombia</td>
                                        <td>Singapur - Singapur</td>
                                        <td>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                <label className="form-check-label" for="inlineRadio1">Pendiente</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" checked/>
                                                <label className="form-check-label" for="inlineRadio2">Aprobar</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
                                                <label className="form-check-label" for="inlineRadio2">Rechazar</label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Sofia Daniela</td>
                                        <td>Electrodomesticos</td>
                                        <td>Buenaventura - Colombia</td>
                                        <td>Busan - Korea</td>
                                        <td>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked/>
                                                <label className="form-check-label" for="inlineRadio1">Pendiente</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                <label className="form-check-label" for="inlineRadio2">Aprobar</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
                                                <label className="form-check-label" for="inlineRadio2">Rechazar</label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Andrea Uribe</td>
                                        <td>Flores</td>
                                        <td>Guajira - Colombia</td>
                                        <td>Rotterdam - Paises Bajos</td>
                                        <td>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked/>
                                                <label className="form-check-label" for="inlineRadio1">Pendiente</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                <label className="form-check-label" for="inlineRadio2">Aprobar</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
                                                <label className="form-check-label" for="inlineRadio2">Rechazar</label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Sharon Tatiana</td>
                                        <td>Vehiculos</td>
                                        <td>Barranquilla - Colombia</td>
                                        <td>Amberes - Belgica</td>
                                        <td>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                <label className="form-check-label" for="inlineRadio1">Pendiente</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                <label className="form-check-label" for="inlineRadio2">Aprobar</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                                <label className="form-check-label" for="inlineRadio2">Rechazar</label>
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
                                    <VectorOrden />
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

export default GestionOrden;