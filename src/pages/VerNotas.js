import { Link, useParams } from "react-router-dom";
import Note from "../components/Note";
import { useTokenContext } from "../context/TokenContext";
import ErrorMessage from "../components/ErrorMessage";
import useNoteById from "../hooks/useNoteByID";
import { useNavigate } from "react-router-dom";
import "./VerNotas.css";

const VerNotas = () => {
  //Recogemos el id de los params de la url
  const { id } = useParams();

  const { token } = useTokenContext();

  const navigate = useNavigate();

  let deleteNote = async () => {
    await fetch(`http://localhost:4000/note/${id}`, {
      method: "DELETE",

      headers: token ? { Authorization: token } : {},
    });

    navigate("/list");
  };

  //Llamamos a useNoteById y le pasamos el id de los params
  const { note, loading, errorMessage } = useNoteById(id);

  //Hacemos destructuring de note
  const { user_id, title, text, image, created_at } = note;
  return (
    <section>
      <h2>Notes page</h2>
      {/* Si hay error, pintamos el componente ErrorMessage y un link para volver a home */}
      {errorMessage && (
        <>
          <ErrorMessage msg={errorMessage} />
          <Link to="/">Volver al inicio</Link>
        </>
      )}
      {loading}

      {/* Si el objeto note no está vacio, pintamos el componente Note con todos los datos*/}
      {Object.values(note).length > 0 && (
        <Note
          id={id}
          user_id={user_id}
          title={title}
          text={text}
          image={image}
          created_at={created_at}
        />
      )}

      <button onClick={() => deleteNote(id)}>Borrar nota</button>
    </section>
  );
};

//No deberian de verse todas las notas de la api...

export default VerNotas;
