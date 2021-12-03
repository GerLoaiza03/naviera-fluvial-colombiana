import React from 'react';
import NavbarVertical from '../../components/Navbar/NavbarVertical';


const UsuarioExterno = () => {
    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <NavbarVertical/>

                    <div className="col-1"></div>
                    <div className="col-8">
                    <h3 className="fw-bold text-center pt-2 pb-3">Crea tu orden de envío </h3>
                        <h5 className="fw-bold text-start pt-2 pb-3">I. Datos de la carga </h5>
                        <form className="ms-5 me-5">
                            <div className="mb-3">

                                <div className="row">

                                    <div className="col mb-2">
                                        <label htmlFor="puertoorigen" className="form-label">Puerto de origen</label>
                                        <select className="form-select" aria-label="Default select example" name="puertoorigen">
                                            <option className="fw-bold" value="" >Seleccione</option>
                                            <option value="">Barranquilla</option>
                                            <option value="">Cartagena</option>
                                            <option value="">Santa Marta</option>
                                            <option value="">Dibulla</option>
                                            <option value="">Rioacha</option>
                                            <option value="">Barrancabermeja</option>
                                            <option value="">La Dorada</option>
                                        </select>
                                    </div>

                                    <div className="col mb-3">
                                        <label htmlFor="puertodestino" className="form-label">Puerto destino </label>
                                        <select className="form-select" aria-label="Default select example" name="puertodestino">
                                            <option className="fw-bold" value="" >Seleccione</option>
                                            <option value="">Barranquilla</option>
                                            <option value="">Cartagena</option>
                                            <option value="">Santa Marta</option>
                                            <option value="">Dibulla</option>
                                            <option value="">Rioacha</option>
                                            <option value="">Barrancabermeja</option>
                                            <option value="">La Dorada</option>
                                        </select>
                                    </div>

                                    <div className="col">
                                        <label htmlFor="documento" className="form-label">Fecha envío</label>
                                        <input type="date" className="form-control" name="date" id="date" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="contenedores" className="form-label">No. contenedores</label>
                                        <input type="number" className="form-control" name="contenedores" id="contenedores" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="peso" className="form-label">Peso total carga </label>
                                        <input type="number" className="form-control" name="peso" id="peso" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="declarado" className="form-label">Valor declarado</label>
                                        <input type="number" className="form-control" name="declarado" id="declarado" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col gap-2 flex-column d-flex ">
                                        <div className="mb-1 text-white">x</div>
                                        <button type="" class="btn color5 fw-bold text-white">
                                            Liquidar importe
                                        </button>
                                    </div>

                                    <div className="col">
                                        <label htmlFor="importe" className="form-label">Valor a pagar</label>
                                        <input type="text" className="form-control" name="importe" id="importe" disabled />
                                    </div>
                                    <div className="col">
                                    </div>
                                </div> 
                            </div>
                        </form>
                        <hr />

                        <h5 className="fw-bold text-start pt-2 pb-3">II. Datos del remitente </h5>
                        <form className="ms-5 me-5">
                            <div className="mb-3">

                                <div className="row">
                                    <div className="col">
                                    <label htmlFor="tiporemitente" className="form-label">Tipo documento</label>
                                        <select className="form-select" aria-label="Default select example" name="tiporemitente">
                                            <option className="fw-bold" value="" >Seleccione</option>
                                            <option value="">Cédula de ciudadanía</option>
                                            <option value="">Cédula de extranjería</option>
                                            <option value="">Tarjeta de identidad</option>
                                            <option value="">Pasaporte</option>
                                            <option value="">Otro</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="documentoremitente" className="form-label">No. documento </label>
                                        <input type="text" className="form-control" name="documentoremitente" id="documentoremitente" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="telefonoremitente" className="form-label">Teléfono</label>
                                        <input type="text" className="form-control" name="telefonoremitente" id="telefonoremitente" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                    <label htmlFor="nombreremitente" className="form-label">Nombre </label>
                                        <input type="text" className="form-control" name="nombreremitente" id="nombreremitente" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="apellidosremitente" className="form-label">Apellidos </label>
                                        <input type="text" className="form-control" name="apellidosremitente" id="apellidosremitente" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="emailremitente" className="form-label">Email</label>
                                        <input type="email" className="form-control" name="emailremitente" id="emailremitente" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                    <label htmlFor="direccionremitente" className="form-label">Direccion </label>
                                        <input type="text" className="form-control" name="direccionremitente" id="direccionremitente" />
                                    </div>
                                    <div className="col">
                                        
                                    </div>
                                    <div className="col">
                                        
                                    </div>
                                </div>
                            </div>
                        </form>
                        <hr />

                        <h5 className="fw-bold text-start pt-2 pb-3">III. Datos del destinatario </h5>
                        <form className="ms-5 me-5">
                            <div className="mb-3">

                                <div className="row">
                                    <div className="col">
                                    <label htmlFor="tipodestinatario" className="form-label">Tipo documento</label>
                                        <select className="form-select" aria-label="Default select example" name="tipodestinatario">
                                            <option className="fw-bold" value="" >Seleccione</option>
                                            <option value="">Cédula de ciudadanía</option>
                                            <option value="">Cédula de extranjería</option>
                                            <option value="">Tarjeta de identidad</option>
                                            <option value="">Pasaporte</option>
                                            <option value="">Otro</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="documentodestinatario" className="form-label">No. documento </label>
                                        <input type="text" className="form-control" name="documentodestinatario" id="documentodestinatario" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="telefonodestinatario" className="form-label">Teléfono</label>
                                        <input type="text" className="form-control" name="telefonodestinatario" id="telefonodestinatario" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                    <label htmlFor="nombredestinatario" className="form-label">Nombre </label>
                                        <input type="text" className="form-control" name="nombredestinatario" id="nombredestinatario" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="apellidosdestinatario" className="form-label">Apellidos </label>
                                        <input type="text" className="form-control" name="apellidosdestinatario" id="apellidosdestinatario" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="emaildestinatario" className="form-label">Email</label>
                                        <input type="email" className="form-control" name="emaildestinatario" id="emaildestinatario" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                    <label htmlFor="direcciondestinatario" className="form-label">Direccion </label>
                                        <input type="text" className="form-control" name="direcciondestinatario" id="direcciondestinatario" />
                                    </div>
                                    <div className="col gap-2 flex-column d-flex ">
                                        <div className="mb-1 text-white">x</div>
                                        <button type="" class="btn color5 fw-bold text-white">
                                            Guardar
                                        </button>
                                    </div>
                                    <div className="col gap-2 flex-column d-flex ">
                                        <div className="mb-1 text-white">x</div>
                                        <button type="" class="btn btn-success fw-bold text-white">
                                            Boton de pago
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <hr />

                    </div>
                    <div className="col-1"></div>
                </div>
            </div>

        </>
    );
}

export default UsuarioExterno;