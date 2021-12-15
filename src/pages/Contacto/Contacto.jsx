import Imagen2 from '../../components/Imagen/image2';
import {useState} from 'react';
import validator from 'validator';
import swal from "sweetalert";


const Contacto = () => {

    //Creación de estados
    const [values, setValues] = useState({tipo:"", documento:"", nombre:"", apellidos:"",email:"", telefono:"", asunto:"" });
    const [error, setError] = useState({tipo:"", documento:"", nombre:"", apellidos:"",email:"", telefono:"", asunto:"" })//Objeto para manejo errores

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
        if(e.target.id === 'asunto'){
            //Verifica valor alfanumerico
            const isValidAsunto = validator.isAlphanumeric(e.target.value,"es-ES",{ignore: " -@#$%&+=/*"});
            if(!isValidAsunto){                   
                    setError((error)=>{
                        return {...error, asunto: "Acepta caracteres latinos,espacios en blanco y signos como: -@#$%&+=/*"}
                    });
               
            }else{
                setError((error)=>{
                    return {...error,  asunto: ""}
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
        if(values.tipo==="" || values.documento==="" || values.nombre==="" || values.apellidos==="" || values.email==="" || values.telefono==="" || values.asunto===""){//Evita que se vayan campos vacios
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
            if (values.asunto===""){
                setError((error)=>{return {...error, asunto:"Este campo es obligatorio"}});
            }
        }else if(!error.tipo && !error.documento && !error.nombre && !error.apellidos && !error.email && !error.telefono && !error.asunto ){//Verifica que no haya errores
            setValues({tipo: "", documento:"", nombre: "", apellidos:"", email: "", telefono:"", asunto: ""});//Limpia los valores de los campos
            swal("Datos almacenados exitosamente. Pronto lo contactaremos","","success");
        }
    }


    return (
        <>
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col-md-6 col-sm-12 border border-0 border-end border-bottom border-4 ">

                        <h5 className="fw-bold text-center pb-1">Ingresa tus datos</h5>
                        <h6 className="fw-bold text-center pb-5">...Nosotros te contactamos</h6>
                        <form className="ms-5 me-5 " onSubmit={onSubmitHandler}  noValidate>
                            <div className="mb-3">
                                <div className="row mb-4">

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
                                        <label htmlFor="documento" className="form-label">Número de documento</label>
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
                                <div className="row mb-4">
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
                                <div className="row mb-4">
                                    <div className="col-6">
                                        <label htmlFor="correo" className="form-label">Correo electrónico</label>
                                        <input type="email" 
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


                                <div className="row mb-4">
                                <div className="col">
                                        <label htmlFor="correo" className="form-label">Asunto</label>
                                        <textarea 
                                         className={error.asunto ? "form-control is-invalid" :"form-control"}  
                                        id="asunto"
                                        value={values.asunto}
                                        onChange= {onChngeHandler}  
                                        >
                                        </textarea>
                                        <div className="text-danger">{error.asunto}</div>
                                    </div>
                                </div>

                            </div>

                            <div className="d-grid gap-2 col-8 mx-auto mb-5 ">
                                <button type="submit" className="btn btn-primary fw-bold p-2 text-white fw-bold fs-6">
                                    Enviar
                                </button>
                            </div>
                        </form>

                    </div>
                    <div className="col-6 border border-0  border-bottom border-2">
                        <h5 className="fw-bold text-center mb-2 pb-1">Para tener el gusto de atenderte ...</h5>
                        <h6 className="fw-bold text-center pb-5">...Contactanos en</h6>

                        <table className="table ms-5">

                            <tbody>
                                <tr>
                                    <th scope="row">Linea nacional: </th>
                                    <td>0800 754246421 </td>
                                    <td> </td>
                                    <td> </td>

                                </tr>
                                <tr>
                                    <th scope="row">Movil: </th>
                                    <td>311 754246421 - 32145754612</td>
                                </tr>
                                <tr>
                                    <th scope="row">Email: </th>
                                    <td>navierafluvialcolombiana@gmail.com  </td>
                                </tr>
                                <tr>
                                    <th scope="row">Whatsapp: </th>
                                    <td>300 712456455</td>
                                </tr>
                                <tr>
                                    <th scope="row"> Redes sociales: </th>
                                    <td>
                                        <button className="btn btn-primary mb-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                        </svg>
                                        </button>
                                        <br/>
                                        <button className="btn btn-primary mb-1">
                                        <svg style={{}}xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                        </svg>
                                        </button>
                                        <br/>
                                        <button className="btn btn-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                        </svg>

                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>


                    </div>
                </div>

                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4"><Imagen2 /></div>
                    <div className="col-4"></div>

                </div>
            </div>



        </>

    );
}

export default Contacto;