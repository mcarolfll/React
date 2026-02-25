import { useState } from "react";

export default function ResumoFinal() {
  const [historico, setHistorico] = useState<string[]>([]);

  const [valor, setValor] = useState(0);

  
  function registrar(acao: any) {
  const novoItem = `${acao} -> ${valor}`;
    const novo = [...historico, novoItem];

    setHistorico(novo);

  }
  

  function aumentar() {
    
    setValor(valor + 1);
    registrar("aumentou");
  }

  function zerar() {
    setValor(0);
    setHistorico([]);
  }

  return (
    <div>
      <h2>Resumo Final</h2>

      <p>Valor atual: <strong>{valor}</strong></p>

      <button onClick={aumentar}>Aumentar</button>
      <button onClick={zerar}>Zerar</button>

      <h3>Histórico</h3>
      <ul>
       
        {historico.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>

      <p>
        Regra final: histórico deve guardar frases do tipo: <br />
        aumentou - 1", "aumentou - 2"...
      </p>
    </div>
  );
}  

  
