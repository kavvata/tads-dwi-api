import { geraCard } from "./cards.js";
import { listarAmigos } from "./repositorioMigos.js";

const container = document.querySelector(".card-container");

const lista = await listarAmigos();
lista.forEach(amigo => container.appendChild(geraCard(amigo)));


let formulario = document.querySelector("form");
formulario.addEventListener("submit", (event) => {
    let inputNome = document.getElementById("input-nome");

    let nome = inputNome.value.trim();
    if (!nome) {
        console.log("nome invalido!");
        event.preventDefault();
        return;
    }

    let novoAmigo = JSON.stringify({ name: nome, job: "friend" });
});