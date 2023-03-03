import "./Auth.css";
import { Link } from "react-router-dom";

import { useTokenContext } from "../context/TokenContext";

export const Auth = () => {
  const { token, logout } = useTokenContext();

  return (
    <ul className="headLeft">
      {!token ? (
        <>
          <li>
            <button className="register">
              <Link to={"/register"}>Register</Link>
            </button>
          </li>
          <li>
            <button className="login">
              <Link to={"/login"}>Login</Link>
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <button className="nuevaNota">
              <Link to={"/note"}>Crea una nueva nota</Link>
            </button>
          </li>
          <li>
            <button className="nuevaNota">
              <Link to={"/list"}>Listado de tus notas</Link>
            </button>
          </li>
          <li onClick={() => logout()}>
            <button className="logout">Logout</button>
          </li>
        </>
      )}
      <button className="config">
        <Link to={"/config"}>Configuracion</Link>
      </button>
    </ul>
  );
};

export default Auth;
