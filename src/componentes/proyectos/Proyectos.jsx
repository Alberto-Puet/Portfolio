import React from "react";
import Proyecto1 from "../proyectos/Proyecto-1";
import Proyecto2 from "../proyectos/Proyecto-2";
import Proyecto3 from "../proyectos/Proyecto-3";
import "./proyectos.scss";

function Proyectos() {
  return (
    <>
      <div className="contenedor-general" id="proyectos">
      <div className="overlay"></div>
        <h1 className="proyectos-titulo">Mis Proyectos</h1>

        <div className="contenedor-proyectos">
         

          <Proyecto1 />
          <Proyecto2 />
          <Proyecto3 />
        </div>
      </div>
    </>
  );
}

export default Proyectos;
