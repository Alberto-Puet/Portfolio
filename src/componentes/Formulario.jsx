import React from "react";
import emailjs from '@emailjs/browser';
import './formulario.scss'

function Formulario() {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_y26hssd','template_g3dz1mg', e.target,'p6zd4v-Sb2dknwZ4N')
        .then(response => console.log(response))
        .catch(error => console.log(error))
        e.target.reset()
    }

    

  return (
    <>
      <div className="div-form" id="contacto">
        <div className="overlay"></div>
        <h1 className="titulo-form">Contactame</h1>
        <form className="formulario" id="form" onSubmit={sendEmail}>
          <label for='nombre'>Nombre</label>
          <input type="text" id="nombre" name="user_name" />

          <label for='email'>Email</label>
          <input type="email" id="email" name="user_email" />

          <label for='mensaje'>Mensaje</label>
          <textarea name="user_message" id="mensaje" cols="30" rows="10"></textarea>
          <button >Enviar</button>
        </form>
      </div>
    </>
  );
}

export default Formulario;
