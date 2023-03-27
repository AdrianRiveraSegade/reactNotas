import "./Note.css";
//import NotePhoto from "./NotePhotos";
//Importamos el notePhoto, pero aunque lo "implementemos" no funciona, porque?
import getTimeAgo from "../utils/getTimeAgo";

const Note = ({ id, user_id, text, image, title, created_at }) => {
  return (
    <article className="entry">
      {id && (
        <>
          <header>
            <h3>{title || "Sin titulo"}</h3>
          </header>

          <p>{text}</p>

          {image ? (
            <img src={`${process.env.REACT_APP_BACKEND}/${image}`} alt={text} />
          ) : null}

          <footer>
            <p className="noteDateAuthor">Publicada el {created_at}</p>
          </footer>
        </>
      )}
    </article>
  );
};

export default Note;
