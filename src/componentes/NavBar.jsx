import React, { useState } from "react";
import "./navBar.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonMenuResponsive from "./ButtonMenuResponsive";
import { Link } from "react-scroll";

function Inicio() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const [navBar, setNavBar] = useState(false);

  const changeBackgroundNav = () => {
    if (window.scrollY >= 80) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", changeBackgroundNav);

  return (
    <>
    <nav className={navBar ? "navbar activate" : "navbar"}>
      <div className="navbar d-flex align-items-center justify-content-center ">
        <div className={`links  ${click ? "active " : ""}`}>

          <Link class="link mx-4" smooth={true} duration={600}  to="inicio">
            Inicio
          </Link>
          <Link class="link mx-4" smooth={true} duration={600} to="sobreMi">
            Sobre Mí
          </Link>
          <Link class="link mx-4" smooth={true} duration={600} to="tecnologias">
            Tecnologias
          </Link>
          <Link class="link mx-4" smooth={true} duration={600} to="proyectos">
            Proyectos
          </Link>
          <Link class="link mx-4" smooth={true} duration={600} to="estudios">
            Estudios
          </Link>
          
        </div>

        <div className="botonResponsive" >
          <ButtonMenuResponsive click={click} handleClick={handleClick} />
        </div>
        <div className={`initial  ${click ? "active" : ""}`}></div>
      </div>
    </nav>
  </>
);
}

export default Inicio;
