import { Route, Routes } from "react-router";
import Administrador from "../pages/Administrador";
import FormularioProducto from "../admin/FormularioProducto";

const RutasAdmin = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Administrador />}></Route>

        {/* //www.rollingCoffe.com/admin */}
        <Route
          exact
          path="/agregar"
          element={<FormularioProducto editar={false} />}
        ></Route>

        {/* //www.rollingCoffe.com/admin */}
        <Route
          exact
          path="/editar/:idProducto"
          element={<FormularioProducto editar={true}></FormularioProducto>}
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdmin;
