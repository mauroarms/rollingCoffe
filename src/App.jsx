import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";

import Footer from "./components/common/Footer";
import BarraNavegacion from "./components/common/BarraNavegacion";

import Index from "./components/pages/Index";
import Administrador from "./components/pages/Administrador";
import Error404 from "./components/pages/Error404";
import DetalleProducto from "./components/pages/DetalleProducto";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormularioProducto from "./components/admin/FormularioProducto";
import AgregarProducto from "./components/admin/AgregarProducto";
import Login from "./components/pages/Login";

function App() {
  return (
    //Administrador de rutas.. contiene todas las rutas del programa

    <BrowserRouter>
      <BarraNavegacion />
      <section className="contenidoPrincipal">
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>

          {/* //www.rollingCoffe.com/ */}
          <Route exact path="/" element={<Index />}></Route>

          {/* //www.rollingCoffe.com/admin */}
          <Route exact path="/admin" element={<Administrador />}></Route>

          {/* //www.rollingCoffe.com/admin */}
          <Route
            exact
            path="/admin/agregar"
            element={<AgregarProducto  editar={false}/>}
          ></Route>

          {/* //www.rollingCoffe.com/admin */}
          <Route
            exact
            path="/admin/editar/:idProducto"
            element={<AgregarProducto editar={true}></AgregarProducto>}
          ></Route>

          {/* //www.rollingCoffe.com/producto */}
          <Route exact path="/producto/:idProducto" element={<DetalleProducto />}></Route>

          {/* //www.rollingCoffe.com/ */}
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </section>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
