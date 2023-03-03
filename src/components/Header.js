import "./Header.css";
import Auth from "./Auth";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1 className="head">
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          BlocOnline
        </Link>
      </h1>

      <nav>
        <Auth />
      </nav>
    </header>
  );
};

export default Header;
