import "./signin.css";
import { useState, useEffect } from "react";

const baseURL = "http://localhost:8080/alunos";

function SignIn({ items }) {
  const [busca, setBusca] = useState("");
  const [alunos, setAlunos] = useState([]);

  const handleChange = (event) => {
    setBusca(event.target.value);
  };
  const handleClick = () => {};

  const getAlunos = async () => {
    const response = await fetch(baseURL, {
      method: "get",
      headers: new Headers({
        "Content-Type": "	application/json",
      }),
    });
    const alunos = await response.json();
    setAlunos(alunos);
  };

  useEffect(() => {
    getAlunos();
  }, []);

  return (
    <div className="container">
      <div className="form">
        <nav className="nav-bar">
          <div className="text">
            <h1>Consultas Alunos - Cursos</h1>
          </div>
        </nav>
        <section method="get" className="container-form">
          <div className="cont">
            Alunos:
            <input
              onChange={handleChange}
              value={busca}
              id="textinput"
              name="textinput"
              className="input-text"
              type="text"
            />
            <button onClick={handleClick}>Confirmar</button>
          </div>
          <div>
            Cursos:
            <input className="input-text" type="text" />
            <button onClick={handleClick}>Confirmar</button>
          </div>
        </section>
        <hr />
        <section className="container-text">
          <div className="container-resultados">
            <div>
              <h1>Resultados Alunos</h1>
              <ul>
                {alunos.map((alunos) => {
                  const { id, name, email, cpf, name_mae, nome_pai } = alunos;
                  return (
                    <>
                      <li key={id}>
                        <div>{id}</div>
                      </li>
                      <li key={name}>
                        <div>{name}</div>
                      </li>
                      <li key={email}>
                        <div>{email}</div>
                      </li>
                      <li key={cpf}>
                        <div>{cpf}</div>
                      </li>
                      <li key={name_mae}>
                        <div>{name_mae}</div>
                      </li>
                      <li key={nome_pai}>
                        <div>{nome_pai}</div>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
            <div>
              <h1>Resultados Cursos</h1>
              <li type="text" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SignIn;
