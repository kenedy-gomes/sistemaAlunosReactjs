import "./signin.css";
import { useState} from "react";
import axios from 'axios';

const baseURL = "http://localhost:8080/alunos/name";

function SignIn() {
  const [busca, setBusca] = useState("");
  const [alunos, setAlunos] = useState([]);
  const [error, SetError] = useState(null);
  const [loading, SetLoading] = useState('');
 
  const handleChange = (event) => {
    setBusca(event.target.value);
  };
  const handleClick = () => {};

  const getAlunos = async () => {
      axios.get(baseURL,{
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
  if(loading) return "Loading...";
  if(error) return "Error!";

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
            <input className="input-text" type="text" />
            
            <button className="btn-text" onClick={handleClick}>Confirmar</button>
         
          </div>
        </section>
        <hr />
        <section className="container-text">
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
                      <hr/>
                    </ul>
                  );
                })}
              </div>
            </div>
            <div className="container-Cursos">
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
