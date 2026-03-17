import  './css/cursos.css'


export default function Cursos() {
  return (
    <div className="cursos">
      <h1><b>Cursos Para Iniciantes em programação</b></h1>
      <p>Para mais dicas de cursos ou dúvidas fala por aqui:</p>


      <div className="cursos-lado">
        <div className='container'>
          <img 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTUgOwi8D3pCZSjEWlwYYkhUa6O-hAa2nj4A&s' />
          <p><b>Curso em Vídeo (Gustavo Guanabara):</b> Frequentemente citado como o melhor ponto de partida em português. O curso de Algoritmos e Lógica de Programação é essencial para quem não sabe nada.</p>
        </div>
        
        <div className='container'>
          <img 
            src='https://media.licdn.com/dms/image/v2/D4D0BAQGIz1Szv73G7A/company-logo_200_200/B4DZsKOg4AJcAI-/0/1765403137873/rocketseat_logo?e=2147483647&v=beta&t=9fT1a6eKv_LJjvqYNm_2rfXs8X5B3SgTwAJ7ObSwQo8' />
          <p><b>Rocketseat (Discover):</b>  Oferece uma trilha gratuita chamada "Discover" para quem quer aprender as bases do desenvolvimento web e ferramentas como GitHub. </p>
        </div>
      </div>
    </div>
  );
}
