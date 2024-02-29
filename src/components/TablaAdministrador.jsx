import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { obtenerListaProducto } from "../helpers/queries";
import { useEffect, useState } from "react";

const TablaAdministrador = () => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    const respuesta = await obtenerListaProducto();
    if (respuesta.status === 200) {
      const productos = await respuesta.json();
      setProductos(productos);
      console.log(productos)
    }else{
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Intentelo nuevamente más tarde",
      });
    }
  };

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th></th>
          <th>Producto</th>
          <th>Precio</th>
          <th>URL de Imagen</th>
          <th>Categoria</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => 
          <tr key={producto.id}>
            <td>{producto.id}</td>
            <td>{producto.nombre}</td>
            <td>${producto.precio}</td>
            <td className="d-flex">
              <img
                src={producto.imagen}
                alt=""
                width={230}
                height={150}
                className="m-auto"
              />
            </td>
            <td>{producto.categoria}</td>
            <td>
              <div className="d-flex flex-column mt-3 align-items-center">
                <Button variant="warning">
                  <FontAwesomeIcon icon={faPenToSquare} />
                </Button>
                <Button variant="danger" className="mt-5">
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </div>
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default TablaAdministrador;
