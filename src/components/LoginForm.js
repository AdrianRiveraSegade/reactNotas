import "./Form.css";
import { useState } from "react";
import { useTokenContext } from "../context/TokenContext";
import { Navigate, useNavigate } from "react-router-dom";

const LoginForm = () => {
  //Usamos useNav para redirigir al usuario segun necesitemos
  const navigate = useNavigate();

  //Llamamos la funcion setToken para poder modificar el estado del token cuando hagamos login
  const { token, login } = useTokenContext();

  //Estados para controlar los input del formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Si estamos logeados redirigimos a inicio.
  if (token) return <Navigate to="/" />;

  // Funcion que maneja el evento submit del formulario.
  const handleLogin = async (event) => {
    try {
      // Cambiamos loading a true para sehabilitar el botn del formulario.
      setLoading(true);

      //Cancelamos el default del formulario
      event.preventDefault();

      //Hacemos una peticion POST a la API  enviamos en body un JSON con los datos para el login
      const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      //Accedemos al body
      const body = await res.json();

      //Si la respuesta viene mal lanzamos un error
      if (!res.ok) {
        alert(body.message);
      } else {
        //Cambiamos el estado y metemos el token recogido en la API
        login(body.data);

        //Redireccionamos al usuario al inicio
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    } finally {
      // Cambiamos el valor de loading a false para volver a habilitar el botn del formulario.
      setLoading(false);
    }
  };

  return (
    <form className="loginForm" onSubmit={handleLogin}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          className="email"
          id="email"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          placeholder="mail@gmail.com"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          className="password"
          id="password"
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          placeholder="******"
        />
      </div>

      <button className="loginButton" disabled={loading}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
