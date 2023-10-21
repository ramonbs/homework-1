import "./style.css";

// utilizando o innerHTML para inserir o conteúdo HTML no elemento com id header
// este conteúdo será inserido em todas as páginas que importarem este arquivo

document.querySelector("#header").innerHTML = `
        <a href="./index.html">
            <button>
                Sobre Mim
            </button>
        </a>

        <a href="./formacao.html">
            <button>
                Formação
            </button>
        </a>

        <a href="https://ramon-giovani-portfolio.vercel.app/" target="_blank">
            <button>
                Portfólio
            </button>
        </a>

        <a href="./contato.html">
            <button>
                Contato
            </button>
        </a>
`;

// captura dos botões e adição de evento de clique para redirecionar para as páginas

const buttonAbout = document.querySelector("#header a:nth-child(1) button");
const buttonFormation = document.querySelector("#header a:nth-child(2) button");
const buttonContact = document.querySelector("#header a:nth-child(4) button");

buttonAbout.addEventListener("click", () => {
    window.location.href = "./index.html";
});

buttonFormation.addEventListener("click", () => {
    window.location.href = "./formacao.html";
});

buttonContact.addEventListener("click", () => {
    window.location.href = "./contato.html";
});
