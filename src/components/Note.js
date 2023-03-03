import "./Note.css";
import NotePhoto from "./NotePhotos";
import getTimeAgo from "../utils/getTimeAgo";

const Note = ({ id, user_id, text, image, title, created_at }) => {
  const deleteNote = async (id) => {
    return false;
  };

  // if (id) console.log(id, user_id, text, image, title, created_at);

  return (
    <article className="entry">
      {id && (
        <>
          <header>
            <h3>{title || "Sin titulo"}</h3>
          </header>

          <p>{text}</p>

          {image && <NotePhoto photos={image} title={title} />}

          <footer>
            <p className="noteDateAuthor">
              Publicado por <span>usuario {user_id}</span>
              {getTimeAgo(new Date(created_at))}
            </p>
            <button onClick={() => deleteNote(id)}>Borrar nota WIP</button>
          </footer>
        </>
      )}
    </article>
  );
};

export default Note;
