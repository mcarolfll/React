import PainelDebug from "./componentes/PainelDebug";
import ControleTexto from "./componentes/ControleTexto";
import ContadorDuplo from "./componentes/ContadorDuplo";
import ListaTarefas from "./componentes/ListaTarefas";
import ResumoFinal from "./componentes/ResumoFinal";

export default function App() {
  return (
    <div>
      <h1>Laboratório de Debug React</h1>

      <PainelDebug />
      <hr />

      <ControleTexto />
      <hr />

      <ContadorDuplo />
      <hr />

      <ListaTarefas />
      <hr />

      <ResumoFinal />
    </div>
  );
}
