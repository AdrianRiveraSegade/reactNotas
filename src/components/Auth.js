import "./Auth.css";
import { Link } from "react-router-dom";

import { useTokenContext } from "../context/TokenContext";

export const Auth = () => {
  const { token, logout, loggedUser } = useTokenContext();

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
          {/* FIXME Visualiza email de forma mas bonita y quitar Configuracion */}
          {loggedUser && <li className="user">{loggedUser.email}</li>}
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
    </ul>
  );
};

export default Auth;
