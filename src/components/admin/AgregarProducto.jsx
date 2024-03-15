import React from "react";
import { useState } from "react";
import FormularioProducto from "./FormularioProducto";
import { Button, Modal } from "react-bootstrap";

const AgregarProducto = ({ obtenerProductos }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="d-flex justify-content-center">
        <Button className="btnPrincipal my-4 " onClick={handleShow}>
          Agregar
        </Button>
      </div>

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
          <FormularioProducto
            obtenerProductos={obtenerProductos}
          ></FormularioProducto>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AgregarProducto;
