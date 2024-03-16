import React from "react";
import FormularioProducto from "./FormularioProducto";
import { Container } from "react-bootstrap";

const AgregarProducto = ({editar}) => {
  return (
    <>
      <Container className="my-5">
        <h1 className="display-5">{editar? "Editar" : "Agregar"} Producto</h1>
        <hr />
        <FormularioProducto editar={editar}></FormularioProducto>
      </Container>
    </>
  );
};

export default AgregarProducto;
