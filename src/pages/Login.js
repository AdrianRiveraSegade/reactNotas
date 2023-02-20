import { Navigate } from "react-router-dom";
import { useTokenContext } from "../context/TokenContext";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const { token } = useTokenContext();

  //Si el user esta logueado volvemos al inicio
  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <section>
      <h2>Login</h2>
      <LoginForm />
    </section>
  );
};

export default Login;
