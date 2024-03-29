const URI_Producto = import.meta.env.VITE_API_PRODUCTOS;
const URL_Usuario = import.meta.env.VITE_API_USUARIO
//POST (agregar a la API)

export const crearProductoAPI = async (producto) => {

  try {
    const respuesta = await fetch(URI_Producto, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'x-token': JSON.parse(sessionStorage.getItem('usuarioRollingCoffe')).token
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

//DELETE

export const borrarProductoAPI = async (idProducto) => {
  try {
    const respuesta = await fetch(`${URI_Producto}/${idProducto}`, {
      method: "DELETE",
      headers: {
        'x-token': JSON.parse(sessionStorage.getItem('usuarioRollingCoffe')).token
      }
    });

    console.log(respuesta)
    return respuesta
  } catch (error) {
    console.log(error);
  }
};


//DELETE

export const obtenerProductoPorIdAPI = async (idProducto) => {
  try {
    const respuesta = await fetch(`${URI_Producto}/${idProducto}`);
    console.log(respuesta)
    return respuesta
  } catch (error) {
    console.log(error);
  }
};

//PUT

export const editarProductoAPI = async (producto, idProducto) =>{
  try{
    const respuesta = await fetch(`${URI_Producto}/${idProducto}`,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'x-token': JSON.parse(sessionStorage.getItem('usuarioRollingCoffe')).token
      },
      body: JSON.stringify(producto)
    });
    console.log(respuesta);
    return respuesta
  }catch(error){
    console.log(error)
  }
}

export const verificarInicioSesion = async (usuario) =>{
  try{
    const respuesta = await fetch(`${URL_Usuario}`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario)
    });
    console.log(respuesta);
    return respuesta
  }catch(error){
    console.log(error)
  }
}