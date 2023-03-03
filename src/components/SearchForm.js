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
        className="search"
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

export default SearchForm;
