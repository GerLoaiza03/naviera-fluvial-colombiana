import React from 'react';
import Imagen4 from '../../components/Imagen/imagen4';
import Logo from '../../components/Imagen/Logo';
import { Link } from 'react-router-dom';


const Registro = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">

                    <Imagen4 />
                    <div className="col-6 border border-0 border-2 mt-2">

                        <Logo />

                        <h4 className="fw-bold text-center pb-5">Regístrate rápido y fácil</h4>
                        <form className="ms-5 me-5">
                            <div className="mb-3">

                                <div className="row">
                                    <div className="col-6 mb-3">
                                        <label htmlFor="tipo" className="form-label">Tipo documento</label>
                                        <select className="form-select" aria-label="Default select example" name="tipo">
                                            <option className="fw-bold" value="" >Seleccione</option>
                                            <option value="">Cédula de ciudadanía</option>
                                            <option value="">Cédula de extranjería</option>
                                            <option value="">Tarjeta de identidad</option>
                                            <option value="">Pasaporte</option>
                                            <option value="">Otro</option>
                                        </select>
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="documento" className="form-label">No. documento</label>
                                        <input type="text" className="form-control" name="documento" id="documento" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-6">
                                        <label htmlFor="nombre" className="form-label">Nombre</label>
                                        <input type="text" className="form-control" name="nombre" id="nombre" />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="apellidos" className="form-label">Apellidos</label>
                                        <input type="text" className="form-control" name="apellidos" id="apellidos" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <label htmlFor="correo" className="form-label"
                                        >Correo electrónico</label
                                        >
                                        <input type="email" className="form-control" name="correo" id="correo" />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="telefono" className="form-label">Teléfono</label>
                                        <input type="number" className="form-control" name="telefono" id="telefono" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <label htmlFor="username" className="form-label">Username</label>
                                        <input type="text" className="form-control" name="username" id="username" />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" name="password" id="password" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <label htmlFor="password" className="form-label">Confirma password</label>
                                        <input type="password" className="form-control" name="password" id="password" />
                                    </div>
                                    <div className="col-6">

                                    </div>
                                </div>
                            </div>
                            <div className="d-grid gap-2 col-7 mx-auto">
                                <Link to="/login" className="btn btn-primary fw-bold p-2 " > Registrarse</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>

    );
}

export default Registro;