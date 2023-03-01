import { createContext, useContext, useEffect, useState } from "react";

//Creamos un contexto para hacer el token accesible a cualquier componente.
export const TokenContext = createContext();

//Componente que crea un estado para el token
export const TokenContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loggedUser, setLoggedUser] = useState(null);

  // Obtenemos los datos del usuario si hay token de manera automatica.
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await fetch(`http://localhost:4000/user`, {
          headers: { Authorization: token },
        });

        const body = await res.json();

        if (!res.ok) {
          throw new Error(body.message);
        } else {
          setLoggedUser(body.data);
        }
      } catch (error) {
        // Si hubiese un error al loguear devolvemos al user al login.
        console.error(error);
        setToken("");
      }
    };

    // Si hay tpken buscamos los datos del usuario.
    if (token) fetchUserProfile();
  }, [token]);

  // Funcion de login.
  const login = (newToken) => {
    // Guardamos el token en el localStorage.
    localStorage.setItem("token", newToken);

    // Guardamos el token en la constante.
    setToken(newToken);
  };

  // Funcion de logout.
  const logout = () => {
    // Eliminamos el token en el localStorage.
    localStorage.removeItem("token");

    // Establecemos el token de la constante a null.
    setToken(null);
  };

  return (
    <TokenContext.Provider
      value={{ token, login, logout, loggedUser, setLoggedUser }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export const useTokenContext = () => {
  return useContext(TokenContext);
};
