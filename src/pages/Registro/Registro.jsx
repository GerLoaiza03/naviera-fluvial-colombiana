import React from 'react';
import Imagen4 from '../../components/Imagen/imagen4';
import Logo from '../../components/Imagen/Logo';
import { Link } from 'react-router-dom';
import {useState} from 'react';
import validator from 'validator';
import swal from "sweetalert";


const Registro = () => {
    
    //Creación de estados
    const [values, setValues] = useState({tipo:"", documento:"", nombre:"", apellidos:"",email:"", telefono:"", username:"", password1:"", password2:"" });
    const [error, setError] = useState({tipo:"", documento:"", nombre:"", apellidos:"",email:"", telefono:"", username:"", password1:"", password2:"" })//Objeto para manejo errores

    const onChngeHandler = (e) => {//Identifica dinamicamente id del campo y actualiza estado
        setValues({
            ...values,
            [e.target.id]: e.target.value
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
        if(e.target.id === 'password1' || e.target.id === 'password2'){
            //Verifica tamano de la contraseña
            const isValidPassword = validator.isLength(e.target.value, {min:6, max:20});
            if(!isValidPassword){
                if(e.target.id === 'password1'){                    
                    setError((error)=>{
                        return {...error, password1: "La contraseña debe tener de 6 a 20 caracteres"}
                    });
                }else {
                    if(values.password1 !== values.password2){
                        setError((error)=>{
                            return {...error, password2: "Las contrasenas no coinciden. Revise"}
                        });
                    }             
                    
                }
               
            }else{
                setError((error)=>{
                    return {...error, password1: "", password2:""}
                })
            }
        }

        if(e.target.id === 'documento' || e.target.id === 'telefono'){
            //Verifica valor numerico
            const isValidNumber = validator.isNumeric(e.target.value);
            if(!isValidNumber){
                if(e.target.id === 'documento'){                    
                    setError((error)=>{
                        return {...error, documento: "Solo valores numéricos"}
                    });
                }
                if(e.target.id === 'telefono'){                    
                    setError((error)=>{
                        return {...error, telefono: "Solo números"}
                    });
                }
            }else{
                setError((error)=>{
                    return {...error, documento: "", telefono:""}
                })
            }
        }
        
        if(e.target.id === 'nombre' || e.target.id === 'apellidos'){
            //Verifica valor numerico
            const isValidNombre = validator.isAlpha(e.target.value,"es-ES",{ignore: " -"});
            if(!isValidNombre){
                if(e.target.id === 'nombre'){                    
                    setError((error)=>{
                        return {...error, nombre: "Acepta caracteres latinos y espacios en blanco"}
                    });
                }
                if(e.target.id === 'apellidos'){                    
                    setError((error)=>{
                        return {...error, apellidos: "Acepta caracteres latinos y espacios en blanco"}
                    });
                }
            }else{
                setError((error)=>{
                    return {...error, nombre: "", apellidos:""}
                })
            }
        }
        if(e.target.id === 'username'){
            //Verifica valor alfanumerico
            const isValidUsername = validator.isAlphanumeric(e.target.value);
            if(!isValidUsername){                   
                    setError((error)=>{
                        return {...error, username: "Solo letras y números"}
                    });
               
            }else{
                setError((error)=>{
                    return {...error,  username: ""}
                });
            }
        }
        if(e.target.id === 'tipo'){
            setError((error)=>{
                return {...error,  tipo: ""}
            });        
        }

        
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();        
        if(values.tipo==="" || values.documento==="" || values.nombre==="" || values.apellidos==="" || values.email==="" || values.telefono==="" || values.username==="" || values.password1==="" || values.password2===""){//Evita que se vayan campos vacios
            if (values.tipo===""){
                setError((error)=>{return {...error, tipo:"Este campo es obligatorio"}});
            }
            if (values.documento===""){
                setError((error)=>{return {...error, documento:"Este campo es obligatorio"}});
            }
            if (values.nombre===""){
                setError((error)=>{return {...error, nombre:"Este campo es obligatorio"}});
            }
            if (values.apellidos===""){
                setError((error)=>{return {...error, apellidos:"Este campo es obligatorio"}});
            }
            if (values.email===""){
                setError((error)=>{return {...error, email:"Este campo es obligatorio"}});
            }
            if (values.telefono===""){
                setError((error)=>{return {...error, telefono:"Este campo es obligatorio"}});
            }
            if (values.username===""){
                setError((error)=>{return {...error, username:"Este campo es obligatorio"}});
            }
            if (values.password1===""){
                setError((error)=>{return {...error, password1:"Este campo es obligatorio"}});
            }
            if (values.password2===""){
                setError((error)=>{return {...error, password2:"Este campo es obligatorio"}});
            }
        }else if(!error.tipo && !error.documento && !error.nombre && !error.apellidos && !error.email && !error.telefono && !error.username && !error.password1 && !error.password2){//Verifica que no haya errores
            setValues({tipo: "", documento:"", nombre: "", apellidos:"", email: "", telefono:"", username: "", password1:"", password2: ""});//Limpia los valores de los campos
            swal("Datos almacenados exitosamente","","success");
        }
    }



    return (
        <>
            <div className="container-fluid">
                <div className="row">

                    <Imagen4 />
                    <div className="col-6 border border-0 border-2 mt-2">

                        <Logo />

                        <h5 className="fw-bold text-center pb-3">Regístrate rápido y fácil</h5>
                        <form className="ms-5 me-5" onSubmit={onSubmitHandler}  noValidate>
                            <div className="mb-3">

                                <div className="row">

                                    <div className="col-6 mb-3">
                                        <label htmlFor="tipo" className="form-label">Tipo documento</label>
                                        <select  
                                        className={error.tipo ? "form-select is-invalid" :"form-select"} 
                                        id="tipo"
                                        value={values.tipo}
                                        onChange={onChngeHandler}
                                        >
                                            <option className="fw-bold" value="" >Seleccione</option>
                                            <option value="1">Cédula de ciudadanía</option>
                                            <option value="2">Cédula de extranjería</option>
                                            <option value="3">Tarjeta de identidad</option>
                                            <option value="4">Pasaporte</option>
                                            <option value="5">Otro</option>
                                        </select>
                                        <div className="text-danger">{error.tipo}</div>
                                    </div>


                                    <div className="col-6">
                                        <label htmlFor="documento" className="form-label">No. documento</label>
                                        <input 
                                        type="text" 
                                        className={error.documento ? "form-control is-invalid" :"form-control"} 
                                        id="documento"
                                        value={values.documento}
                                        onChange={onChngeHandler}
                                        />
                                        <div className="text-danger">{error.documento}</div>
                                    </div>

                                </div>

                                <div className="row">

                                    <div className="col-6">
                                        <label htmlFor="nombre" className="form-label">Nombre</label>
                                        <input 
                                        type="text"  
                                        className={error.nombre ? "form-control is-invalid" :"form-control"} 
                                        id="nombre"
                                        value={values.nombre}
                                        onChange={onChngeHandler}
                                        />
                                        <div className="text-danger">{error.nombre}</div>
                                    </div>

                                    <div className="col-6">
                                        <label htmlFor="apellidos" className="form-label">Apellidos</label>
                                        <input 
                                        type="text" 
                                        className={error.apellidos ? "form-control is-invalid" :"form-control"} 
                                        id="apellidos"
                                        value={values.apellidos}
                                        onChange={onChngeHandler}
                                        />
                                        <div className="text-danger">{error.apellidos}</div>
                                    </div>

                                </div>

                                <div className="row">

                                    <div className="col-6">
                                        <label htmlFor="correo" className="form-label"
                                        >Correo electrónico</label>
                                        <input 
                                        type="email" 
                                        className={error.email ? "form-control is-invalid" :"form-control"} 
                                        id="email"
                                        value={values.email}
                                        onChange={onChngeHandler}
                                        />
                                        <div className="text-danger">{error.email}</div>
                                    </div>

                                    <div className="col-6">
                                        <label htmlFor="telefono" className="form-label">Teléfono</label>
                                        <input 
                                        type="text" 
                                        className={error.telefono ? "form-control is-invalid" :"form-control"} 
                                        id="telefono"
                                        value={values.telefono}
                                        onChange={onChngeHandler}
                                        />
                                        <div className="text-danger">{error.telefono}</div>
                                    </div>

                                </div>

                                <div className="row">

                                    <div className="col-6">
                                        <label htmlFor="username" className="form-label">Username</label>
                                        <input 
                                        type="text" 
                                        className={error.username ? "form-control is-invalid" :"form-control"}  
                                        id="username"
                                        value={values.username}
                                        onChange={onChngeHandler}
                                        />
                                        <div className="text-danger">{error.username}</div>
                                    </div>

                                    <div className="col-6">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input 
                                        type="password" 
                                        className={error.password1 ? "form-control is-invalid" :"form-control"}  
                                        id="password1"
                                        value={values.password1}
                                        onChange={onChngeHandler}
                                        />
                                        <div className="text-danger">{error.password1}</div>
                                    </div>

                                </div>

                                <div className="row">
                                    
                                    <div className="col-6">
                                        <label htmlFor="password" className="form-label">Confirma password</label>
                                        <input 
                                        type="password" 
                                        className={error.password2 ? "form-control is-invalid" :"form-control"} 
                                        id="password2"
                                        value={values.password2}
                                        onChange={onChngeHandler}
                                        />
                                        <div className="text-danger">{error.password2}</div>
                                    </div>

                                    <div className="col-6">

                                    </div>

                                </div>

                            </div>

                            <div className="d-grid gap-2 col-7 mx-auto">
                                <button type="submit" className="btn btn-primary fw-bold p-2">
                                Registrarse
                                </button>                            
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </>

    );
}

export default Registro;