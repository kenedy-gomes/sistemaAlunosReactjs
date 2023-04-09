import { BrowserRouter, Route } from "react-router-dom";
import Consultas from "../pages/Consultas";
import SignUp from "../pages/SignUp";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route component={Consultas} path="/" exact />
      <Route component={SignUp} path="/cadastro" />
    </BrowserRouter>
  );
}
