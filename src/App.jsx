import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import Footer from "./components/common/Footer";
import BarraNavegacion from "./components/common/BarraNavegacion";
import Index from "./components/pages/Index";
import Error404 from "./components/pages/Error404";
import DetalleProducto from "./components/pages/DetalleProducto";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/pages/Login";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdmin from "./components/routes/RutasAdmin";


function App() {
  return (
    //Administrador de rutas.. contiene todas las rutas del programa

    <BrowserRouter>
      <BarraNavegacion />
      <section className="contenidoPrincipal">
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>

          <Route exact path="/" element={<Index />}></Route>

          <Route exact path="/admin/*" element={    
            <RutasProtegidas>
                <RutasAdmin></RutasAdmin>
            </RutasProtegidas>}>
          </Route>

          <Route
            exact
            path="/producto/:idProducto"
            element={<DetalleProducto />}
          ></Route>

          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </section>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
