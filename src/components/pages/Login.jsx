import React from "react";
import "../../css/login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { iniciarSesion } from "../../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navegacion = useNavigate()

  const onSubmit = (usuario) =>{
      console.log(usuario)
      const inicio = iniciarSesion(usuario)

      if(inicio){
        console.log("Usuario ingresado")
        reset();
        Swal.fire({
          icon: "success",
          title: "Inicio de Sesión Exitoso",
          text: `Bienvenido ${usuario.email}`,
        });
        navegacion("/admin")
      }else{ 
        Swal.fire({
          icon: "error",
          title: "Error",
          text: `Email o Contraseña incorrecto`,
        });
      }
      
  }

  return (

    <>
      <div className="contenedorLogin">
        <img
          src="https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/Coffee1-banner.jpg?w=1155&h=1528"
          alt="imgFondoLogin"
          className="imgFondo"
        />
        <Form className="w-25 cardLogin" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="display-6 mb-4">Iniciar Sesión</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingrese email"
              {...register("email", {
                required: "Ingrese su email",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Email o contraseña invalido",
                },
              })}
            />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingrese su contraseña"
              {...register("password", {
                required: "Ingrese su contraseña",
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d).{8,}$/,
                  message: "Email o contraseña invalido",
                },
              })}
            />

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Recordarme" />
          </Form.Group>
          <Button type="submit" className="btnPrincipal">
            Ingresar
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Login;
