import React from 'react';
import NavbarVertical from '../../components/Navbar/NavbarVertical';
import {useState} from 'react';
import validator from 'validator';
import swal from "sweetalert";



const UsuarioExterno = () => {

    //Creación de estados
    const [values, setValues] = useState({puertoorigen:"", puertodestino:"", date:"", contenedores:"",peso:"", declarado:"", tiporemitente:"", documentoremitente:"", telefonoremitente:"", nombreremitente:"", apellidosremitente:"", emailremitente:"", direccionremitente:"", tipodestinatario:"", documentodestinatario:"", telefonodestinatario:"", nombredestinatario:"", apellidosdestinatario:"", emaildestinatario:"", direcciondestinatario:""});
    const [error, setError] = useState({puertoorigen:"", puertodestino:"", date:"", contenedores:"",peso:"", declarado:"", tiporemitente:"", documentoremitente:"", telefonoremitente:"", nombreremitente:"", apellidosremitente:"", emailremitente:"", direccionremitente:"", tipodestinatario:"", documentodestinatario:"", telefonodestinatario:"", nombredestinatario:"", apellidosdestinatario:"", emaildestinatario:"", direcciondestinatario:""})//Objeto para manejo errores

    const onChngeHandler = (e) => {//Identifica dinamicamente id del campo y actualiza estado
        setValues({
            ...values,
            [e.target.id]: e.target.value
        });
        //Validaciones
        if(e.target.id === 'emailremitente' || e.target.id === 'emaildestinatario'){
            const isValidEmail = validator.isEmail(e.target.value);//Validación email
            if(!isValidEmail){//Si hay errores
                if(e.target.id === 'emailremitente'){                    
                    setError((error)=>{
                        return {...error, emailremitente: "Formato de correo no válido"}
                    });
                }
                if(e.target.id === 'emaildestinatario'){                    
                    setError((error)=>{
                        return {...error, emaildestinatario: "Formato de correo no válido"}
                    });
                }                
            }else{
                setError((error)=>{//Devuelve objeto de errores sin actualizar
                    return {...error, emailremitente: "", emaildestinatario: ""}
                })
            }
        }
       
        if(e.target.id === 'contenedores' || e.target.id === 'peso' || e.target.id === 'declarado' || e.target.id === 'documentoremitente' || e.target.id === 'telefonoremitente' || e.target.id === 'documentodestinatario' || e.target.id === 'telefonodestinatario'){
            //Verifica valor numerico
            const isValidNumber = validator.isNumeric(e.target.value);
            if(!isValidNumber){
                if(e.target.id === 'contenedores'){                    
                    setError((error)=>{
                        return {...error, contenedores: "Solo valores numéricos"}
                    });
                }
                if(e.target.id === 'peso'){                    
                    setError((error)=>{
                        return {...error, peso: "Solo números"}
                    });
                }
                if(e.target.id === 'declarado'){                    
                    setError((error)=>{
                        return {...error, declarado: "Solo números"}
                    });
                }
                if(e.target.id === 'documentoremitente'){                    
                    setError((error)=>{
                        return {...error, documentoremitente: "Solo números"}
                    });
                }
                if(e.target.id === 'telefonoremitente'){                    
                    setError((error)=>{
                        return {...error, telefonoremitente: "Solo números"}
                    });
                }
                if(e.target.id === 'documentodestinatario'){                    
                    setError((error)=>{
                        return {...error, documentodestinatario: "Solo números"}
                    });
                }
                if(e.target.id === 'telefonodestinatario'){                    
                    setError((error)=>{
                        return {...error, telefonodestinatario: "Solo números"}
                    });
                }
                
            }else{
                setError((error)=>{
                    return {...error, contenedores: "", peso:"", declarado: "", documentoremitente: "", telefonoremitente:"", documentodestinatario: "", telefonodestinatario:""}
                })
            }
        }
        
        if(e.target.id === 'nombreremitente' || e.target.id === 'apellidosremitente' || e.target.id === 'nombredestinatario' || e.target.id === 'apellidosdestinatario'){
            //Verifica valor numerico
            const isValidNombre = validator.isAlpha(e.target.value,"es-ES",{ignore: " -"});
            if(!isValidNombre){
                if(e.target.id === 'nombreremitente'){                    
                    setError((error)=>{
                        return {...error, nombreremitente: "Acepta caracteres latinos y espacios en blanco"}
                    });
                }
                if(e.target.id === 'apellidos'){                    
                    setError((error)=>{
                        return {...error, apellidos: "Acepta caracteres latinos y espacios en blanco"}
                    });
                }
                if(e.target.id === 'nombredestinatario'){                    
                    setError((error)=>{
                        return {...error, nombredestinatario: "Acepta caracteres latinos y espacios en blanco"}
                    });
                }
                if(e.target.id === 'apellidosdestinatario'){                    
                    setError((error)=>{
                        return {...error, apellidosdestinatario: "Acepta caracteres latinos y espacios en blanco"}
                    });
                }
            }else{
                setError((error)=>{
                    return {...error, nombreremitente: "", apellidosremitente:"", nombredestinatario: "", apellidosdestinatario:""}
                })
            }
        }

        if(e.target.id === 'direccionremitente' || e.target.id === 'direcciondestinatario'){
            //Verifica valor alfanumerico
            const isValidAsunto = validator.isAlphanumeric(e.target.value,"es-ES",{ignore: " -#."});
            if(!isValidAsunto){ 
                if(e.target.id === 'direccionremitente'){
                    setError((error)=>{
                        return {...error, direccionremitente: "Acepta caracteres latinos,espacios en blanco y signos como: -#"}
                    });
                } 
                if(e.target.id === 'direcciondestinatario'){
                    setError((error)=>{
                        return {...error, direcciondestinatario: "Acepta caracteres latinos,espacios en blanco y signos como: -#."}
                    });
                } 
               
            }else{
                setError((error)=>{
                    return {...error,  direccionremitente: "",  direcciondestinatario: ""}
                });
            }
        }


        if(e.target.id === 'puertoorigen'){
            setError((error)=>{
                return {...error,  puertoorigen: ""}
            });        
        }
        if(e.target.id === 'puertodestino'){
            setError((error)=>{
                return {...error,  puertodestino: ""}
            });        
        }
        if(e.target.id === 'date'){
            setError((error)=>{
                return {...error,  date: ""}
            });        
        }
        if(e.target.id === 'tiporemitente'){
            setError((error)=>{
                return {...error,  tiporemitente: ""}
            });        
        }
        if(e.target.id === 'tipodestinatario'){
            setError((error)=>{
                return {...error,  tipodestinatario: ""}
            });        
        }

        
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();        
        if(values.puertoorigen==="" || values.puertodestino==="" || values.date==="" || values.contenedores==="" || values.peso==="" || values.declarado==="" || values.tiporemitente==="" || values.documentoremitente==="" || values.telefonoremitente==="" || values.nombreremitente==="" || values.apellidosremitente==="" || values.emailremitente==="" || values.direccionremitente==="" || values.tipodestinatario==="" || values.documentodestinatario==="" || values.telefonodestinatario==="" || values.nombredestinatario==="" || values.apellidosdestinatario==="" || values.emaildestinatario==="" || values.direcciondestinatario===""){//Evita que se vayan campos vacios
            if (values.puertoorigen===""){
                setError((error)=>{return {...error, puertoorigen:"Este campo es obligatorio"}});
            }
            if (values.puertodestino===""){
                setError((error)=>{return {...error, puertodestino:"Este campo es obligatorio"}});
            }
            if (values.date===""){
                setError((error)=>{return {...error, date:"Este campo es obligatorio"}});
            }
            if (values.contenedores===""){
                setError((error)=>{return {...error, contenedores:"Este campo es obligatorio"}});
            }
            if (values.peso===""){
                setError((error)=>{return {...error, peso:"Este campo es obligatorio"}});
            }
            if (values.declarado===""){
                setError((error)=>{return {...error, declarado:"Este campo es obligatorio"}});
            }
            if (values.tiporemitente===""){
                setError((error)=>{return {...error, tiporemitente:"Este campo es obligatorio"}});
            }
            if (values.documentoremitente===""){
                setError((error)=>{return {...error, documentoremitente:"Este campo es obligatorio"}});
            }
            if (values.telefonoremitente===""){
                setError((error)=>{return {...error, telefonoremitente:"Este campo es obligatorio"}});
            }
            if (values.nombreremitente===""){
                setError((error)=>{return {...error, nombreremitente:"Este campo es obligatorio"}});
            }
            if (values.apellidosremitente===""){
                setError((error)=>{return {...error, apellidosremitente:"Este campo es obligatorio"}});
            }
            if (values.emailremitente===""){
                setError((error)=>{return {...error, emailremitente:"Este campo es obligatorio"}});
            }
            if (values.direccionremitente===""){
                setError((error)=>{return {...error, direccionremitente:"Este campo es obligatorio"}});
            }
            if (values.tipodestinatario===""){
                setError((error)=>{return {...error, tipodestinatario:"Este campo es obligatorio"}});
            }
            if (values.documentodestinatario===""){
                setError((error)=>{return {...error, documentodestinatario:"Este campo es obligatorio"}});
            }
            if (values.telefonodestinatario===""){
                setError((error)=>{return {...error, telefonodestinatario:"Este campo es obligatorio"}});
            }
            if (values.nombredestinatario===""){
                setError((error)=>{return {...error, nombredestinatario:"Este campo es obligatorio"}});
            }
            if (values.apellidosdestinatario===""){
                setError((error)=>{return {...error, apellidosdestinatario:"Este campo es obligatorio"}});
            }
            if (values.emaildestinatario===""){
                setError((error)=>{return {...error, emaildestinatario:"Este campo es obligatorio"}});
            }
            if (values.direcciondestinatario===""){
                setError((error)=>{return {...error, direcciondestinatario:"Este campo es obligatorio"}});
            }
        }else if(!error.puertoorigen && !error.puertodestino && !error.date && !error.contenedores && !error.peso && !error.declarado && !error.tiporemitente && !error.documentoremitente && !error.telefonoremitente && !error.nombreremitente && !error.apellidosremitente && !error.emailremitente && !error.direccionremitente && !error.tipodestinatario && !error.documentodestinatario && !error.telefonodestinatario && !error.nombredestinatario && !error.apellidosdestinatario && !error.emaildestinatario && !error.direcciondestinatario){//Verifica que no haya errores
            setValues({puertoorigen: "", puertodestino:"", date: "", contenedores:"", peso: "", declarado:"", tiporemitente: "", documentoremitente:"", telefonoremitente: "", nombreremitente: "", apellidosremitente:"", emailremitente: "", direccionremitente:"", tipodestinatario: "", documentodestinatario:"", telefonodestinatario: "", nombredestinatario:"", apellidosdestinatario: "", emaildestinatario:"", direcciondestinatario: ""});//Limpia los valores de los campos
            swal("Datos almacenados exitosamente","","success");
        }
    }

    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <NavbarVertical/>

                    <div className="col-1"></div>
                    <div className="col-8">
                    <h5 className="fw-bold text-center pt-2 pb-3">Crea tu orden de envío </h5>
                        <h6 className="fw-bold text-start pt-2 pb-3">I. Datos de la carga </h6>
                        <form className="ms-5 me-5" onSubmit={onSubmitHandler}  noValidate>
                            <div className="mb-3">

                                <div className="row">

                                    <div className="col mb-2">
                                        <label htmlFor="puertoorigen" className="form-label">Puerto de origen</label>
                                        <select 
                                        className={error.puertoorigen ? "form-select is-invalid" :"form-select"} 
                                        id="puertoorigen"
                                        value={values.puertoorigen}
                                        onChange={onChngeHandler}
                                        >
                                            <option className="fw-bold" value="" >Seleccione</option>
                                            <option value="1">Barranquilla</option>
                                            <option value="2">Cartagena</option>
                                            <option value="3">Santa Marta</option>
                                            <option value="4">Dibulla</option>
                                            <option value="5">Rioacha</option>
                                            <option value="6">Barrancabermeja</option>
                                            <option value="7">La Dorada</option>
                                        </select>
                                        <div className="text-danger">{error.puertoorigen}</div>
                                    </div>

                                    <div className="col mb-3">
                                        <label htmlFor="puertodestino" className="form-label">Puerto destino </label>
                                        <select 
                                        className={error.puertodestino ? "form-control is-invalid" :"form-control"}
                                        id="puertodestino"
                                        value={values.puertodestino}
                                        onChange={onChngeHandler}
                                        >
                                            <option className="fw-bold" value="" >Seleccione</option>
                                            <option value="1">Barranquilla</option>
                                            <option value="2">Cartagena</option>
                                            <option value="3">Santa Marta</option>
                                            <option value="4">Dibulla</option>
                                            <option value="5">Rioacha</option>
                                            <option value="6">Barrancabermeja</option>
                                            <option value="7">La Dorada</option>
                                        </select>
                                        <div className="text-danger">{error.puertodestino}</div>
                                    </div>

                                    <div className="col">
                                        <label htmlFor="date" className="form-label">Fecha envío</label>
                                        <input 
                                        type="date" 
                                        className={error.date ? "form-control is-invalid" :"form-control"} 
                                        id="date" 
                                        value={values.date}
                                        onChange={onChngeHandler}
                                        />
                                        <div className="text-danger">{error.date}</div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="contenedores" className="form-label">No. contenedores</label>
                                        <input 
                                        type="text" 
                                        className={error.contenedores ? "form-control is-invalid" :"form-control"}
                                        id="contenedores" 
                                        value={values.contenedores}
                                        onChange={onChngeHandler}
                                        />
                                        <div className="text-danger">{error.contenedores}</div>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="peso" className="form-label">Peso total carga </label>
                                        <input 
                                        type="text" 
                                        className={error.peso ? "form-control is-invalid" :"form-control"}
                                        id="peso" 
                                        value={values.peso}
                                        onChange={onChngeHandler}
                                        />
                                        <div className="text-danger">{error.peso}</div>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="declarado" className="form-label">Valor declarado</label>
                                        <input 
                                        type="text" 
                                        className={error.declarado ? "form-control is-invalid" :"form-control"}
                                        id="declarado" 
                                        value={values.declarado}
                                        onChange={onChngeHandler}
                                        />
                                        <div className="text-danger">{error.declarado}</div>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col gap-2 flex-column d-flex ">
                                        <div className="mb-1 text-white">x</div>
                                        <button type="" className="btn color5 fw-bold text-white">
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
                        
                        <hr />

                        <h6 className="fw-bold text-start pt-2 pb-3">II. Datos del remitente </h6>
                        
                            <div className="mb-3">

                                <div className="row">
                                    <div className="col">
                                    <label htmlFor="tiporemitente" className="form-label">Tipo documento</label>
                                        <select 
                                        className={error.tiporemitente ? "form-control is-invalid" :"form-control"}
                                        id="tiporemitente"
                                        value={values.tiporemitente}
                                        onChange={onChngeHandler}
                                        >
                                            <option className="fw-bold" value="" >Seleccione</option>
                                            <option value="1">Cédula de ciudadanía</option>
                                            <option value="2">Cédula de extranjería</option>
                                            <option value="3">Tarjeta de identidad</option>
                                            <option value="4">Pasaporte</option>
                                            <option value="5">Otro</option>
                                        </select>
                                        <div className="text-danger">{error.tiporemitente}</div>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="documentoremitente" className="form-label">No. documento </label>
                                        <input 
                                        type="text" 
                                        className={error.documentoremitente ? "form-control is-invalid" :"form-control"}  
                                        id="documentoremitente" 
                                        value={values.documentoremitente}
                                        onChange={onChngeHandler}
                                        />
                                        <div className="text-danger">{error.documentoremitente}</div>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="telefonoremitente" className="form-label">Teléfono</label>
                                        <input 
                                        type="text" 
                                        className={error.telefonoremitente ? "form-control is-invalid" :"form-control"}
                                        id="telefonoremitente" 
                                        value={values.telefonoremitente}
                                        onChange={onChngeHandler}
                                        />
                                        <div className="text-danger">{error.telefonoremitente}</div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                    <label htmlFor="nombreremitente" className="form-label">Nombre </label>
                                    <input 
                                    type="text" 
                                    className={error.nombreremitente ? "form-control is-invalid" :"form-control"}
                                    id="nombreremitente" 
                                    value={values.nombreremitente}
                                    onChange={onChngeHandler}
                                    />
                                    <div className="text-danger">{error.nombreremitente}</div>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="apellidosremitente" className="form-label">Apellidos </label>
                                        <input 
                                        type="text" 
                                        className={error.apellidosremitente ? "form-control is-invalid" :"form-control"}
                                        id="apellidosremitente" 
                                        value={values.apellidosremitente}
                                        onChange={onChngeHandler}
                                        />
                                        <div className="text-danger">{error.apellidosremitente}</div>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="emailremitente" className="form-label">Email</label>
                                        <input 
                                        type="email" 
                                        className={error.emailremitente ? "form-control is-invalid" :"form-control"} 
                                        id="emailremitente" 
                                        value={values.emailremitente}
                                        onChange={onChngeHandler}
                                        />
                                        <div className="text-danger">{error.emailremitente}</div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                    <label htmlFor="direccionremitente" className="form-label">Direccion </label>
                                    <input 
                                    type="text" 
                                    className={error.direccionremitente ? "form-control is-invalid" :"form-control"} 
                                    id="direccionremitente" 
                                    value={values.direccionremitente}
                                    onChange={onChngeHandler}
                                    />
                                    <div className="text-danger">{error.direccionremitente}</div>
                                    </div>
                                    <div className="col">
                                        
                                    </div>
                                    <div className="col">
                                        
                                    </div>
                                </div>
                            </div>
                       
                        <hr />

                        <h6 className="fw-bold text-start pt-2 pb-3">III. Datos del destinatario </h6>
                        
                            <div className="mb-3">

                                <div className="row">
                                    <div className="col">
                                    <label htmlFor="tipodestinatario" className="form-label">Tipo documento</label>
                                        <select 
                                        className={error.tipodestinatario ? "form-control is-invalid" :"form-control"}
                                        id="tipodestinatario"
                                        value={values.tipodestinatario}
                                        onChange={onChngeHandler}
                                        >
                                            <option className="fw-bold" value="" >Seleccione</option>
                                            <option value="1">Cédula de ciudadanía</option>
                                            <option value="2">Cédula de extranjería</option>
                                            <option value="3">Tarjeta de identidad</option>
                                            <option value="4">Pasaporte</option>
                                            <option value="5">Otro</option>
                                        </select>
                                        <div className="text-danger">{error.tipodestinatario}</div>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="documentodestinatario" className="form-label">No. documento </label>
                                        <input 
                                        type="text" 
                                        className={error.documentodestinatario ? "form-control is-invalid" :"form-control"}
                                        id="documentodestinatario"
                                        value={values.documentodestinatario}
                                        onChange={onChngeHandler}
                                        />
                                        <div className="text-danger">{error.documentodestinatario}</div>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="telefonodestinatario" className="form-label">Teléfono</label>
                                        <input 
                                        type="text" 
                                        className={error.telefonodestinatario ? "form-control is-invalid" :"form-control"}
                                        id="telefonodestinatario" 
                                        value={values.telefonodestinatario}
                                        onChange={onChngeHandler}
                                        />
                                        <div className="text-danger">{error.telefonodestinatario}</div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                    <label htmlFor="nombredestinatario" className="form-label">Nombre </label>
                                    <input 
                                    type="text" 
                                    className={error.nombredestinatario ? "form-control is-invalid" :"form-control"}
                                    id="nombredestinatario" 
                                    value={values.nombredestinatario}
                                    onChange={onChngeHandler}
                                    />
                                    <div className="text-danger">{error.nombredestinatario}</div>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="apellidosdestinatario" className="form-label">Apellidos </label>
                                        <input 
                                        type="text" 
                                        className={error.apellidosdestinatario ? "form-control is-invalid" :"form-control"}
                                        id="apellidosdestinatario" 
                                        value={values.apellidosdestinatario}
                                        onChange={onChngeHandler}
                                        />
                                        <div className="text-danger">{error.apellidosdestinatario}</div>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="emaildestinatario" className="form-label">Email</label>
                                        <input 
                                        type="email" 
                                        className={error.emaildestinatario ? "form-control is-invalid" :"form-control"} 
                                        id="emaildestinatario" 
                                        value={values.emaildestinatario}
                                        onChange={onChngeHandler}
                                        />
                                        <div className="text-danger">{error.emaildestinatario}</div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                    <label htmlFor="direcciondestinatario" className="form-label">Direccion </label>
                                    <input 
                                    type="text" 
                                    className={error.direcciondestinatario ? "form-control is-invalid" :"form-control"}
                                    id="direcciondestinatario" 
                                    value={values.direcciondestinatario}
                                    onChange={onChngeHandler}
                                    />
                                    <div className="text-danger">{error.direcciondestinatario}</div>
                                    </div>
                                    <div className="col gap-2 flex-column d-flex ">
                                        <div className="mb-1 text-white">x</div>
                                        <button type="submit" className="btn color5 fw-bold text-white">
                                            Guardar
                                        </button>
                                    </div>
                                    <div className="col gap-2 flex-column d-flex ">
                                        <div className="mb-1 text-white">x</div>
                                        <button type="" className="btn btn-success fw-bold text-white">
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