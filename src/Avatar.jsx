export default function Avatar(props) {
  return (
    <div className="text-center m-3">
      <img  className="rounded-circle" 
      
        src={props.imagemDaPessoa} 
 
        style={{ width: '150px', height: '150px', borderRadius: '25px',   border: '5px solid #dee29f' }}
      />
      
      <h5>{props.nomeDoUsuario}</h5>
      <h6>{props.Trabalho}</h6>
      <p>{props.Lugar}</p>
    </div>
  );
}