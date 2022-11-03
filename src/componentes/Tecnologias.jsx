import React from "react";
import "./tecnologias.scss";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiVisualstudiocode,
  SiNetlify,
} from "react-icons/si";
import { FaSass,FaGitAlt } from "react-icons/fa";
import { BsTerminalFill, BsGithub } from "react-icons/bs";

function Tecnologias() {
  return (
    <>
      <div className="tecnologias-contenedor" id="tecnologias">
        <div className="overlay"></div>

        <h1>Tecnologias y herramientas que utilizo</h1>

        <div className="tecnologias">
          <div className="contenedor-logo">
            <SiHtml5 className="logo html" />
            <p>HTML</p>
          </div>
          <div className="contenedor-logo">
            <SiCss3 className="logo css" />
            <p>CSS</p>
          </div>
          <div className="contenedor-logo">
            <SiJavascript className="logo js" />
            <p>JavaScript</p>
          </div>
          <div className="contenedor-logo">
            <FaSass className="logo sass" />
            <p>SASS</p>
          </div>

          <div className="contenedor-logo">
            <SiBootstrap className="logo bootstrap" />
            <p>Bootstrap</p>
          </div>
          <div className="contenedor-logo">
            <SiReact className="logo react" />
            <p>React Js</p>
          </div>

          <div className="contenedor-logo">
            <BsTerminalFill className="logo terminal" />
            <p>Terminal</p>
          </div>
          <div className="contenedor-logo">
            <SiVisualstudiocode className="logo vs-code" />
            <p>VS Code</p>
          </div>
          <div className="contenedor-logo">
            <BsGithub className="logo github" />
            <p>GitHub</p>
          </div>
          <div className="contenedor-logo">
            <FaGitAlt className="logo git" />
            <p>Git</p>
          </div>
          <div className="contenedor-logo">
            <SiNetlify className="logo netlify" />
            <p>Netlify</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tecnologias;
