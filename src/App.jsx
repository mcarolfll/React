import { useState } from 'react'

 

const produtosloja = [
  { id: 1, nome: "Pizza de Calabresa Especial", preco: 65, imagem: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400" },
  { id: 2, nome: "Pizza de Margherita Gourmet", preco: 75, imagem: "https://media.istockphoto.com/id/1171008705/pt/foto/italian-pizza-margherita.jpg?s=612x612&w=0&k=20&c=53nl5m7QLJVEQIDql7qAnQP8FvaaKua9msmu9Ydbm_c=" },
  { id: 3, nome: "Pizza de Trufas Negras", preco: 120, imagem: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=400" },
  { id: 4, nome: "Pizza Frango com Catupiry", preco: 70, imagem: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400" },
  { id: 5, nome: "Pizza Vegana de Cogumelos", preco: 85, imagem: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400" },
  { id: 6, nome: "Pizza de Pistache com Chocolate", preco: 90, imagem: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=400" }
];

export default function App() {

const [carrinho, setCarrinho] = useState([]);
const [exibirModal, setExibirModal] = useState(false);
const adicionarAoCarrinho = (produto) => {setCarrinho([...carrinho, produto]);};

  return (
    <>
     

  <div className="container py-5">
    
      <header className="d-flex justify-content-between align-items-center mb-5 p-3 bg-danger text-white border rounded">
        <h1 className="h3">Pizzaria</h1>
        
        <button 
          className="btn btn-light position-relative" 
          onClick={() => setExibirModal(true)}
        >
          Carrinho
          {carrinho.length > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
              {carrinho.length}
            </span>
          )}
        </button>
      </header>

     
      <div className="row">
        {produtosloja.map((produto) => (
        <div key={produto.id} className="col-md-4 mb-4">
        <div className="card h-100 shadow-sm">

        <img 
        src={produto.imagem} 
        className="card-img-top" 
        alt={produto.nome} 
        style={{ height: '200px' }} 
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{produto.nome}</h5>
        <p className="card-text text-success fw-bold">R$ {produto.preco},00</p>
        <button 
          className="btn btn-secondary " 
          onClick={() => adicionarAoCarrinho(produto)}
        >
          Adicionar
        </button>
      </div>
    </div>
  </div>
))}
</div>


      {exibirModal && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-danger">Carrinho de Compras</h5>
                <button className="btn-close" onClick={() => setExibirModal(false)}></button>
              </div>
              <div className="modal-body">
                {carrinho.length === 0 ? (
                  <p className="text-center text-muted">Carrinho vazio.</p>
                ) : (
                  <ul className="list-group list-group-flush">
                    {carrinho.map((item, index) => (
                      <li key={index} className="list-group-item d-flex justify-content-between">
                        {item.nome} <span>R$ {item.preco},00</span>
                      </li>
                    ))}
                  </ul>
                )}
                <p className="text-end fw-bold">Total: R$ {carrinho.reduce((acc, item) => acc + item.preco, 0)},00</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setExibirModal(false)}>Continuar</button>
                <button className="btn btn-success" onClick={() => setExibirModal(false)} disabled={carrinho.length === 0}>Finalizar Compra</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
      

     
    </>
  )
}
