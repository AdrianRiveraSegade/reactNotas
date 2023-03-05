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

//Añadir en el css que el texto ocupe mas espacio en la pantalla, que sea mas comodo el ver el texto completo que se esta escribiendo

export default NuevaNotaPage;
