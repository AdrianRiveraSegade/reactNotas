import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section>
      <h1>Error 404.</h1>
      <h2>Page not found.</h2>
      <Link to={"/"}>Go to Home Page</Link>
    </section>
  );
};

export default NotFoundPage;
