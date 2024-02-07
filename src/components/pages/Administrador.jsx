import { Container, Button, Modal } from "react-bootstrap";
import TablaAdministrador from "../TablaAdministrador";
import { useState } from "react";
import FormularioProducto from "../FormularioProducto";

const Administrador = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="success">Agregar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Administrador;
