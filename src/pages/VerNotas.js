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
    </section>
  );
};

export default VerNotas;
