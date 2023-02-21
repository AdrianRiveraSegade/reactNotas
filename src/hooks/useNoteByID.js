import { useState, useEffect } from "react";
import { useTokenContext } from "../context/TokenContext";

const useNoteById = (id) => {
  const [note, setNote] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { token } = useTokenContext();

  useEffect(() => {
    const fetchNoteById = async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:4000/note/${id}`, {
          headers: token ? { Authorization: token } : {},
        });

        const body = await res.json();

        if (!res.ok) {
          throw new Error(body.message);
        }

        setNote(body.data.note);
      } catch (error) {
        console.error(error);
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchNoteById();
  }, [id]);

  return { note, loading, errorMessage };
};

export default useNoteById;
