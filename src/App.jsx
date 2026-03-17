import Avatar from './Avatar.jsx';

export default function App() {
  return (
    <div className="container mt-5">
      <h3>Ganhadores do Oscar</h3>
      <div className="d-flex justify-content-around">
        
        <Avatar  imagemDaPessoa="https://m.media-amazon.com/images/M/MV5BMjExOTY3NzExM15BMl5BanBnXkFtZTgwOTg1OTAzMTE@._V1_FMjpg_UX1000_.jpg" 
        nomeDoUsuario="Michael B. Jordan"
        Trabalho= "Melhor Ator "
        Lugar= "Pecadores" />

        <Avatar imagemDaPessoa="https://forbes.com.br/wp-content/uploads/2026/03/Robert-Gauthier-Los-Angeles-Times-via-Getty-Images-JESSIE-BUCKLEY-860x484.jpg" 
        nomeDoUsuario="Jessie Buckley"
        Trabalho= "Melhor Atriz"
        Lugar= "Hamnet: A Vida Antes de Hamlet" />

        <Avatar imagemDaPessoa="https://media.fstatic.com/-HgE2l9dutS-xfGS74he09sUK0A=/350x525/smart/filters:format(webp)/media/movies/covers/2025/10/Sentimental_Value_1.jpeg"
        nomeDoUsuario="Valor Sentimental"
        Trabalho= "Melhor Filme Internacional"
        />

      </div>
    </div>
  );
}