import React from "react";
import Card from "./Card";

import barco1 from "../../img/barco1.jpg";
import barco2 from "../../img/barco2.jpg";
import barco3 from "../../img/barco3.jpg";
import barco4 from "../../img/barco1.jpg";
import barco5 from "../../img/barco2.jpg";
import barco6 from "../../img/barco3.jpg";

const flota = [
  {
    id: 1,
    imagen: barco1,
    nombre: "El Consentido",
    date: "2015",
    capacidad: "500 contenedores",
    rutas: "Ruta 1, ruta 2, ruta 6",
    capitan: "Agente 007"
  },
  {
    id: 2,
    imagen: barco2 ,
    nombre: "El Navante",
    date: "2010",
    capacidad: "400 contenedores",
    rutas: "Ruta 4, ruta 5, ruta 6",
    capitan: "Super agente 82"
  },
  {
    id: 3,
    imagen: barco3,
    nombre: "El consentido",
    date: "2015",
    capacidad: "500 contenedores",
    rutas: "Ruta 1, ruta 2, ruta 6",
    capitan: "Agente 007"
  },
  {
    id: 4,
    imagen: barco4,
    nombre: "El consentido",
    date: "2015",
    capacidad: "500 contenedores",
    rutas: "Ruta 1, ruta 2, ruta 6",
    capitan: "Agente 007"
  },
  {
    id: 5,
    imagen: barco5,
    nombre: "El consentido",
    date: "2015",
    capacidad: "500 contenedores",
    rutas: "Ruta 1, ruta 2, ruta 6",
    capitan: "Agente 007"
  },
  {
    id: 6,
    imagen: barco6,
    nombre: "El consentido",
    date: "2015",
    capacidad: "500 contenedores",
    rutas: "Ruta 1, ruta 2, ruta 6",
    capitan: "Agente 007"
  }
];

function CardsFlota() {
  return (
    <>
    <h2 className="text-center mb-4"> Nuestra flota...a su servicio!! </h2>
    <div className="container d-flex justify-content-center align-items-center h-100">      
      <div className="row">
        {flota.map((el) => (
          <div className="col-md-4 mb-5" key={el.id}>
            <Card imagen={el.imagen} nombre={el.nombre} date={el.date} capacidad={el.capacidad} rutas={el.rutas} capitan={el.capitan} />
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default CardsFlota;
