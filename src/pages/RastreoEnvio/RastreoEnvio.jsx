import React from 'react';
import NavbarVertical from '../../components/Navbar/NavbarVertical';
import Imagen2 from '../../components/Imagen/image2';
import { Link} from 'react-router-dom';

const RastreoEnvio = () => {
   return (
      <>
         <div className="container-fluid">
            <div className="row">
               <NavbarVertical />

               <div className="col-1"></div>
               <div className="col-8">
                  <h5 className="fw-bold text-center pt-5 pb-5">Rastrea la ubicación de tu envío </h5>

                  <div className="row">
                     <div className="col"></div>
                     <div className="col-8 text-center">

                        <div className="form-check form-check-inline">
                           <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                           <label class="form-check-label" for="inlineRadio1">Número de guía</label>
                        </div>
                        <div className="form-check form-check-inline">
                           <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                           <label class="form-check-label" for="inlineRadio2">Número de remisión</label>
                        </div>
                        <div className="form-check form-check-inline">
                           <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                           <label class="form-check-label" for="inlineRadio3">Número de factura</label>
                        </div>



                     </div>
                     <div className="col"></div>
                  </div>

                  <div className="row mt-5">
                     <div className="col"></div>
                     <div className="col-8 text-start">


                        <input type="text" className="form-control" placeholder="Ingresa el número aquí" aria-label="Username" aria-describedby="basic-addon1"></input>
                        <div className="d-grid gap-2 col-7 mx-auto mt-4">
                            <Link to="/rastreoenvio" className="btn color5 fw-bold p-2 text-white" > Consultar</Link>
                        </div>
                     </div>
                     <div className="col"></div>
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

export default RastreoEnvio;