import React from "react";
import "./hero.scss";
import { Typewriter } from "react-simple-typewriter";
import NavBar from "../componentes/NavBar";
import DescargarCV from "./DescargarCV";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { SiNetlify } from "react-icons/si";
import { Link } from "react-scroll";

function Hero() {
  const fondo = new URL("../img/fondo-hero.jpeg", import.meta.url);
  return (
    <div className="body" id="inicio">
      <div className="  d-flex justify-content-center flex-column ">
        <NavBar />
        <img src={fondo} className="fondo-hero" />
        <div className="overlay"></div>

        <div className="centrar">
          <h1>
            Alberto <span className="color">Puet</span>
          </h1>
          <div className="contenedor-animacion">
            <h2 className="subtitulo mb-5">
              Desarrollador web
              <span className="animacion">
                <Typewriter
                  loop
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={60}
                  delaySpeed={1500}
                  words={["Front End", "Autodidacta", "Entusiasta"]}
                />
              </span>
            </h2>
          </div>
          <DescargarCV />

          <Link class="contacto" smooth={true} duration={600} to="contacto">
            Contactame
          </Link>
        </div>
      </div>
      <div className="redes">
        <a href="https://www.linkedin.com/in/alberto-puet/" target="_blank">
          <BsLinkedin className="logo-redes linkedin" />
        </a>
        <a href="https://wa.me/+5415548664" target="_blank">
          <BsWhatsapp className="logo-redes whatsapp" />
        </a>
        <a href="https://github.com/Alberto-Puet" target="_blank">
          <BsGithub className="logo-redes github" />
        </a>
        <a
          href="https://app.netlify.com/teams/albertopuet8/overview"
          target="_blank"
        >
          <SiNetlify className="logo-redes netlify" />
        </a>
      </div>
    </div>
  );
}

export default Hero;
