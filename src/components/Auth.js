import "./Header.css";
import { Link } from "react-router-dom";

export const Auth = () => {
  return (
    <ul className="headLeft">
      <li>
        <Link to={"/register"}>Register</Link>
      </li>
      <li>
        <Link to={"/login"}>Login</Link>
      </li>
    </ul>
  );
};

export default Auth;
