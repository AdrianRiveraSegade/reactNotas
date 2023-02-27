import { useState } from "react";
import { useTokenContext } from "../context/TokenContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  //Estados para controlar los input del formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Llamamos la funcion setToken para poder modificar el estado del token cuando hagamos login
  const { setToken } = useTokenContext();

  //Usamos useNav para redirigir al usuario segun necesitemos
  const navigate = useNavigate();

  return (
    <form
      className="loginForm"
      onSubmit={async (event) => {
        try {
          //Cancelamos el default del formulario
          event.preventDefault();

          //Hacemos una peticion POST a la API  enviamos en body un JSON con los datos para el login
          const res = await fetch("http:localhost:4000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          });

          //Accedemos al body
          const body = await res.json();

          //Si la respuesta viene mal lanzamos un error
          if (!res.ok) {
            throw new Error(body.message);
          }

          //Cambiamos el estado y metemos el token recogido en la API
          setToken(body.data.token);

          //Redireccionamos al usuario al inicio
          navigate("/");
        } catch (error) {
          console.error(error);
        }
      }}
    >
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        placeholder="mail@gmail.com"
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        placeholder="******"
      />

      <button>Login</button>
    </form>
  );
};

export default LoginForm;
