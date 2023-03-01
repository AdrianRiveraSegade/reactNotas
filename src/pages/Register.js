import "./Login.css";
import { Navigate } from "react-router-dom";
import { useTokenContext } from "../context/TokenContext";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  const { token } = useTokenContext();

  //Si el user esta logueado volvemos al inicio
  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <section>
      <h2>Registro</h2>
      <RegisterForm />
    </section>
  );
};

export default Register;
