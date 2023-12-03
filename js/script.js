import { geraCard } from "./cards.js";
import { listarAmigos } from "./repositorioMigos.js";

const container = document.querySelector(".card-container");

const lista = await listarAmigos();
lista.forEach(amigo => container.appendChild(geraCard(amigo)));