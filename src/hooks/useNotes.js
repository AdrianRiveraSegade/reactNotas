import { useState, useEffect } from "react";
import { useTokenContext } from "../context/TokenContext";
import { useSearchParams } from "react-router-dom";

//este hook carga las notas de la API y devuelve las notas en un objeto
const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const { token } = useTokenContext();

  //El effect se ejecuta tras el render
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        //Al empezar el fetch pasamos loading a true
        setLoading(true);

        //Hacemos el fetch y recogemos la respuesta del servidor
        const res = await fetch(
          `http://localhost:4000/note?${searchParams.toString()}`,
          {
            headers: token ? { Authorization: token } : {},
          }
        );

        //Obtenemos el body de la respuesta
        const body = await res.json();

        //Si la respuesta no viene bien lanzamos un error
        if (!res.ok) {
          throw new Error(body.message);
        }

        //Cargamos los datos de las notas en el estado notas
        setNotes(body.data.notes);
      } catch (error) {
        //Si salta algun error metemos el mensaje de errorMessage
        setErrorMessage(error.message);
      } finally {
        //Al finalizar el fetch devolvemos loading a false
        setLoading(false);
      }
    };

    fetchNotes();
  }, [setSearchParams]);

  return {
    notes,
    errorMessage,
    loading,
    searchParams,
    setSearchParams,
  };
};

export default useNotes;
