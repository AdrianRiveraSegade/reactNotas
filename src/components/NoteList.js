import { Link } from "react-router-dom";
import Note from "./Note";

const NoteList = ({ notes }) => {
  return (
    <ul className="noteList">
      {notes.map((note) => {
        const { id, user_id, text, created_at, category_id } = note;

        return (
          <li key={id}>
            <Link to={`/note/${id}`}>
              <Note
                id={id}
                user_id={user_id}
                text={text}
                created_at={created_at}
                category_id={category_id}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NoteList;
