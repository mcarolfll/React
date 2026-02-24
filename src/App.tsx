import { useState } from "react";

export default function App() {
  const [price, setPrice] = useState<number>(10);
  const [qty, setQty] = useState<number>(2);

  function calcTotal() {
    const total = price + qty;
    return total;
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>Debug no React</h1>

      <p>Preço : {price}</p>
      <p>Quantidade : {qty}</p>

      <button onClick={() => console.log("Total:", calcTotal())}>
        Calcular total
      </button>
      <p>resultado {calcTotal()}</p>
    </div>
  );
}