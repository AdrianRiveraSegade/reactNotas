import "./Form.css";
import { useState } from "react";

const SearchForm = ({ searchParams, setSearchParams }) => {
  const [search, setSearch] = useState(searchParams.get("search") || "");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        setSearchParams(new URLSearchParams({ search }));
      }}
    >
      <label htmlFor="search">Busqueda</label>
      <input
        id="search"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />

      <button className="searchButton">Buscar</button>
    </form>
  );
};

//No se ni porque hemos puesto esto, por mí esto podia ser eliminado con un css en la lista de las notas, a fin de cuentas, nunca
//va a haber suficientes notas en esta version de la pagia como para que existan problemas para localizar una nota concreta

export default SearchForm;
