import Imagen4 from '../../components/Imagen/imagen4';
import Logo from '../../components/Imagen/Logo';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>

            <div className="container-fluid">
                <div className="row">

                    <Imagen4 />
                    <div className="col-6 border border-0 border-2 mt-2">

                        <Logo />

                        <h2 className="fw-bold text-center pb-5">Bienvenido</h2>

                        <form className="ms-5 me-5">
                            <div className="mb-3">
                                <label htmlFor="correo" className="form-label">Correo electrónico o número de telefono</label>
                                <input type="email" className="form-control" name="correo" id="correo" />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="password" className="form-label">Contraseña</label>
                                <input type="password" className="form-control" name="password" id="password" />
                            </div>
                            <div className="d-grid gap-2 col-10 mx-auto">
                                <button type="submit" className="btn btn-danger fw-bold p-2">Iniciar sesión</button>
                            </div>
                        </form>

                        <div className="my-3 ms-5 fw-bold">
                        <Link to="/recuperarpassword"> <a href="#/">¿Olvidaste tu contraseña?</a></Link>                       
                            
                        </div>

                        <div className="d-grid gap-2 col-7 mx-auto mt-4">
                            <Link to="/registro" className="btn btn-primary fw-bold p-2" > Crea tu cuenta</Link>
                        </div>


                    </div>
                </div>


            </div>

        </>
    );
}

export default Login;