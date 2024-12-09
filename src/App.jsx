import { useState } from "react";
import "./App.css";
import Boton from "./components/Boton";
import Screen from "./components/Screen.jsx";

function App() {
  const [screen, setScreen] = useState("0");

  return (
    <div className="mobile">
      <Screen value={screen}></Screen>
      <Boton />
      <div className="button-bar"></div>
    </div>
  );
}

export default App;
