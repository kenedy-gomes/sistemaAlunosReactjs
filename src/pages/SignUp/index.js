import "../../pages/Consultas/signin.css";
import { Formik } from "formik";
import "semantic-ui-css/semantic.min.css";
import "../SignUp/signUp.css";
import axios from "axios";

const baseURL = "http://localhost:8080/alunos/cadastro";

function SignUp() {
  const handleSubmit1 = (data) => {
    axios
      .post(baseURL, {
        name: data.name,
        email: data.email,
        cpf: data.cpf,
      })

      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <nav className="nav-bar">
        <div className="text">
          <h1>Consultas e Cadastro de Alunos - Cursos</h1>
        </div>
      </nav>
      <section className="container-cadastro">
        <div className="container-form">
          <h1>Cadastro Alunos</h1>
          <div method="post" className="form">
            <Formik
              initialValues={{
                name: "",
                email: "",
                cpf: "",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                return errors;
              }}
              onSubmit={handleSubmit1}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <div>
                  <form method="post" onSubmit={handleSubmit}>
                    <div>
                      <input
                        className="inputcursos"
                        type="name"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        placeholder="Name..."
                      />
                    </div>
                    <div>
                      <input
                        className="inputcursos"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder="Email..."
                      />
                    </div>
                    {errors.email && touched.email && errors.email}
                    <div>
                      <input
                        className="inputcursos"
                        type="cpf"
                        name="cpf"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.cpf}
                        placeholder="CPF..."
                      />
                    </div>
                  </form>
                  <div className="btn-btn">
                    <button
                      onClick={handleSubmit}
                      className="ui button"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Cadastrar
                    </button>
                  </div>
                </div>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
}
export default SignUp;
