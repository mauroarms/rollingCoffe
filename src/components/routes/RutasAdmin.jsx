import { Route, Routes } from "react-router";
import Administrador from "../pages/Administrador";
import AgregarProducto from "../admin/AgregarProducto";

const RutasAdmin = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Administrador />}></Route>

        {/* //www.rollingCoffe.com/admin */}
        <Route
          exact
          path="/agregar"
          element={<AgregarProducto editar={false} />}
        ></Route>

        {/* //www.rollingCoffe.com/admin */}
        <Route
          exact
          path="/editar/:idProducto"
          element={<AgregarProducto editar={true}></AgregarProducto>}
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdmin;
