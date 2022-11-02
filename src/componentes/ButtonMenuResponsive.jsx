import React from "react";
import './buttonMenuResponsive.scss'

function ButtonMenuResponsive(props) {
  return (
    <>
      <div onClick={props.handleClick} className={`icon nav-icon-5 ${props.click ? 'open' : ''}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}

export default ButtonMenuResponsive;
