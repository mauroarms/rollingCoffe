import React from "react";
import { Button, Container } from "react-bootstrap";
import "../../css/detalleProducto.css";
import { Link } from "react-router-dom";
import Productos from "../Productos";

const Producto = () => {
  return (
    <>
      <div className="position-relative">
        <div className="backgroundProducto">
          <img
            src="https://www.elglobo.com.mx/cdn/shop/products/americano-3_800x.jpg?v=1618806696"
            alt=""
          />
        </div>

        <div className="contenidoProducto">
          <div className="image-section">
            <img
              src="https://www.elglobo.com.mx/cdn/shop/products/americano-3_800x.jpg?v=1618806696"
              alt=""
            />
          </div>
          <div className="content-section">
            <h6 className="mb-4">
            Bebida caliente
            </h6>
            <h1 className="display-6">Café Americano</h1>

            <div className="mt-0 mb-4">
                <p>Precio: $1200</p>              
            </div>
            <div>
                <strong>Descripción:</strong>
                <p>
                El café americano es una bebida hecha con agua
                caliente y café expreso, proporcionando un sabor suave y
                agradable.
                </p>
            </div>



            <div className="btnConteiner">
              <Button
                className="btnPrincipal"
                variant="success"
                as={Link}
                to="/"
              >
                Volver
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <h1 className="mt-4 display-5">Nuestros Productos</h1>
        <hr />
        <Productos></Productos>
      </Container>
    </>
  );
};

export default Producto;
