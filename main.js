import "./style.css";

// utilizando o innerHTML para inserir o conteúdo HTML no elemento com id main
// e realizar a troca somente do conteúdo do elemento com id main

document.querySelector("#main").innerHTML = `
  <div>
      <h1>
          Olá, eu sou o <span>Ramon</span>!
      </h1>
      <h2>
          Sobre mim
      </h2>
      <p>
          Sou um desenvolvedor web full stack. 
          Atualmente estou cursando o 3º semestre de Engenharia de Software no Centro Universitário Internacional - UNINTER.
      </p>
      <p>
          No meu tempo livre, gosto de jogar video game, assistir filmes e séries, ler livros e mangás, e ouvir música.
      </p>
  </div>
`;
