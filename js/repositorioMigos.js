export { listarAmigos };

const listarAmigos = async () => {
  try {
    const res = await fetch(`https://reqres.in/api/users`);
    const data = await res.json();

    if (!res.ok) {
      console.log(data.description);
      return;
    }

    return data.data;

  } catch (error) {
    console.log("Erro: " + error);
  }
};
