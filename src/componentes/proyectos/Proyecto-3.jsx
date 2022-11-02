import React from 'react'
import './proyecto-cards.scss'
import proyecto3 from '../../img/proyecto-3.png'
import { VscGithubInverted  } from "react-icons/vsc";
import { HiLink } from 'react-icons/hi';




function Proyecto3() {
  return (
    <>
        <div className='p-4'>
        <div className="card">
            <div className="face front">
                <img src={proyecto3} alt="proyecto-3" />
                <h3>Perifericos Store </h3>
            </div>

            <div className="face back">
                <h2>Tienda de perifericos </h2>
                
                <div className="texto">
                <p>Tienda ficticia con API local de perifericos con carrito de compras funcional incluido desarrollado con React Js.<br/><br/>
                Estilizado con Bootstrap y SASS.</p> 

                <p><p>React Js - Bootstrap - SASS</p></p>
                </div>

                <div className='links'>
                <a href="https://perifericos-store.netlify.app/" target="_blank"><HiLink/></a>
                <a href="https://github.com/Alberto-Puet/Perifericos-Store" target="_blank"><VscGithubInverted/></a>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Proyecto3