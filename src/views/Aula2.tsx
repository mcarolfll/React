import { useState } from "react";

export default function Aula2() {
  const [texto, setTexto] = useState("Carol");


  return (
    <div>

      <h3>Vai mudar a palavra</h3>
      <h5>{texto}</h5>

        <button onClick={() => setTexto("linda")}>
        Clique 
      </button>
    </div>


  );
}