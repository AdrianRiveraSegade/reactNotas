import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

//Creamos un contexto para hacer el token accesible a cualquier componente.
export const TokenContext = createContext();

//Componente que crea un estado para el token
export const TokenContextProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage("token", "");
  const [loggedUser, setLoggedUser] = useState({});

  const navigate = useNavigate();

  //useEffect que se ejecuta cada vez que el token cambia
  useEffect(() => {
    //Si el token no existe, cambiamos loggedUser a un object vacío y cortamos la funcion
    if (!token) {
      setLoggedUser({});
      return;
    }

    //Si el token existe recogemos la información del usuario y metemos los datos en loggedUser
    const fetchUserProfile = async () => {
      try {
        const tokenEncryptedPayload = token.split(".")[1];

        const tokenPayLoad = JSON.parse(atob(tokenEncryptedPayload));

        const res = await fetch(
          `http://localhost:4000/users/${tokenPayLoad.id}`,
          {
            headers: { Authorization: token },
          }
        );

        const body = await res.json();

        if (!res.ok) {
          throw new Error(body.message);
        }

        setLoggedUser({ ...body.data.user, id: tokenPayLoad.id });
      } catch (error) {
        //Si hubiese un error al loguear devolvemos al user al login
        console.error(error);
        setToken("");
        navigate("/login");
      }
    };

    fetchUserProfile();
  }, [token, navigate, setToken]);

  return (
    <TokenContext.Provider
      value={{ token, setToken, loggedUser, setLoggedUser }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export const useTokenContext = () => {
  return useContext(TokenContext);
};
