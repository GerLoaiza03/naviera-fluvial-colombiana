import React from "react";
import Card from "./Card";

import ruta1 from "../../img/ruta1.jpg";
import ruta2 from '../../img/ruta2.jpg'
import ruta3 from '../../img/ruta3.jpg'
import ruta4 from "../../img/ruta4.jpg";
import ruta5 from '../../img/ruta5.jpg'
import ruta6 from '../../img/ruta6.jpg'

const rutas = [
  {
    id: 1,
    title: "Ruta 1",
    image: ruta1,
    origen: "Barrancabermeja",
    destino: "Barranquilla",
    distancia: "XX  millas",
    tiempo: "XX horas",
    frecuencia: "Todos los dias", 
    urlorigen: "https://barrancabermeja.gov.co",
    urldestino: "https://barranquilla.gov.co/"
  },
  {
    id: 2,
    title: "Ruta 2",
    image: ruta2,
    origen: "Cartagena",
    destino: "Barranquilla",
    distancia: "XX  millas",
    tiempo: "XX horas",    
    frecuencia: "Todos los dias",
    urlorigen: "https://cartagena.com",
    urldestino: "https://barranquilla.gov.co/"
  },
  {
    id: 3,
    title: "Ruta 3",
    image: ruta3,
    origen: "Barranquilla",
    destino: "Santa Marta",
    distancia: "XX  millas",
    tiempo: "XX horas",
    frecuencia: "Todos los dias", 
    urlorigen: "https://barranquilla.gov.co/",
    urldestino: "https://santamarta.gov.co/"
  },
  {
    id: 4,
    title: "Ruta 4",
    image: ruta4,
    origen: "Santa Marta",
    destino: "Rioacha",
    distancia: "XX  millas",
    tiempo: "XX horas",
    frecuencia: "Todos los dias",
    urlorigen: "https://santamarta.gov.co",
    urldestino: "https://riohacha-laguajira.gov.co/"
  },
  {
    id: 5,
    title: "Ruta 5",
    image: ruta5,
    origen: "Barranquilla",
    destino: "Dibulla",
    distancia: "XX  millas",
    tiempo: "XX horas",
    frecuencia: "Todos los dias",   
    urlorigen: "https://barranquilla.gov.co/",
    urldestino: "https://dibulla-laguajira.gov.co/m"
  },
  {
    id: 6,
    title: "Ruta 6",
    image: ruta6,
    origen: "La Dorada",
    destino: "Barranquilla",
    distancia: "XX  millas",
    tiempo: "XX horas",
    frecuencia: "Todos los dias",    
    urlorigen: "https://ladorada-caldas.gov.co/",
    urldestino: "https://barranquilla.gov.co/"
  }
];

function CardsRutas() {
  return (
    <>
    <h2 className="text-center mb-4"> Las rutas que atiende nuestra Empresa </h2>
    <div className="container d-flex justify-content-center align-items-center h-100">      
      <div className="row">
        {rutas.map((el) => (
          <div className="col-md-4 mb-5" key={el.id}>
            <Card maparuta={el.image} title={el.title} origen={el.origen} destino={el.destino} distancia={el.distancia} tiempo={el.tiempo} frecuencia = {el.frecuencia} urlorigen={el.urlorigen} urldestino={el.urldestino} />
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default CardsRutas;
