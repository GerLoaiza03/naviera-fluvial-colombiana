import React from 'react';
import Imagen4 from '../../components/Imagen/imagen4';
import Logo from '../../components/Imagen/Logo';
import { Link } from 'react-router-dom';

const RecuperarPassword = () => {
    return (

        <>
            <div className="container-fluid">
                <div className="row">
                    <Imagen4 />
                    <div className="col-6 border border-0 border-2 mt-2">
                        <Logo />
                        <h4 className="fw-bold text-center pb-5">Recuperar contraseña</h4>

                        <form className="p-4 rounded-2  color5 mb-4">
                            <div className="form-group bg-white p-2 rounded-1">
                                <div className="mb-4">
                                    <label htmlhtmlFor="correo" className="form-label">Ingresa tu correo electrónico </label>
                                    <input type="email" className="form-control" id="correo" />
                                </div>

                                <div className="row mb-4">
                                    <div className="d-grid gap-2 col-6">
                                        <Link to="/login" className="btn btn-primary fw-bold p-2 color1" > Cancelar</Link>
                                    </div>
                                    <div className="d-grid gap-2 col-6">
                                        <Link to="/recuperarpassword" className="btn btn-primary fw-bold p-2 color1" > Buscar</Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div>
                            Aún no tienes cuenta? <Link to="/registro" > <a href="#/" className="fw-bold">Creáte una</a></Link>
                        </div>
                    </div>
                </div>
            </div>











        </>
    );
}

export default RecuperarPassword;