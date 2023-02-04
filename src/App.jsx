import { useState } from "react";
import "./App.css";
import logo from "./img/BatmanI.jpg";

const date = new Date();
// Se deja en blanco o vacío new Date () para obtener fecha y hora actual

function App() {
  const [seconds, setSeconds] = useState(date.getSeconds());
  const [minutes, setMinutes] = useState(date.getMinutes());
  const [hours, setHours] = useState(date.getHours());

  setTimeout(() => {
    //Clausulas de guarda
    if (seconds !== 59) return setSeconds(seconds + 1);
    setSeconds(0);

    if (minutes !== 59) return setMinutes(minutes + 1);
    setMinutes(0);

    if (hours !== 23) return setHours(hours + 1);
    setHours(0);
  }, 1000);

  return (
    <div className="App">
      <div className="title">
        <h1> BATMAN FOREVER </h1>
      </div>
      <div className="logo">
        <img src= {logo} />
      </div>
      <div className="watch">
        <h2>
          {hours < 10 ? 0 : ""}
          {hours} : {minutes < 10 ? 0 : ""}
          {minutes} : {seconds < 10 ? 0 : ""}
          {seconds}
        </h2>
      </div>
      <div className="author">
        <h3>
          Juan Camilo Giraldo
        </h3>
      </div>
    </div>
  );
}

export default App;
