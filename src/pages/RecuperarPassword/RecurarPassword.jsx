import React from 'react';
import Imagen4 from '../../components/Imagen/imagen4';
import Logo from '../../components/Imagen/Logo';
import { Link } from 'react-router-dom';
import {useState} from 'react';
import validator from 'validator';
import swal from "sweetalert";

const RecuperarPassword = () => {
    
    //Creación de estados
    const [email, setEmail] = useState({email: ""});
    const [error, setError] = useState({email: ""})

    const onChngeHandler = (e) => {//Identifica dinamicamente id del campo y actualiza estado
        setEmail({
            ...email,
            email: e.target.value
        });

        //Validaciones
        if(e.target.id === 'email'){
            const isValidEmail = validator.isEmail(e.target.value);//Validación email
            if(!isValidEmail){//Si hay errores
                setError((error)=>{//Actualiza objeto de errores
                    return {...error, email: "Correo no válido"}
                })
            }else{
                setError((error)=>{//Devuelve objeto de errores sin actualizar
                    return {...error, email: ""}
                })
            }
        }
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(email.email === ""){//Evita que se vayan campos vacios
            setError((error)=>{return {...error, email:"Este campo es obligatorio"}});
        }else if(!error.email){//Verifica que no haya errores
            setError({email: ""});//Limpia los valores de los campos
            swal(`Al correo ${email.email} se envio un enlace que le posibilitará recuperar su contrasena`,"","success");
            setTimeout(()=> {
                window.location.href="./login";
            }, 5000);
        }
    }
    return (

        <>
            <div className="container-fluid">
                <div className="row">
                    <Imagen4 />
                    <div className="col-6 border border-0 border-2 mt-2">
                        <Logo />
                        <h4 className="fw-bold text-center pb-5">Recuperar contraseña</h4>

                        <form className="p-4 rounded-2  color5 mb-4" onSubmit={onSubmitHandler}  noValidate>
                            <div className="form-group bg-white p-2 rounded-1">
                                <div className="mb-4">
                                    <label htmlhtmlFor="correo" className="form-label">Ingresa tu correo electrónico </label>
                                    <input 
                                    type="email" 
                                    className={error.email ? "form-control is-invalid" :"form-control"}
                                    id="email"
                                    value={email.email}
                                    onChange={onChngeHandler}
                                    />
                                     <div className="text-danger">{error.email}</div>
                                </div>

                                <div className="row mb-4">
                                    <div className="d-grid gap-2 col-6">
                                        <Link to="/login" className="btn btn-primary fw-bold p-2 color1" > Cancelar</Link>
                                    </div>
                                    <div className="d-grid gap-2 col-6" type="submit">
                                        <button type="submit" className="btn btn-primary fw-bold p-2 color1">
                                        Buscar
                                        </button>                            
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