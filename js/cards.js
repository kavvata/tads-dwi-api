import { removerAmigo } from "./repositorioMigos.js";
export {geraCard};

function geraCard(amigo) {
  // nova div
  let card = document.createElement("div");
  card.classList.add("card", "text-bg-light");
  card.setAttribute("amigoId", amigo.id);

  // gera imagem cabecalho do card
  let img = document.createElement("img");
  img.classList.add("card-img-top");
  img.src=amigo.avatar;
  img.alt="pfp";

  // gera corpo do card, com nome, email e botao
  let body = document.createElement("div");
  body.classList.add("card-body");

  let nome = document.createElement("h5");
  nome.classList.add("card-title");
  nome.textContent = `${amigo.first_name} ${amigo.last_name}`;

  let email = document.createElement("p");
  email.classList.add("card-text");
  email.textContent = `Email: ${amigo.email}`;

  let btnRemover = document.createElement("button");
  btnRemover.classList.add("btn", "btn-primary");
  btnRemover.textContent = "Remover";

  btnRemover.addEventListener("click", () => {
    removerAmigo(amigo.id);
    let container = document.querySelector(".card-container")
    container.removeChild(card);
  });

  // constroi card
  body.append(nome, email, btnRemover);
  card.append(img, body);

  return card;
}

