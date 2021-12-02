import React from 'react'
import imagenCliente from '../../img/clientes.jpg';

const ImagenCliente = () => {
    return ( 

        <div className="img-fluid col-md-9 txt-end d-flex justify-content-end ">
        <img src={imagenCliente} alt="" className="imagencliente" />
        </div>
     );
}
 
export default ImagenCliente;