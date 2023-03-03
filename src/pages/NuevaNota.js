import "./NuevaNota.css";
import NewNoteForm from "../components/NewNoteForm";
import { useTokenContext } from "../context/TokenContext";
import { Navigate } from "react-router-dom";

const NuevaNotaPage = () => {
  const { token } = useTokenContext();

  //Si no hay token devolvemos a login
  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <section>
      <h2>Crea una nueva nota</h2>

      <NewNoteForm />
    </section>
  );
};

export default NuevaNotaPage;
