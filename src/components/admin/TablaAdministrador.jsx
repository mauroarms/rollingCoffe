import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrash,
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { borrarProductoAPI } from "../../helpers/queries";
import Swal from "sweetalert2";

const TablaAdministrador = ({ obtenerProductos, productos }) => {
  const borrarProducto = (producto) => {
    Swal.fire({
      title: `Estás seguro que deseas borrar "${producto.nombre}"`,
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarProductoAPI(producto.id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: `Se borró "${producto.nombre}" de la lista de productos`,
            text: "Producto borrado exitosamente",
            icon: "success",
          });
          obtenerProductos();
        } else {
          Swal.fire({
            title: `No se pudo borrar "${producto.nombre}" de la lista de productos`,
            text: "Intente de nuevo más tarde",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr className="text-center">
          <th>Código</th>
          <th>Producto</th>
          <th>Precio</th>
          <th>URL de Imagen</th>
          <th>Categoria</th>
          <th>Disponibilidad</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => (
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
            <td className="text-center">
              <div className="d-flex justify-content-center mt-5">
                {producto.disponible ? (
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="display-6"
                    style={{ color: "#07461a" }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    className="display-6"
                    style={{ color: "#5e0003" }}
                  />
                )}
              </div>
            </td>
            <td>
              <div className="d-flex flex-column mt-3 align-items-center">
                {/* Editar fila */}
                <Button className="btnPrincipal">
                  <FontAwesomeIcon icon={faPenToSquare} />
                </Button>

                {/* Borrar fila */}
                <Button
                  className="mt-5 btnBorrar"
                  onClick={() => borrarProducto(producto)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TablaAdministrador;
