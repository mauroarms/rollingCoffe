import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import "../../css/detalleProducto.css";
import { Link, useParams } from "react-router-dom";
import Productos from "../producto/Productos";
import { obtenerProductoPorIdAPI } from "../../helpers/queries";

const Producto = () => {

  const [nombre, setNombre] = useState();
  const [imagen, setImagen] = useState();
  const [descripcionAmplia, setdescripcionAmplia] = useState();
  const [categoria, setCategoria] = useState();
  const [precio, setPrecio] = useState();
  const [disponible, setDisponible] = useState();

  const {idProducto} = useParams();
  useEffect(()=>{
    
    cargarProducto(idProducto);
    
  },[])

  const cargarProducto = async (idBusqueda) =>{
    console.log(idBusqueda)
    const respuesta = await obtenerProductoPorIdAPI(idBusqueda)
    if(respuesta.status === 200){
      const productoEncontrado = await respuesta.json();

      setNombre(productoEncontrado.nombre);
      setImagen(productoEncontrado.imagen);

      setdescripcionAmplia(productoEncontrado.descripcionAmplia);
      setCategoria(productoEncontrado.categoria);
      setPrecio(productoEncontrado.precio);
      setDisponible(productoEncontrado.disponible);

    }
  } 
  return (
    <>
      <div className="position-relative">
        <div className="backgroundProducto">
          <img
            src={imagen}
            alt=""
          />
        </div>

        <div className="contenidoProducto">
          <div className="image-section">
            <img
              src={imagen}
              alt=""
            />
          </div>
          <div className="content-section">
            <h6 className="mb-4">
            {categoria}
            </h6>
            <h1 className="display-6">{nombre}</h1>

            <div className="mt-0 mb-4">
                
                <p> Precio: ${precio}</p>              
            </div>
            <div>
                <p>
                {descripcionAmplia}
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
      <Container className="mb-5">
        <h1 className="mt-4 display-5">También te podría gustar...</h1>
        <hr />
        <Productos></Productos>
      </Container>
    </>
  );
};

export default Producto;
