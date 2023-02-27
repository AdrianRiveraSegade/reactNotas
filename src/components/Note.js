import NotePhoto from "./NotePhotos";
import getTimeAgo from "../utils/getTimeAgo";

const Note = ({ id, user_id, text, image, title, created_at }) => {
  return (
    <article className="entry">
      <header>
        <h3>[title]</h3>
      </header>

      <p>{text}</p>

      {image?.length > 0 && <NotePhoto photos={image} title={title} />}

      <footer>
        <p className="noteDateAuthor">
          Publicado por <span>usuario {user_id}</span>
          {getTimeAgo(new Date(created_at))}
        </p>
      </footer>
    </article>
  );
};

export default Note;
