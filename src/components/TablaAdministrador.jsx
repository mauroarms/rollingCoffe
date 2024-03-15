import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { borrarProductoAPI, obtenerListaProducto } from "../helpers/queries";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

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

  const borrarProducto = (producto) => {
    Swal.fire({
      title: `Estás seguro que deseas borrar "${producto.nombre}"` ,
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarProductoAPI(producto.id)
        if(respuesta.status === 200){
          Swal.fire({
            title: `Se borró "${producto.nombre}" de la lista de productos`,
            text: "Producto borrado exitosamente",
            icon: "success"
          });
        }else{
          Swal.fire({
            title: `No se pudo borrar "${producto.nombre}" de la lista de productos`,
            text: "Intente de nuevo más tarde",
            icon: "error"
          });
        }

      }
    });
  };

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Código</th>
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
                {/* Editar fila */}
                <Button variant="warning">
                  <FontAwesomeIcon icon={faPenToSquare} />
                </Button>

                {/* Borrar fila */}
                <Button variant="danger" className="mt-5" onClick={() => borrarProducto(producto)}>
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
