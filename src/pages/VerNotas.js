import { Link, useParams } from "react-router-dom";
import Note from "../components/Note";
import ErrorMessage from "../components/ErrorMessage";
import useNoteById from "../hooks/useNoteByID";

const VerNotas = () => {
  //Recogemos el id de los params de la url
  const { id } = useParams();

  //Llamamos a useNoteById y le pasamos el id de los params
  const { note, loading, errorMessage } = useNoteById(id);

  //Hacemos destructuring de note
  const { user_id, category_id, text, created_at } = note;
  return (
    <section>
      <h2>Notes page</h2>
    </section>
  );
};

export default VerNotas;
