import React from 'react'
import './proyecto-cards.scss'
import proyecto1 from '../../img/proyecto-1.png'
import { VscGithubInverted } from "react-icons/vsc";
import { HiLink } from 'react-icons/hi';


function Proyecto1() {
  return (
    <>
        <div className='p-4'>
        <div className="card">
            <div className="face front">
                <img src={proyecto1} alt="proyecto-1" />
                <h3>Cotizador de criptos </h3>
            </div>

            <div className="face back">
                <h2>Cotizador de criptomonedas</h2>
                
                <div className='texto'>
                <p>App que cotiza distintas criptomonedas y sus distintas varientes en tiempo real realizado consumiendo API con JavaScript. <br/><br/>
                Estilizado con CSS.</p>

                <p>HTML - CSS - JavaScript</p>
                </div>

                <div className='links'>
                <a href="https://cotizador-criptomonedas-in-real-time.netlify.app/" target='_blank'><HiLink/></a>
                <a href="https://github.com/Alberto-Puet/Cotizador-de-Criptomonedas" target='_blank'><VscGithubInverted/></a>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Proyecto1