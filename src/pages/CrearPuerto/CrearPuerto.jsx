import React from 'react';
import NavbarVerticalUI from '../../components/Navbar/NavbarVerticalUI';
import Puerto1 from '../../components/Imagen/puerto1.jsx';


const CrearPuerto = () => {
    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <NavbarVerticalUI/>

                    <div className="col-1"></div>
                    <div className="col-8">
                    <h3 className="fw-bold text-center pt-2 pb-3">Crear Puerto/ Modificar Puertos</h3>
              

                        <h5 className="fw-bold text-start pt-2 pb-3">I. Ingrese Datos del Puerto </h5>
                        <form className="ms-5 me-5">
                            <div className="mb-3">

                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="idpuerto" className="form-label">ID Puerto</label>
                                        <input type="number" className="form-control" name="idpuerto" id="idpuerto" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="nombrepuerto" className="form-label">Nombre Puerto </label>
                                        <input type="text" className="form-control" name="nombrepuero" id="nombrepuerto" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="ubicacionpuerto" className="form-label">Ubicación </label>
                                        <select className="form-select" aria-label="Default select example" name="tipodestinatario">
                                            <option value="">SantaMarta - Colombia</option>
                                            <option value="">Buenaventura - Chocó</option>
                                            <option value="">Cartagena - Colombia</option>
                                            <option value="">Barranquilla - Colombia</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                    <label htmlFor="telefonopuerto" className="form-label">Telefono Puerto</label>
                                        <input type="number" className="form-control" name="telefonopuerto" id="telefonopuerto" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="Responsable Puerto" className="form-label">Responsable Puerto</label>
                                        <input type="text" className="form-control" name="Responsable Puerto" id="Responsable Puerto" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="emailPuerto" className="form-label">Email Puerto</label>
                                        <input type="email" className="form-control" name="emailPuerto" id="emailPuerto" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                    <label htmlFor="direccionpuerto" className="form-label">Direccion Puerto</label>
                                        <input type="text" className="form-control" name="direccionpuerto" id="direccionpuerto" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="destinoinicio" className="form-label">Destino Inicio</label>
                                        <select className="form-select" aria-label="Default select example" name="destinoinicio">
                                            <option value="">SantaMarta - Colombia</option>
                                            <option value="">Buenaventura - Chocó</option>
                                            <option value="">Cartagena - Colombia</option>
                                            <option value="">Barranquilla - Colombia</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="destinofinal" className="form-label">Destino Final</label>
                                        <select className="form-select" aria-label="Default select example" name="destinofinal">
                                            <option value="">SantaMarta - Colombia</option>
                                            <option value="">Buenaventura - Chocó</option>
                                            <option value="">Cartagena - Colombia</option>
                                            <option value="">Barranquilla - Colombia</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="" className="form-label">Subir Foto Puerto</label>
                                        <form enctype="multipart/form-data" action="uploader.php" method="POST" className="form-label">
                                        <input name="uploadedfile" type="file" className="form-label" />
                                        <input type="submit" value="Subir archivo" className="form-label"/>
                                        </form>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col gap-2 flex-column d-flex ">
                                            <div className="mb-1 text-white">x</div>
                                            <button type="" class="btn color5 fw-bold text-white">
                                                Cancelar
                                            </button>
                                        </div>
                                        <div className="col gap-2 flex-column d-flex ">
                                            <div className="mb-1 text-white">x</div>
                                            <button type="" class="btn btn-success fw-bold text-white">
                                                Guardar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <hr />

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

export default CrearPuerto;