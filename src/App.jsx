import React from "react";
import Estudios from "./componentes/Estudios";
import Formulario from "./componentes/Formulario";
import Hero from "./componentes/Hero";
import Proyectos from "./componentes/proyectos/Proyectos";
import SobreMi from "./componentes/SobreMi";
import Tecnologias from "./componentes/Tecnologias";

function App() {
  return (
    <>
        <Hero />
        <SobreMi />
        <Tecnologias />
        <Proyectos />
        <Estudios />
        <Formulario/>
    </>
  );
}

export default App;
