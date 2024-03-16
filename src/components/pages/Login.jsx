import React from "react";
import "../../css/login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
  return (
    <>
      <div className="contenedorLogin">
        <img
          src="https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/Coffee1-banner.jpg?w=1155&h=1528"
          alt="imgFondoLogin"
          className="imgFondo"
        />
        <Form className="w-25 cardLogin">
          <h1 className="display-6 mb-4">Iniciar Sesión</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Usuario o Email</Form.Label>
            <Form.Control type="email" placeholder="Ingrese su usuario o email" />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingrese su contraseña" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Recordarme" />
          </Form.Group>
          <Button  type="submit" className="btnPrincipal">
            Ingresar
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Login;
