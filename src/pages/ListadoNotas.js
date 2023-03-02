import NoteList from "../components/NoteList";
import useNotes from "../hooks/useNotes";
import ErrorMessage from "../components/ErrorMessage";
import SearchForm from "../components/SearchForm";

const ListadoNotas = () => {
  const { notes, errorMessage, loading, searchParams, setSearchParams } =
    useNotes();

  return (
    <section>
      <SearchForm
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />

      <h2>Notas</h2>

      {loading}
      {errorMessage && <ErrorMessage msg={errorMessage} />}

      {notes?.length > 0 && <NoteList notes={notes} />}
    </section>
  );
};

export default ListadoNotas;
