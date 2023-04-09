import "./signin.css";
import "semantic-ui-css/semantic.min.css";
import { useState } from "react";
import axios from "axios";

const baseURL = "http://localhost:8080/alunos/name";
const baseURL2 = "http://localhost:8080/cursos/name";
const baseURL3 = "http://localhost:8080/alunos";

function SignIn() {
  const [busca, setBusca] = useState("");
  const [alunos, setAlunos] = useState([]);

  const [buscaCurs, setBuscaCurs] = useState("");
  const [cursos, setCursos] = useState([]);

  const [error, SetError] = useState(null);
  const [loading, SetLoading] = useState("");

  const handleChange = (event) => {
    setBusca(event.target.value);
  };

  const handleChangecurs = (event) => {
    setBuscaCurs(event.target.value);
  };

  const getAlunos = async () => {
    axios
      .get(baseURL, {
        params: {
          name: busca,
        },
      })
      .then((response) => {
        SetLoading(true);
        setAlunos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
        SetError(error);
      })
      .finally(() => {
        SetLoading(false);
      });
  };
  if (loading) return "Loading...";
  if (error) return "Error!";

  const getCursos = async () => {
    axios
      .get(baseURL2, {
        params: {
          name: buscaCurs,
        },
      })
      .then((response) => {
        SetLoading(true);
        setCursos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
        SetError(error);
      })
      .finally(() => {
        SetLoading(false);
      });
  };

  return (
    <div>
      <nav className="nav-bar">
        <div className="text">
          <h1>Consultas e Cadastro de Alunos - Cursos</h1>
        </div>
      </nav>
      <div className="container">
        <div className="form">
          <div className="container-result">
            <div className="h1-container">
              <h1>Consulta Alunos</h1>
            </div>
            <div className="button-link">
              <a className="link" href="./cadastro">
                Cadastro
              </a>
            </div>

            <section method="get" className="container-form">
              <div className="cont">
                Alunos:
                <div class="ui focus input">
                  <input
                    className="inputcursos"
                    onChange={handleChange}
                    value={busca}
                    type="text"
                    placeholder="Search..."
                  />
                </div>
                <button onClick={() => getAlunos()} class="ui button">
                  Consultar
                </button>
              </div>
              <div>
                Cursos:
                <div className="ui focus input">
                  <input
                    className="inputcursos"
                    onChange={handleChangecurs}
                    value={buscaCurs}
                    type="text"
                    placeholder="Search..."
                  />
                </div>
                <button className="ui button" onClick={() => getCursos()}>
                  Consultar
                </button>
              </div>
            </section>

            <section method="get" className="container-text">
              <div className="container-resultados">
                <div>
                  <h1>Resultados Alunos</h1>
                  <div>
                    {alunos.map((alunos) => {
                      const { id, name, cpf, email } = alunos;
                      return (
                        <div role="list">
                          <div key={name} role="listitem" class="item">
                            <div key={id} class="header">
                              <br /> ID: {id}
                            </div>
                            NAME: {name}
                          </div>
                          <div key={cpf} role="listitem" class="item">
                            <div key={email} class="header">
                              EMAIL: {email}
                            </div>
                            CPF: {cpf}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <br />
                <div>
                  <h1>Resultados Cursos</h1>
                </div>

                {cursos.map((cursos) => {
                  const { id, name } = cursos;
                  return (
                    <div role="list" class="ui list">
                      <div key={id} role="listitem" class="item">
                        <div key={name} class="header">
                          ID: {id}
                        </div>
                        NAME: {name}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
