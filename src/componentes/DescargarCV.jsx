import React from 'react'
import './descargarcv.scss'
import { VscArrowDown } from "react-icons/vsc";

function DescargarCV() {
  return (
    <div className='contenedor-cv p-2'>
        <a href='./Alberto-Puet.pdf' download>Descargar CV <VscArrowDown/></a>
    </div>
  )
}

export default DescargarCV