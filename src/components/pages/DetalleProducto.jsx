import { useEffect, useState } from "react";
import { Button, Container, Badge } from "react-bootstrap";
import "../../css/detalleProducto.css";
import { Link, useParams } from "react-router-dom";
import Productos from "../producto/Productos";
import { obtenerProductoPorIdAPI } from "../../helpers/queries";
import Coffe_Logo from "../../assets/Coffee_Logo.png"

const Producto = () => {
  const [nombre, setNombre] = useState();
  const [imagen, setImagen] = useState();
  const [descripcionBreve, setdescripcionBreve] = useState();
  const [descripcionAmplia, setdescripcionAmplia] = useState();
  const [categoria, setCategoria] = useState();
  const [precio, setPrecio] = useState();
  const [disponible, setDisponible] = useState();

  const { idProducto } = useParams();
  useEffect(() => {
    cargarProducto(idProducto);
  }, []);

  const cargarProducto = async (idBusqueda) => {
    console.log(idBusqueda);
    const respuesta = await obtenerProductoPorIdAPI(idBusqueda);
    if (respuesta.status === 200) {
      const productoEncontrado = await respuesta.json();

      setNombre(productoEncontrado.nombre);
      setImagen(productoEncontrado.imagen);
      setdescripcionAmplia(productoEncontrado.descripcionAmplia)
      setdescripcionBreve(productoEncontrado.descripcionBreve);
      setCategoria(productoEncontrado.categoria);
      setPrecio(productoEncontrado.precio);
      setDisponible(productoEncontrado.disponible);
    }
  };
  return (
    <>
      <section className="position-relative">
        <div className="backgroundProducto">
          <img src={imagen} alt="" />
        </div>

        <div className="contenidoProducto">
          <div className="image-section">
            <img src={imagen} alt="" />
          </div>
          <div className="content-section">
            <h6 className="mb-4">{categoria}</h6>
            <h1 className="display-5 mb-2">{nombre} </h1>

            <div className="mt-0 mb-4">
              <p>
                {" "}
                Precio: ${precio}{" "}
                {disponible ? (
                  <Badge bg="success" className="ms-2">
                    Disponible
                  </Badge>
                ) : (
                  <Badge bg="light" className="ms-2" text="dark">
                    No Dispobible
                  </Badge>
                )}{" "}
              </p>
            </div>
            <div>
              <p>{descripcionBreve}</p>
            </div>

            <div className="btnConteiner">
              <Button
                className="btnPrincipal"
                variant="success"
                as={Link}
                to="/carrito"
              >
                comprar
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Container className="mb-5">
          <h1 className="my-5 display-5">Sobre este producto</h1>
          <div className="contenidoAbout">
            <article className="descAmplia">
              {descripcionAmplia}
            </article>
            <article className="icono">
              <img src={Coffe_Logo} alt="logoRollingCoffee" className='img-fluid' width={600}/>
            </article>
          </div>
        </Container>
      </section>

      <Container className="mb-5">
        <h1 className="mt-5 display-5">También te podría gustar...</h1>
        <hr />
        <Productos ></Productos>
      </Container>
    </>
  );
};

export default Producto;
