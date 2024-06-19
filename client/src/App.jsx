import InicioSesion from "./componentes/InicioSesion";
import Navegacion from "./componentes/Navegacion";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from "./componentes/Footer";
import Home from "./componentes/Home";
import "./App.css";
import "./assets/CSS/header.css";
import Empleado from "./componentes/Empleado";
function App() {
    
  return (
    <>
    <div className="app-container">
      <BrowserRouter>
        <Navegacion></Navegacion>
        <main className="main-content">
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/login" element={<InicioSesion></InicioSesion>} />
          <Route path="/empleado" element={<Empleado></Empleado>}></Route>
        </Routes>
        </main>
      </BrowserRouter>
      <Footer></Footer>
      </div>
    </>
  );
}

export default App;
