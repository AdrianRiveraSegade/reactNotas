import Auth from "./Auth";

const Header = () => {
  return (
    <header>
      <h1> Abocalo</h1>

      <nav>
        <Auth />
      </nav>
    </header>
  );
};

export default Header;
