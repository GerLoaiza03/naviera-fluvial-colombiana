import React from "react";
import PropTypes from "prop-types";

import "./card.css";

function Card({ maparuta, title, origen, destino, distancia, tiempo, frecuencia, urlorigen, urldestino }) {
  return (
    <div className="card text-center color1 animate__animated animate__fadeInUp"> 
      <div className="overflow  contenedor-img " >
        <img src={maparuta} alt="a wallpaper" className=" imagen img-fluid card-img-top " />
      </div>
      <div className="pt-1 text-light ">
        <h4 className="card-title mt-2 mb-4">{title}</h4>  
        <table className="text-start ms-5 mb-2">
         <tr>
              <td >Puerto origen:</td>
              <td className="ps-3">{origen}</td>
        </tr>
        <tr>
              <td >Puerto destino:</td>
              <td className="ps-3">{destino}</td>
        </tr>
        <tr>
              <td >Distancia:</td>
              <td className="ps-3">{distancia}</td>
        </tr>
        <tr>
              <td >Tiempo promedio:</td>
              <td className="ps-3">{tiempo}</td>
        </tr>
        <tr>
              <td >Frecuencia:</td>
              <td className="ps-3">{frecuencia}</td>
        </tr>
      </table>
        <div className="card-text ">
        <a
          href={urlorigen ? urlorigen : "#!"}
          target="_blank"
          className="btn btn-outline-secondary border-0"
          rel="noreferrer"
        >
          Portal puerto origen
        </a>  <a
          href={urldestino ? urldestino : "#!"}
          target="_blank"
          className="btn btn-outline-secondary border-0"
          rel="noreferrer"
        >
          Portal puerto destino
        </a>
        </div>
        
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card;
