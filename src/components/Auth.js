import "./Header.css";

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
        <li onClick={() => logout()}>Logout</li>
      )}
    </ul>
  );
};

export default Auth;
