import { useState } from "react";
import { useTokenContext } from "../context/TokenContext";
import { Navigate, useNavigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import uploadIcon from "../assets/img/uploadIcon.png";

const NewNoteForm = () => {
  //Usamos useNavigate para poder redirigir al usuario
  const navigate = useNavigate();

  //Traemos el token para usarlo en la petición al crear na nota
  const { token } = useTokenContext();

  //Estados para controlar los inputs del formulario
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState();

  //State para almacenar un posile error  mostrarlo por pantalla
  const [errorMessage, setErrorMessage] = useState("");

  // Si el usuario no est logeado redirigimos a la pagina principal.
  if (!token) return <Navigate to="/" />;

  return (
    <>
      <form
        className="newNoteForm"
        onSubmit={async (event) => {
          try {
            //Cancelamos el defalt del formulario
            event.preventDefault();

            //Creamos un nuevo formData para enviar en el body
            const formData = new FormData();

            //Metemos en el formData los datos introducidos por el usuario
            formData.set("title", title);
            formData.set("text", text);
            formData.set("image", image);

            //Hacemos una petición POST a la API  mandamos el formData en el body.
            const res = await fetch("http://localhost:4000/note", {
              method: "POST",
              headers: {
                Authorization: token,
              },
              body: formData,
            });

            //Accedemos al body de la respuesta
            const body = await res.json();

            //Si la respuesta viene mal lanzamos un error
            if (!res.ok) {
              throw new Error(body.message);
            } else {
              //Redireccionamos al usuario a la pagina principal
              navigate("/list");
            }
          } catch (error) {
            console.error(error);
            setErrorMessage(error.message);
          }
        }}
      >
        <label htmlFor="title">Titulo</label>
        <input
          id="title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="text">Text</label>
        <input
          id="text"
          required
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        />

        <label htmlFor="images">
          Sube imagenes:
          <img src={uploadIcon} alt="subir imagen para la nota" />
        </label>
        <input
          hidden
          id="images"
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button>Publicar</button>
      </form>

      {errorMessage && <ErrorMessage msg={errorMessage} />}
    </>
  );
};

export default NewNoteForm;
