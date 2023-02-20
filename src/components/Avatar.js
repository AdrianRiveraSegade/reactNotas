import defaultAvatar from "../assets/defaultAvatar.jpg";

//Cambia la imagen de avatar del usuario o pone el avatar por defecto.
const Avatar = ({ avatar, username }) => {
  return (
    <img
      src={avatar ? "http://localhost:4000/${avatar}" : defaultAvatar}
      alt={"${username} avatar"}
    />
  );
};

export default Avatar;
