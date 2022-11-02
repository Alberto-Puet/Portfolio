import React from 'react'
import './proyecto-cards.scss'
import proyecto2 from '../../img/proyecto-2.png'
import { VscGithubInverted } from "react-icons/vsc";
import { HiLink } from 'react-icons/hi';



function Proyecto2() {
  return (
    <>
        <div className='p-4'>
        <div className="card">
            <div className="face front">
                <img src={proyecto2} alt="proyecto-2" />
                <h3>Movie's App </h3>
            </div>

            <div className="face back">
                <h2>App de Peliculas </h2>
                
                <div className="texto">
                <p>App que muestra las peliculas mas populares del momento consumiendo la API de "The Movie DB" con React Js.<br/><br/>
                Estilizado con Bootstrap y SASS.</p>

                <p>React Js - Bootstrap - SASS</p>
                </div>

                <div className='links'>
                <a href="https://app-my-movies.netlify.app/" target="_blank"><HiLink/></a>
                <a href="https://github.com/Alberto-Puet/App-Movies" target="_blank"><VscGithubInverted/></a>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Proyecto2