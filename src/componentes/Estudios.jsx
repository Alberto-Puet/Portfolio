import React from "react";
import "./estudios.scss";
import freeCodeCampLogo from "../img/freeCodeCamp.png";
import argentinaPrograma from "../img/argentinaPrograma.png";
import udemyLogo from "../img/udemy2.png";
import { GrCertificate } from "react-icons/gr";

function Estudios() {
  return (
    <>
      <div id="estudios" className="contenedor-estudios">
        <div className="overlay"></div>

        <div className="estudios d-flex align-items-center justify-content-center flex-column ">
          <div className="estudio-card card-2">
            <div className="logo-1">
              <img
                src={freeCodeCampLogo}
                className="img-1"
                alt="logo free code camp"
              />
            </div>
            

            <div className="texto">
            <h3>Free Code Camp</h3>
            <p>Responsive Web Design</p>
            <div className="separacion">
              <p>2021-2022</p>
              <a
                href="https://www.freecodecamp.org/certification/Alberto-Puet/responsive-web-design"
                target="_blank"
              >
                <GrCertificate className="certificado" />
              </a>
            </div>
            </div>
          </div>
          <div className="estudio-card card-1">
            <div className="logo">
              <img src={udemyLogo} className="img-2" alt="logo-udemy" />
            </div>
            
            <div className="texto">
            <h3>Udemy</h3>
            <p>Curso de JavaScript Moderno</p>
            <div className="separacion">
              <p>2022</p>
              <a
                href="https://www.udemy.com/certificate/UC-6bdaf141-54d9-4ca4-89d7-83bf48b6f458/"
                target="_blank"
              >
                <GrCertificate className="certificado" />
              </a>
            </div>
            </div>
          </div>
          <div className="estudio-card card-3">
            <div className="logo-3">
              <img src={argentinaPrograma} className="img-3" alt="logo-udemy" />
            </div>

            <div className="texto">
              <h3>Argentina Programa </h3>
              <p>
                1er etapa #SeProgramar finalizada - Cursando 2da etapa
                #YoProgramo
              </p>
              <div className="separacion">
                <p>2022</p>
                <a
                  href="https://seprogramar.inti.gob.ar/inti/certificates/verify/Zp7ugWH8quh4ooVK"
                  target="_blank"
                >
                  <GrCertificate className="certificado" />
                </a>
              </div>
            </div>
          </div>

          <div className="estudio-card card-4">
            <div className="logo">
              <img src={udemyLogo} className="img-2" alt="logo-udemy" />
            </div>
            
            <div className="texto">
            <h3>Udemy</h3>
            <p>Curso de React Js - MERN</p>
            <p>Agosto 2022 - Actualidad</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Estudios;
