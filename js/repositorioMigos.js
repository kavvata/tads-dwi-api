export { listarAmigos, removerAmigo };

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
  try {
    // FIXME
    const res = await fetch(
      `https://reqres.in/api/users/${userId}`,
      {
        method: "DELETE"
      }
    );
    const resJSON = await res.json();

    if (!res.ok) {
      console.log(resJSON.description);
    }

  } catch (error) {
    console.log(`Exception - ${error}`);
  }
}