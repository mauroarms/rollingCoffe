import React from "react";
import FormularioProducto from "./FormularioProducto";
import { Container } from "react-bootstrap";

const AgregarProducto = ({ obtenerProductos }) => {
  return (
    <>
      <Container className="mt-4">
        <h1 className="display-5">Agregar Producto</h1>
        <hr />
        <FormularioProducto></FormularioProducto>
      </Container>
    </>
  );
};

export default AgregarProducto;
