import { useState } from "react";

export default function ContadorDuplo() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(10);

  
  const passo = 1;

  function aumentarA() {
  const novoA = (a+passo);
  setA(novoA);
  
  }

  function diminuirB() {
   
    setB(b - a);
  }

  return (
    <div>
      <h2>Contador Duplo</h2>

      <p>A: <strong>{a}</strong></p>
      <p>B: <strong>{b}</strong></p>

      <button onClick={aumentarA}>Aumentar A</button>
      <button onClick={diminuirB}>Diminuir B</button>

      <div>
        <p>Objetivo:</p>
        <ul>
          <li>O passo deve começar em 1.</li>
          <li>Aumentar A soma o passo em A.</li>
          <li>Diminuir B subtrai 1 de B.</li>
        </ul>
      </div>
    </div>
  );
}