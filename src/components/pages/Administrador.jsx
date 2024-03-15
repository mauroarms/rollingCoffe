import { Container } from "react-bootstrap";
import TablaAdministrador from "../admin/TablaAdministrador";
import AgregarProducto from "../admin/AgregarProducto";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { obtenerListaProducto } from "../../helpers/queries";
import Coffe_Logo from "../../assets/Coffee_Logo.png";

const Administrador = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    const respuesta = await obtenerListaProducto();
    if (respuesta.status === 200) {
      const productos = await respuesta.json();
      setProductos(productos);
      console.log(productos);
    } else {
      Swal.fire({
        icon: "error",
        title: "Error: no se pudo obtener los productos",
        text: "Intentelo nuevamente más tarde",
      });
    }
  };

  return (
    <>
      <Container>
        <div className="d-flex justify-content-center">
          <h1 className=" display-5 text-center my-3 me-3">Productos</h1>
          <img
            src={Coffe_Logo}
            alt="logoRollingCoffee"
            className="img-fluid"
            width={160}
          />
        </div>
        <hr />
        <AgregarProducto obtenerProductos={obtenerProductos} ></AgregarProducto>
        <TablaAdministrador
          obtenerProductos={obtenerProductos}
          productos={productos}
        ></TablaAdministrador>
      </Container>
    </>
  );
};

export default Administrador;
