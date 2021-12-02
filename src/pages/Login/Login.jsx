import Imagen2 from '../../components/Imagen/image2'
import Logo from '../../img/logo1.png'

const Login = () => {
    return (
        <>

            <div className="container-fluid">
                <div className="row">

                    <div className="col-md-6 col-sm-12 border border-0 border-end  border-2 bg-primary">
                        <div class="col d-none d-md-block ">
                            <br /><br />
                            <div class="text-start nombre ">Naviera Fluvial..<br />
                                <div class="text-center bg-white row">
                                    <div class="col"></div>
                                    <div class="col-9"><Imagen2 /> </div>
                                    <div class="col"></div>
                                </div>

                                <span id="span text-end">..Colombiana S.A.</span></div>
                        </div>
                    </div>
                    <div className="col-6 border border-0 border-2 mt-2">
                        <div class="text-center">
                            <img src={Logo} width="150" height="150" alt="Logotipo"
                                class="img-fluid" />
                        </div>


                        <h2 class="fw-bold text-center pb-5">Bienvenido</h2>

                        <form class="ms-5 me-5">
                            <div class="mb-3">
                                <label for="correo" class="form-label">Correo electrónico o número de telefono</label>
                                <input type="email" class="form-control" name="correo" id="correo" />
                            </div>
                            <div class="mb-5">
                                <label for="password" class="form-label">Contraseña</label>
                                <input type="password" class="form-control" name="password" id="password" />
                            </div>
                            <div class="d-grid gap-2 col-10 mx-auto">
                                <button type="submit" class="btn btn-danger fw-bold p-2">Iniciar sesión</button>
                            </div>
                        </form>

                        <div class="my-3 ms-5 fw-bold"><a href="#/">¿Olvidaste tu contraseña?</a></div>
                        <a href="#/" class="ir-registro" style={{ textDecoration: 'none' }}>
                            <div class="d-grid gap-2 col-7 mx-auto">
                                <button class="btn btn-primary fw-bold p-2 color1" >Crea tu cuenta</button>
                            </div>
                        </a>

                    </div>
                </div>


            </div>

        </>
    );
}

export default Login;