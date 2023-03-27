import "./Form.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  //Colocamos aquí los estados para los datos del formulario
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Usamos useNavigate para redirideccionar al usuario
  const navigate = useNavigate();

  return (
    <form
      className="registerForm"
      onSubmit={async (event) => {
        try {
          //Prevenir la acción por defecto del formulario cuando se envíe
          event.preventDefault();
          //Hacemos una petición al server enviando un JSON con los datos dados por el usuario
          const res = await fetch("http://localhost:4000/user", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nickname, email, password }),
          });

          //Accedemos al body de la respuesta
          const body = await res.json();

          //Si la respuesta viene mal, enviamos un error
          if (!res.ok) {
            throw new Error(body.message);
          }

          //Devolvemos al usuario al listado de notas
          navigate("/list");
        } catch (error) {
          //Si hay algún error lo sacamos por consola y lo mostramos como alerta al usuario
          console.error(error);
          //toast.error(error.message);
        }
      }}
    >
      <label htmlFor="nickname">Nombre de usuario</label>
      <input
        className="nickname"
        id="nickname"
        type="nickname"
        value={nickname}
        onChange={(event) => {
          setNickname(event.target.value);
        }}
        placeholder="Nombre de usuario"
      />
      <label htmlFor="email">Correo electronico</label>
      <input
        className="email"
        id="email"
        type="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        placeholder="example@mail.com"
      />
      <label htmlFor="password">Contraseña</label>
      <input
        className="password"
        id="password"
        type="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        placeholder="*******"
      />
      <button className="registerButton">Registrarse</button>
    </form>
  );
};

export default RegisterForm;
