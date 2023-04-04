import "./signin.css";
import { useState } from "react";
import axios from 'axios';

const baseURL = "http://localhost:8080/alunos/name";
const baseURL2 = "http://localhost:8080/cursos/name";

function SignIn() {
  const [busca, setBusca] = useState("");
  const [alunos, setAlunos] = useState([]);
  
  const [buscaCurs, setBuscaCurs] = useState("");
  const [cursos, setCursos] = useState([]);

  const [error, SetError] = useState(null);
  const [loading, SetLoading] = useState('');

  const handleChange = (event) => {
    setBusca(event.target.value);
  };

  const handleChangecurs = (event) => {
    setBuscaCurs(event.target.vale);
  };

  const getAlunos = async () => {
    axios.get(baseURL, {
      params: {
        name: busca
      }
    }).then(response => {
      SetLoading(true)
      setAlunos(response.data)
    }).catch(error => {
      console.error("Error fetching data", error)
      SetError(error)
    })
      .finally(() => {
        SetLoading(false);
      })
  };
  if (loading) return "Loading...";
  if (error) return "Error!";

  

  const getCursos = async () => {
    axios.get(baseURL2, {
      params: {
        name: buscaCurs
      }
    }).then(response => {
      SetLoading(true)
      setCursos(response.data)
    }).catch(error => {
      console.error("Error fetching data", error)
      SetError(error)
    })
      .finally(() => {
        SetLoading(false);
      })
  };


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
            <button className="btn-text" onClick={() => getAlunos()}>Confirmar</button>
          </div>
          <div>
            Cursos:
            <input
              onChange={handleChangecurs}
              value={buscaCurs}
              className="input-text" type="text" />

            <button className="btn-text" onClick={()=> getCursos()}>Confirmar</button>

          </div>
        </section>
        <hr />
        <section method="get" className="container-text">
          <div className="container-resultados">
            <div>
              <h1>Resultados Alunos</h1>
              <div>
                <hr />
                {alunos.map((alunos) => {
                  const { id, name, cpf, email } = alunos;
                  return (
                    <ul>
                      <ul>
                        <li key={id}>
                          <div>{id}</div>
                        </li>
                      </ul>
                      <li key={name}>
                        <div>{name}</div>
                      </li>
                      <li key={email}>
                        <div>{email}</div>
                      </li>
                      <li key={cpf}>
                        <div>{cpf}</div>
                      </li>
                      <hr />
                    </ul>
                  );
                })}
              </div>
            </div>
            <div>
              <h1>Resultados Cursos</h1>
            </div>
            <hr/>
            {cursos.map((cursos) => {
                  const { id, name} = cursos;
                  return (
                    <ul>
                      <ul>
                        <li key={id}>
                          <div>{id}</div>
                        </li>
                      </ul>
                      <li key={name}>
                        <div>{name}</div>
                      </li>
                      <hr />
                    </ul>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default SignIn;
