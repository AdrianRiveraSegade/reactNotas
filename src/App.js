import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Registro from "./pages/Register";
import Login from "./pages/Login";
import NuevaNota from "./pages/NuevaNota";
import Config from "./pages/Config";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notas" element={<NuevaNota />} />
        <Route path="/config" element={<Config />} />
      </Routes>

      <Footer />
    </main>
  );
}

export default App;
