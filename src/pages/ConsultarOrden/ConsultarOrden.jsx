import React from 'react';
import NavbarVerticalUI from '../../components/Navbar/NavbarVerticalUI';
import Buscador from '../../components/Buscador/Buscador';
import VectorOrden from '../../components/Imagen/vectororden';

const ConsultarOrden = () => {
    return (
        <>
            <div className="container-fluid">
                        <div className="row">
                        <NavbarVerticalUI />
                        <div className="col-1"></div>
                        <div className="col-8">
                            <h5 className="fw-bold text-center mt-4 pt-2 pb-3">Consultar Ordenes Gestionadas</h5>
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
                                        <td>Raul Hernandez</td>
                                        <td>Alimentos</td>
                                        <td>Santa Marta - Colombia</td>
                                        <td>Xiamen - China</td>
                                        <td>
                                            Aprobada
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Pedro Fernandez</td>
                                        <td>Textil</td>
                                        <td>Buenaventura - Colombia</td>
                                        <td>Los Angeles - US</td>
                                        <td>
                                            Rechazada
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Diego Jose</td>
                                        <td>Vehiculos</td>
                                        <td>Guajira - Colombia</td>
                                        <td>Hamburgo - Alemania</td>
                                        <td>
                                            Aprobada
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Gabriela Cruz</td>
                                        <td>Electrodomesticos</td>
                                        <td>Patagonia - Argentina</td>
                                        <td>Long Beach - US</td>
                                        <td>
                                            Aprobada
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Reina Real</td>
                                        <td>Equipos Redes</td>
                                        <td>Manaos - Brazil</td>
                                        <td>Kaohsiung - Taiwan</td>
                                        <td>
                                            Aprobada
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

export default ConsultarOrden;