import React from "react";
import { Router, Route } from "react-router-dom";
import "./sobreMi.scss";

function SobreMi() {
  return (
    <div className="contenedor" id="sobreMi">
      <div className="opacidad"></div>

      <div className="texto d-flex flex-column">
        <h2 className="titulo">Sobre Mí</h2>
        <p className="mb-5">
          Soy desarrollador web <span className="color">Front End Junior</span>,
          comence a meterme al mundo de la programacion en 2021 cuando me tope
          con un curso de programación que se dicta en mi país 'Argentina
          Programa'.
        </p>
        <p>
          Desde ese momento hasta la actualidad adquirí varios conocimientos de
          forma totalmente autodidacta tomando cursos en UDEMY y YouTube a la
          vez que lo ponia en practica en proyectos personales.
          <p className="mb-5">
            Actualmente me encuentro aprendiendo
            <span className="color"> ReactJs</span> que es en la tecnologia que
            me quiero especializar en un futuro.
          </p>
          <p>
            Actualmente me encuentro en busca de mi primer experiencia de
            trabajo que me traiga nuevos desafios para aprender lo maximo
            posible de forma constante
          </p>
        </p>
      </div>
    </div>
  );
}

export default SobreMi;
