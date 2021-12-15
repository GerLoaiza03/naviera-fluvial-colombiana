import React from 'react';
import NavbarVertical from '../../components/Navbar/NavbarVertical';
import Imagen2 from '../../components/Imagen/image2';
import { Link} from 'react-router-dom';

import {useState} from 'react';
import validator from 'validator';
import swal from "sweetalert";

const RastreoEnvio = () => {
    
    //Creación de estados
    const [values, setValues] = useState({opciones:"", numero:""});
    const [error, setError] = useState({opciones:"", numero:""})//Objeto para manejo errores

    const onChngeHandler = (e) => {//Identifica dinamicamente id del campo y actualiza estado
        setValues({
            ...values,
            [e.target.id]: e.target.value
        });
        //Validaciones
        if(e.target.id === 'numero'){
         const isValidConsulta = validator.isAlphanumeric(e.target.value,"es-ES",{ignore: " -#"});
         if(!isValidConsulta){                   
                 setError((error)=>{
                     return {...error, numero: "Acepta caracteres latinos y signos como: -#"}
                 });
            
         }else{
             setError((error)=>{
                 return {...error,  numero: ""}
             });
         }
        }
    }

    const onSubmitHandler = (e) => {
      e.preventDefault();        
      if(values.numero===""){//Evita que se vayan campos vacios
         setError((error)=>{return {...error, numero:"Este campo es obligatorio"}});
      }else if(!error.numero){//Verifica que no haya errores
          setValues({numero:""});//Limpia los valores de los campos
          swal("Consultando datos","","success");
      }
  }

   return (
      <>
         <div className="container-fluid">
            <div className="row">
               <NavbarVertical />

               <div className="col-1"></div>
               <div className="col-8">
                  <h5 className="fw-bold text-center pt-5 pb-5">Rastrea la ubicación de tu envío </h5>

                  <form className="ms-5 me-5" onSubmit={onSubmitHandler}  noValidate>

                  <div className="row">
                     <div className="col"></div>
                     <div className="col-8 text-center">

                        <div className="form-check form-check-inline">
                           <input 
                           className="form-check-input" 
                           type="radio" 
                           name="gruporadio"
                           id="inlineRadio1" 
                           value= {values.opciones = "1"}
                           checked={values.opciones=== "1"? true : false}
                           onChange={onChngeHandler}
                            />
                           <label className="form-check-label" for="inlineRadio1">Número de guía</label>
                        </div>
                        <div className="form-check form-check-inline">
                           <input 
                           className="form-check-input" 
                           type="radio"
                           name="gruporadio"
                           id="inlineRadio2" 
                           value= {values.opciones = "2"}
                           checked={values.opciones=== "2"? true : false}
                           onChange={onChngeHandler}
                           />
                           <label className="form-check-label" for="inlineRadio2">Número de remisión</label>
                        </div>
                        <div className="form-check form-check-inline">
                           <input 
                           className="form-check-input" 
                           type="radio"
                           name="gruporadio"
                           id="inlineRadio3" 
                           value= {values.opciones = "3"}
                           checked={values.opciones=== '3'? true : false}
                           onChange={onChngeHandler}
                            />
                           <label className="form-check-label" for="inlineRadio3">Número de factura</label>
                        </div>
                     </div>

                     <div className="col"></div>
                  </div>

                  <div className="row mt-5">
                     <div className="col"></div>
                     <div className="col-8 text-start">

                        <input 
                        type="text" 
                        className={error.numero ? "form-control is-invalid" :"form-control"}
                        placeholder="Ingresa el número aquí"
                        id="numero"
                        value={values.numero}
                        onChange={onChngeHandler}

                        />
                        <div className="text-danger">{error.numero}</div>

<                       div className="d-grid gap-2 col-7 mx-auto mt-4">
                           <button type="submit" className="btn color5 fw-bold p-2 text-white">
                           Consultar
                           </button>                            
                        </div>

                     </div>
                     <div className="col"></div>
                  </div>

                  </form>

                  <div className="row">
                     <div className="col"></div>
                     <div className="col-5">
                        <Imagen2 />
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

export default RastreoEnvio;