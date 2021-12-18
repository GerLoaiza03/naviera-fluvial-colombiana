import React from 'react';
import NavbarVerticalUI from '../../components/Navbar/NavbarVerticalUI';
import Barco1 from '../../components/Imagen/barco1.jsx';


const CrearBarco = () => {
    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <NavbarVerticalUI/>

                    <div className="col-1"></div>
                    <div className="col-8">
                    <h3 className="fw-bold text-center pt-2 pb-3">Crear Barco/ Modificar Barcos</h3>
              

                        <h5 className="fw-bold text-start pt-2 pb-3">I. Ingrese Datos del Barco </h5>
                        <form className="ms-5 me-5">
                            <div className="mb-3">

                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="idbarco" className="form-label">ID Barco</label>
                                        <input type="number" className="form-control" name="idbarco" id="idbarco" disabled/>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="nombrebarco" className="form-label">Nombre Barco </label>
                                        <input type="text" className="form-control" name="nombrebarco" id="nombrebarco" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="nombrebarco" className="form-label">Fecha </label>
                                        <input type="text" className="form-control" name="fechabarco" id="fechabarco" />
                                    </div>
                                    
                                </div>
                                <div className="row">
                                    <div className="col">
                                    <label htmlFor="telefonobarco" className="form-label">Capacidad Barco</label>
                                        <input type="number" className="form-control" name="capacidadbarco" id="capacidadbarco" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="Responsable barco" className="form-label">Rutas Barco</label>
                                        <select className="form-select" aria-label="Default select example" name="rutasbarco">
                                            <option value="">SantaMarta - Colombia</option>
                                            <option value="">Buenaventura - Chocó</option>
                                            <option value="">Cartagena - Colombia</option>
                                            <option value="">Barranquilla - Colombia</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="capitanbarco" className="form-label">Capitan Barco</label>
                                        <input type="text" className="form-control" name="capitanbarco" id="capitanbarco" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="" className="form-label">Subir Foto barco</label>
                                        <form enctype="multipart/form-data" action="uploader.php" method="POST" className="form-label">
                                        <input name="uploadedfile" type="file" className="form-label" />
                                        <input type="submit" value="Subir archivo" className="form-label"/>
                                        </form>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col gap-2 flex-column d-flex ">
                                            <div className="mb-1 text-white">x</div>
                                            <button type="" className="btn color5 fw-bold text-white">
                                                Cancelar
                                            </button>
                                        </div>
                                        <div className="col gap-2 flex-column d-flex ">
                                            <div className="mb-1 text-white">x</div>
                                            <button type="" className="btn btn-success fw-bold text-white">
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

export default CrearBarco;