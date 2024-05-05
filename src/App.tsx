import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Ing. Victor Manuel Nuñez | Fullstack Web Developer</h1>
      <h2>Cibersecurity & IT Support</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>SITIO WEB EN CONSTRUCCION</p>
      </div>
      <hr />
      <p className="read-the-docs">
        Derechos reservados 2024 | Ing. Victor Ml Nunez
      </p>
    </>
  );
}

export default App;
