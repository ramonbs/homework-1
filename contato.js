import "./style.css";

// utilizando o innerHTML para inserir o conteúdo HTML no elemento com id main
// e realizar a troca somente do conteúdo do elemento com id main

// Utilizei a tag form para criar um formulário de forma semântica.

document.querySelector("#main").innerHTML = `
    <form>
        <label for="name">
            Nome:
        </label>
        <input type="text" id="name" name="name" required>
        <label for="email">
            E-mail:
        </label>
        <input type="email" id="email" name="email" required>
        <label for="message">
            Mensagem:
        </label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">
            Enviar
        </button>
    </form>
`;
