import React from "react";
import CardProducto from "./CardProducto";
import { obtenerListaProducto } from "../../helpers/queries";
import { useEffect, useState } from "react";

const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    const respuesta = await obtenerListaProducto();
    if (respuesta.status === 200) {
      const productos = await respuesta.json();
      setProductos(productos);
      console.log(productos);
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Intentelo nuevamente más tarde",
      });
    }
  };
  return (
    <section className="grillaProductos">
      {productos.map((producto) => (
        <CardProducto
          key={producto.id}
          imagen={producto.imagen}
          nombre={producto.nombre}
          categoria={producto.categoria}
          descripcionBreve={producto.descripcionBreve}
          precio={producto.precio}
        />
      ))}
    </section>
  );
};

export default Productos;
