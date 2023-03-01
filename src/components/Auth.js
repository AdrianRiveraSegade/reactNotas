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
            <Link to={"/register"}>Register</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <button>
              <Link to={"/note"}>Crea una nueva nota</Link>
            </button>
          </li>
          <li onClick={() => logout()}>
            <button>Logout</button>
          </li>
        </>
      )}
      <button>
        <Link to={"/config"}>Configuracion</Link>
      </button>
    </ul>
  );
};

export default Auth;
