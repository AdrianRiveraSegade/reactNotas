import { useEffect, useState } from "react";

//Este hook va a crear un estado que se guarda automáticamnte en la key
const useLocalStorage = (key, defaultValue) => {
  //Declaramos el valor inicial del estado
  const initValue = JSON.parse(localStorage.getItem(key)) || defaultValue;

  //Creamos el estado dándole el initValue anterior
  const [data, setData] = useState(initValue);

  //Cada vez que cambia el data se eecuta el effect  se guarda el estado en localStorage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data, key]);

  //hacemos un return con un array que contiene el estado a guardar en localStorage y la funcion para cambiarlo
  return [data, setData];
};

export default useLocalStorage;
