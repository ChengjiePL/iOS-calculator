import React from "react";
import "../styles/Screen.css";

function Screen({ screen }) {
  return (
    <section>
      <div className="notch-bar"></div>
      <div className="screen">{screen}</div>
    </section>
  );
}

export default Screen;
