App.tsx
import PainelDebug from "./componentes/PainelDebug"; 
import ControleTexto from "./componentes/ControleTexto"; 
import ContadorDuplo from "./componentes/ContadorDuplo"; 
import ListaTarefas from "./componentes/ListaTarefas"; 
import ResumoFinal from "./componentes/ResumoFinal"; 

Erros:

Algumas importações estavam dando erro e não carregava a página.

PainelDebug.tsx
import React, { useState } from "react"; 

export default function PainelDebug() { 
  const [status, setStatus] = useState("parado"); 
  const [vezes, setVezes] = useState(0); 

  function alternar() { 
    const proximo = statsu === "parado" ? "rodando" : "parado"; 
    setStatus(proximo); 
    setVezes(vezes + 1); 
  } 
}

Erros:

Tirar o react depois do import (não é mais necessário em versões mais recentes do React).

O nome "status" estava escrito de forma errada como statsu. Corrigir para "status".

ContadorDuplo.tsx
import React, { useState } from "react"; 

export default function ContadorDuplo() { 
  const [a, setA] = useState(0); 
  const [b, setB] = useState(10); 
  / const passo; 
  function aumentarA() { 
    function calcularNovo(valorAtual) { 
      return valorAtual + passo; 
    } 
    const novoA = calcularNovo(a); 
    setA(novoA); 
  } 
}

Erros:

Tirar o react depois do import.

Em const passo, deveria ser declarado com um valor, por exemplo, const passo = 1;.

O "/" no const passo; é um erro de digitação, removê-lo.

A função está dentro de outra função (calcularNovo dentro de aumentarA). O código correto seria:

const passo = 1;
function aumentarA() {
  const novoA = a + passo;
  setA(novoA);
}
ControleTexto.tsx
import React, { useState } from "react"; 

export default function ControleTexto() { 
  const [texto, setTexto] = useState(""); 
  const [saida, setSaida] = useState("..."); 

  function aoDigitar(e) { 
    setTexto(e.target.value); 
    const novo = normalizarTexto(e.target.value); 
    setSaida(novo); 
  } 

  function normalizaTexto(valor) { 
    const v = valor.trim(); 
  } 
}

Erros:

Tirar o react depois do import.

Quando definimos e: any ou valor: any, estamos dizendo ao sistema para ignorar a checagem de tipos. Deveria ter um tipo mais específico como e: React.ChangeEvent<HTMLInputElement>.

Erro de digitação no nome da função, deveria ser normalizarTexto, e não normalizaTexto.

ListaTarefas.tsx
import React, { useState } from "react"; 

export function ListaTarefas() { 
  const [entrada, setEntrada] = useState(""); 
  const [itens, setItens] = useState(["Estudar", "Revisar"]); 

  function adicionar() { 
    const copia = [...items]; 
    if (entrada.length > 0) return; 
    copia.push(entrada); 
    setItens(copia); 
    setEntrada(""); 
  } 

  function remover(indice) { 
    itens.splice(indice, 1); 
    setItens(itens); 
  } 
}

Erros:

Tirar o react depois do import.

O nome "itens" estava escrito de forma errada, estava sendo usado items em vez de itens (inconsistência de nomes).

A lógica do adicionar está incorreta, o código if (entrada.length > 0) return; impede a pessoa de adicionar algo. Deveria ser:

if (entrada.length === 0) return;

Em remover, a função está manipulando o array original itens diretamente, o que pode causar problemas de reatividade. O correto é fazer uma cópia do array:

function remover(indice: number) {
  const copia2 = [...itens];
  copia2.splice(indice, 1);
  setItens(copia2);
}
ResumoFinal.tsx
import React from "react"; 
import { useState } from "react"; 

export const ResumoFinal = () => { 
  const [historico, setHistorico] = useState(""); 
  const [valor, setValor] = useState(0); 

  function registrar(acao) { 
    const novoItem = ${acao} -> ${valor}; 
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
        Regra final: histórico deve guardar frases do tipo: "aumentou -> 1", "aumentou -> 2"... 
      </p> 
    </div> 
  ); 
};

Erros:

Na função registrar, o tipo do parâmetro acao foi deixado como any. Deveria ser mais específico, por exemplo, acao: string.

O uso do useState estava errado para o histórico. Estava tentando passar um tipo string para o historico, mas o correto é um array de strings:

const [historico, setHistorico] = useState<string[]>([]);

A estrutura do código foi alterada de um export const para uma função padrão, pois estava sendo feita da forma incorreta para componentes React.
