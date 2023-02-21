import NotePhoto from "./NotePhotos";
import { useTokenContext } from "../context/TokenContext";
import { useState } from "react";

const Entry = ({ id, user_id, text, image, category_id, created_at }) => {
  const { token, loggedUser } = useTokenContext();
  const [showModal, setShowModal] = useState(false);

  return (
    <article className="entry">
      <header>
        <h3>[title, category_id]</h3>
      </header>

      <p>{text}</p>

      {image?.length > 0 && <NotePhoto photos={image} title={category_id} />}

      <footer>
        <p className="noteDateAuthor">
          Publicado por <span> {user_id}</span>
        </p>
      </footer>
    </article>
  );
};

export default Entry;
