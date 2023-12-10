import { handleSubmit } from "./cadastrar.js";
import { geraCard } from "./cards.js";
import { listarAmigos } from "./repositorioMigos.js";

const container = document.querySelector(".card-container");

const lista = await listarAmigos();
lista.forEach(amigo => container.appendChild(geraCard(amigo)));

  let formulario = document.querySelector("form");
  formulario.addEventListener("submit", (event) => {

    let sucesso = handleSubmit();

    if(!sucesso) {
        console.log("Erro ao cadastrar novo amigo.");
        event.preventDefault();
        return;
    }
  });
