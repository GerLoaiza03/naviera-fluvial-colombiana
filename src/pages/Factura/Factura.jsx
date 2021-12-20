import React from 'react';
import NavbarVertical from '../../components/Navbar/NavbarVertical';
import "./Factura.css"
import {useState, useEffect} from 'react';
// import validator from 'validator';
// import swal from "sweetalert";
import axios from 'axios';
// import { NavLink } from 'react-router-dom';



const Factura = () => {
    const [ordenes, setOrdenes] = useState([]);

    const getOrdenes = () => {
        axios
        .get("http://localhost:5000/api/naviera/obtener_ordenes")
        .then((response) => {
            setOrdenes(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    useEffect(() => {
        getOrdenes();
      }, []);

    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <NavbarVertical/>

                    <div className="col-1"></div>
                    <div className="col-8">
                    
                        <div className="section-contacto__form--nombre order-total">
                        <div className="card" >
                        <div className="card-header">
                        <h5 className="fw-bold text-center pt-2 pb-3">Factura </h5>
                        <h6 className="fw-bold text-start pt-2 pb-3">N° Orden Despacho ${ordenes._id} </h6>
                        </div>
                                <form className="ms-5 me-5">
                                    <div className="form-group ">
                                        <label  className="fw-bold" for="">Nombre Cliente Remite:</label>
                                        <br/><label className="respuesta" for="">Hola</label>
                                    </div>
                                    <div className="form-group">
                                        <label  className="fw-bold" for="">Telefono Cliente Remite:</label>
                                        <br/><label className="respuesta" for="">Hola</label>
                                    </div>
                                    <div className="form-group">
                                        <label  className="fw-bold"  for="">Puerto Destino:</label>
                                        <br/><label className="respuesta" for="">Hola</label>
                                    </div>
                                    <div className="form-group">
                                        <label   className="fw-bold" for="">Nombre Cliente Destino:</label>
                                        <br/><label className="respuesta" for="">Hola</label>
                                    </div>
                                    <div className="form-group">
                                        <label  className="fw-bold" for="">Telefono Cliente Destino:</label>
                                        <br/><label className="respuesta" for="">Hola</label>
                                    </div>
                                    <div className="form-group">
                                        <label  className="fw-bold" for="">Puerto Destino:</label>
                                        <br/><label className="respuesta" for="">Hola</label>
                                    </div>
                                    <div className="form-group">
                                        <label className="fw-bold" for="">Valor a Pagar:</label>
                                        <br/><label className="respuesta" for="">Hola</label>
                                    </div>
                                    <button type="" className="btn color2 respuesta fw-bold text-white ">
                                            Cerrar
                                    </button>
                                </form>
                            </div>
                        </div>
                        <hr />

                    </div>
                    <div className="col-1"></div>
                </div>
            </div>

        </>
    );
}

export default Factura;