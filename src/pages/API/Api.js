export const carregaCardsNoIndexMes = async () => {
  let url = "http://localhost:8080/alunos";
  let dataNova = new Date();
  let datames = `${dataNova.getMonth() + 1}`;
  let token = JSON.parse(localStorage.getItem("meuToken"));

  return fetch(`${url}${datames}`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((resp) => {
      if (resp.status === 401) {
        refreshToken();
      }
      if (resp.ok) {
        return resp.json();
      }
      return resp.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      throw new Error(err, "Nao foi possível conectar");
    });
};
