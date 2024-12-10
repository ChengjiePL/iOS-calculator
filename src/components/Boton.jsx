import React from "react";
import "../styles/Boton.css";
import { BsCalculator } from "react-icons/bs";
import { BsPlusSlashMinus } from "react-icons/bs";
import { CgMathEqual } from "react-icons/cg";


function Boton({ onButtonClick }) {  // Recibe la prop
  const getTipoBoton = (valor) => {
    if (["+", "*", "/", "=", "-"].includes(valor) || valor.type === CgMathEqual) {
      return "boton-operacion";
    } else if (["AC", "%"].includes(valor) || valor.type === BsPlusSlashMinus) {
      return "boton-especial";
    } else {
      return "boton";
    }
  };


  const botones = [
    "AC",
    <BsPlusSlashMinus />,
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    <BsCalculator style={{ fontSize: '1.6em' }} />,
    "0",
    ".",
    "=",
  ];

  return (
    <div className="container">
      {botones.map((boton, index) => (
        <button 
          key={index}
          className={getTipoBoton(boton)}
          onClick={() => onButtonClick(boton)}
        >
          {boton}
        </button>
      ))}
    </div>
  );
}

export default Boton;
