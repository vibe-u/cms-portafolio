import { BrowserRouter, Route, Routes } from "react-router";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Habilidades from "./pages/Habilidades";
import About from "./components/about/About";
import Header from "./components/header/Header";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="habilidades" element={<Habilidades />} />
      </Routes>
    </BrowserRouter>
    <>
      <Header/>
      <About/>
    </>

  )
}

export default App
