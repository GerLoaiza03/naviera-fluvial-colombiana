import React from "react";

import "./card.css";

function Card({ imagen, nombre, date, capacidad, rutas, capitan }) {
  return (
    <div className="card text-center color1 animate__animated animate__fadeInUp"> 
      <div className="overflow  contenedor-img " >
        <img src={imagen} alt="a wallpaper" className="  card-img-top " />
      </div>
      <div className="pt-1 text-light"> 
        <table className="text-start ms-5 mb-2 mt-3">
         <tr >
              <td className="pb-2">Nombre:</td>
              <td className="ps-2 pb-2">{nombre}</td>
        </tr>
        <tr>
              <td  className="pb-2">Año inauración:</td>
              <td className="ps-2 pb-2">{date}</td>
        </tr>
        <tr>
              <td  className="pb-2">Capacidad:</td>
              <td className="ps-2 pb-2">{capacidad}</td>
        </tr>
        <tr>
              <td  className="pb-2">Rutas que atiende:</td>
              <td className="ps-2 pb-2">{rutas}</td>
        </tr>
        <tr>
              <td  className="pb-2">Capitán:</td>
              <td className="ps-2 pb-2">{capitan}</td>
        </tr>
        
      </table>
       
        
      </div>
    </div>
  );
}


export default Card;
