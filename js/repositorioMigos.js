export { listarAmigos, removerAmigo };

// documentação da rest api: https://reqres.in/

const listarAmigos = async () => {
  try {
    const res = await fetch(`https://reqres.in/api/users`);
    const respostaJSON = await res.json();

    if (!res.ok) {
      console.log(respostaJSON.description);
      return;
    }

    return respostaJSON.data;

  } catch (error) {
    console.log("Erro: " + error);
  }
};

const removerAmigo = async (userId) => {
  const statusEsperado = 204;

  try {
    const res = await fetch(
      `https://reqres.in/api/users/${userId}`,
      {
        method: "DELETE"
      }
    );

    if (!res.status === statusEsperado) {
      console.log(`Erro: status ${res.status}`);
      return false;
    }

    console.log(`usuario ${userId} removido com sucesso.`);
    return true;
  } catch (error) {
    console.log(`Exception - ${error}`);
  }
}