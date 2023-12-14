export { handleSubmit };

function validaDados(nome, email, imagem) {
  if (!nome) {
    console.log("nome invalido!");
    return false;
  }

  let emailTokens = email.split("@");
  console.log(emailTokens);

  if (!emailTokens[0] || !emailTokens[1].includes(".")) {
    console.log("email invalido!");
    return false;
  }

  if (!imagem) {
    console.log("imagem invalida!");
    return false;
  }

  return true;
}

const handleSubmit = () => {
  let inputNome = document.getElementById("input-nome");

  let nome = inputNome.value.trim();

  let email = document.getElementById("input-email").value.trim();
  email += "@reqres.in";

  let imagem = document.getElementById("input-imagem").value;

  if (!validaDados(nome, email, imagem)) {
    return false;
  }

  // let novoAmigo = JSON.stringify({ name: nome, job: "friend" });
  return true;
};
