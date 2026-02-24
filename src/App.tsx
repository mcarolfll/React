import { useState } from "react";

export default function App() {
  const [price, setPrice] = useState<number>(10);
  const [qty, setQty] = useState<number>(2);

  function calcTotal() {
    const total = price + qty;
    return total;
  }

  return (
    <h1>Atividade</h1>
  );
}