import React from "react";
import "../styles/Boton.css";

function Boton() {
  const getTipoBoton = (valor) => {
    if (["+", "-", "*", "/", "="].includes(valor)) {
      return "boton-operacion";
    } else if (["AC", "+/-", "%"].includes(valor)) {
      return "boton-especial";
    } else {
      return "boton";
    }
  };

  const botones = [
    "AC",
    "+/-",
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
    "=",
    "0",
    ".",
    "=",
  ];

  return (
    <div className="container">
      {botones.map((boton, index) => (
        <button key={index} className={getTipoBoton(boton)}>
          {boton}
        </button>
      ))}
    </div>
  );
}

export default Boton;
