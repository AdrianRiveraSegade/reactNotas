import { useState, useRef } from "react";
import { useTokenContext } from "../context/TokenContext";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import uploadIcon from "../assets/img/uploadIcon.png";

const NewNoteForm = () => {
  //Estados para controlar los inputs del formulario
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  //State para almacenar un posile error  mostrarlo por pantalla
  const [errorMessage, setErrorMessage] = useState("");

  //Ref que vinculamos al input de ficheros
  const imageInputRef = useRef();

  //Traemos el token para usarlo en la petición al crear na nota
  const { token } = useTokenContext();

  //Usamos useNavigate para poder redirigir al usuario
  const navigate = useNavigate();

  return (
    <>
      <form
        className="newNoteForm"
        onSubmit={async (event) => {
          try {
            //Cancelamos el defalt del formulario
            event.preventDefault();

            //Accedemos al input de ficheros que referenciamos  traemos las imagenes subidas
            const images = imageInputRef.current.files;

            //Creamos un nuevo formData para enviar en el body
            const formData = new formData();

            //Metemos en el formData los datos introducidos por el usuario
            formData.set("title", title);
            formData.set("text", text);

            //Si ha subido una imagen hacemos un bucle que la aade al formData
            if (images.length) {
              for (const image of images) {
                formData.set(image.name, image);
              }
            }

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
            }

            //Redireccionamos al usuario a la pagina principal
            navigate("/");
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
          onChange={(event) => {
            setTitle(event.target.value);
          }}
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
          ref={imageInputRef}
        />

        <button>Publicar</button>
      </form>

      {errorMessage && <ErrorMessage msg={errorMessage} />}
    </>
  );
};

export default NewNoteForm;
