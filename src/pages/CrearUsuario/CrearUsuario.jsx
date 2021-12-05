import React from 'react';
import NavbarVerticalUI from '../../components/Navbar/NavbarVerticalUI';
import UserIcon from '../../components/Imagen/usericon.jsx'


const CrearUsuario = () => {
    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <NavbarVerticalUI/>

                    <div className="col-1"></div>
                    <div className="col-8">
                    <h3 className="fw-bold text-center pt-2 pb-3">Crear Usuario/ Modificar Usuarios</h3>

                        <h5 className="fw-bold text-start pt-2 pb-3">I. Ingrese Datos del Usuario </h5>
                        <form className="ms-5 me-5">
                            <div className="mb-3">

                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="idusuario" className="form-label">ID Usuario</label>
                                        <input type="number" className="form-control" name="idusuario" id="idusuario" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="numerodocumento" className="form-label">No. Documento Usuario</label>
                                        <input type="number" className="form-control" name="numerodocumento" id="numerodocumento" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="nombreusuario" className="form-label">Nombre Usuario</label>
                                        <input type="text" className="form-control" name="nombreusuario" id="nombreusuario" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="apellidousuario" className="form-label">Apellido Usuario</label>
                                        <input type="text" className="form-control" name="apellidousuario" id="apellidousuario" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="correoelectronico" className="form-label">Correo electrónico Usuario</label>
                                        <input type="text" className="form-control" name="correoelectronico" id="correoelectronico" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="telefonousuario" className="form-label">Telefono Usuario</label>
                                        <input type="number" className="form-control" name="telefonousuario" id="telefonousuario" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="direccionpuerto" className="form-label">Direccion Puerto</label>
                                        <input type="text" className="form-control" name="direccionpuerto" id="direccionpuerto" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="rolusuario" className="form-label">Rol Usuario</label>
                                        <select className="form-select" aria-label="Default select example" name="rolusuario">
                                            <option value="1">Administrador</option>
                                            <option value="2">Usuario Interno</option>
                                            <option value="3">Usuario Externo</option>
                                        </select>
                                    </div>    
                                    <div className="col">
                                            <label htmlFor="usernameusuario" className="form-label">Username Usuario</label>
                                            <input type="text" className="form-control" name="usernameusuario" id="usernameusuario" />
                                    </div> 
                                </div>
                                <div className="row">
                                    <div className="col">
                                            <label htmlFor="passwordusuario" className="form-label">Password Usuario</label>
                                            <input type="password" className="form-control" name="passwordusuario" id="passwordusuario" required/>
                                    </div>
                                    <div className="col">
                                            <label htmlFor="passwordusuario1" className="form-label">Confirmar Password</label>
                                            <input type="password" className="form-control" name="passwordusuario1" id="passwordusuario1" required/>
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

export default CrearUsuario;