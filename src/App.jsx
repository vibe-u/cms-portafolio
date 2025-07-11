import { BrowserRouter, Route, Routes } from "react-router";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Habilidades from "./pages/Habilidades";
import Contacto from "./pages/Contacto";
import { useEffect } from "react";
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="habilidades" element={<Habilidades />} />
        <Route path="contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
