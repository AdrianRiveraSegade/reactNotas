import "./NoteList.css";
import { Link } from "react-router-dom";
import Note from "./Note";

const NoteList = ({ notes }) => {
  return (
    <ul className="noteList">
      {notes?.map((note) => {
        const { id, user_id, text, created_at, title, image } = note;

        return (
          <li className="lista" key={id}>
            <Link to={`/note/${id}`}>
              <Note
                id={id}
                user_id={user_id}
                text={text}
                created_at={created_at}
                title={title}
                image={image}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

//Porque se muestran todas sin importar que usuario las este pidiendo?? Tenemos que implementar alguna clase de admin
//con mas privilegios o esta mal el codigo en alguna parte?? Cuando david lo vio dijo que estaba bien...

export default NoteList;
