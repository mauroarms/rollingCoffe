import { Container, Button, Modal } from "react-bootstrap";
import TablaAdministrador from "../TablaAdministrador";
import { useEffect, useState } from "react";
import FormularioProducto from "../producto/FormularioProducto";
import { obtenerListaProducto } from "../../helpers/queries";

const Administrador = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    const respuesta = await obtenerListaProducto();
    if (respuesta.status === 200) {
      const recetas = respuesta.json();
      setProductos(recetas);
    }
  };

  return (
    <>
      <Container>
        <div className="d-flex justify-content-between mt-4">
          <h1 className=" display-5">Productos</h1>
          <Button
            className="btnPrincipal ms-auto my-auto"
            variant="success"
            onClick={handleShow}
          >
            Agregar
          </Button>
        </div>

        <hr />
        <TablaAdministrador></TablaAdministrador>
      </Container>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title>Agregar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormularioProducto></FormularioProducto>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Administrador;
