import { useState } from "react";
import "./App.css";
import Boton from "./components/Boton";
import Screen from "./components/Screen";
import { evaluate } from "mathjs";

function App() {
  const [screen, setScreen] = useState("0");

  const handleClick = (value) => {
    if (value === "AC") {
      setScreen("0"); // Resetea la pantalla
      return;
    }

    if (value === "=") {
      try {
        // Si usas eval():
        const expression = screen.replace(/×/g, "*").replace(/÷/g, "/").replace(/±/g, "-");
        const resultado = eval(expression);

        // Si usas mathjs:
        // const resultado = evaluate(screen);

        setScreen(String(resultado));
      } catch (error) {
        setScreen("Error");
      }
      return;
    }

    if (screen.length >= 13) {
      return; // No hace nada si se supera el límite
    }
    if (typeof value === 'object') {  // Manejar iconos si es necesario
      // Puedes añadir lógica para manejar iconos si lo requieres
      setScreen("ERROR");
      return;
    }
    setScreen((prev) => (prev === "0" ? String(value) : prev + value));
  };

  return (
    <div className="mobile">
      <Screen screen={screen} />
      <Boton onButtonClick={handleClick} />
      <div className="button-bar"></div>
    </div>
  );
}

export default App;

