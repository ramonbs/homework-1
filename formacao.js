import "./style.css";

// utilizando o innerHTML para inserir o conteúdo HTML no elemento com id main
// e realizar a troca somente do conteúdo do elemento com id main


document.querySelector("#main").innerHTML = `
    <div>
        <h1>
            Formação
        </h1>
        <h2>
            Ensino Superior
        </h2>
        <p>
            Atualmente estou cursando o 3º semestre de Engenharia de Software no Centro Universitário Internacional - UNINTER.
        </p>
        <h2>
            Cursos
        </h2>
        <p>
            Desenvolvedor Web Full Stack - Trybe
            Desenvedor Web Full Stack - DIO
        </p>
    </div>
`;