const URI_Producto = import.meta.env.VITE_API_PRODUCTOS;

console.log(URI_Producto);

//POST (agregar a la API)

export const crearProductoAPI = async (producto) => {
  try {
    const respuesta = await fetch(URI_Producto, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });

    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//GET
export const obtenerListaProducto = async () => {
  try {
    const respuesta = await fetch(URI_Producto);
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
