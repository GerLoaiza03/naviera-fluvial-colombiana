import React from 'react';
import Buscador from '../../components/Buscador/Buscador';
import Imagen2 from '../../components/Imagen/image2';
import NavbarVertical from '../../components/Navbar/NavbarVertical';

const HistorialCliente = () => {
   return (
      <>
            <div className="container-fluid">
               <div className="row">
                  <NavbarVertical />
                  <div className="col-1"></div>
                  <div className="col-8">
                     <h5 className="fw-bold text-center mt-4 pt-2 pb-3">Historial de órdenes de envío </h5>
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
                                 <th scope="col">Código</th>
                                 <th scope="col">Puerto de origen</th>
                                 <th scope="col">Puerto destino</th>
                                 <th scope="col">Fecha envío</th>
                                 <th scope="col">Fecha entrega</th>
                                 <th scope="col">Estado</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <th scope="row">1</th>
                                 <td>Barranquilla</td>
                                 <td>Cartagena</td>
                                 <td>25/10/2020</td>
                                 <td>25/10/2020</td>
                                 <td>Entregado</td>
                              </tr>
                              <tr>
                                 <th scope="row">2</th>
                                 <td>Santa Marta</td>
                                 <td>Barranquilla</td>
                                 <td>25/10/2021</td>
                                 <td>-</td>
                                 <td>En camino</td>
                              </tr>
                              <tr>
                                 <th scope="row">3</th>
                                 <td>Barranquilla</td>
                                 <td>Barrancabermeja</td>
                                 <td>25/10/2020</td>
                                 <td>25/10/2020</td>
                                 <td>Engregado</td>
                              </tr>
                              <tr>
                                 <th scope="row">4</th>
                                 <td>Barranquilla</td>
                                 <td>Barrancabermeja</td>
                                 <td>25/10/2020</td>
                                 <td>25/10/2020</td>
                                 <td>Engregado</td>
                              </tr>
                              <tr>
                                 <th scope="row">5</th>
                                 <td>Barranquilla</td>
                                 <td>Barrancabermeja</td>
                                 <td>25/10/2020</td>
                                 <td>25/10/2020</td>
                                 <td>Engregado</td>
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
                           <Imagen2 />
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

export default HistorialCliente;