import { Link } from "react-router-dom";
import Note from "./Note";

const NoteList = ({ notes }) => {
  return (
    <ul className="noteList">
      {notes.map((note) => {
        const { id, user_id, text, created_at, title } = note;

        return (
          <li key={id}>
            <Link to={`/note/${id}`}>
              <Note
                id={id}
                user_id={user_id}
                text={text}
                created_at={created_at}
                title={title}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NoteList;
