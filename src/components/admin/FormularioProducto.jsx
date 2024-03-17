import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
  crearProductoAPI,
  editarProductoAPI,
  obtenerProductoPorIdAPI,
} from "../../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const FormularioProducto = ({ editar }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const { idProducto } = useParams();
  const history = useNavigate();

  useEffect(() => {
    if (editar) {
      cargarProducto(idProducto);
    }
  }, []);

  const cargarProducto = async (idBusqueda) => {
    console.log(idBusqueda);
    const respuesta = await obtenerProductoPorIdAPI(idBusqueda);
    if (respuesta.status === 200) {
      const productoEncontrado = await respuesta.json();
      setValue("nombre", productoEncontrado.nombre);
      setValue("imagen", productoEncontrado.imagen);
      setValue("descripcionBreve", productoEncontrado.descripcionBreve);
      setValue("descripcionAmplia", productoEncontrado.descripcionAmplia);
      setValue("categoria", productoEncontrado.categoria);
      setValue("precio", productoEncontrado.precio);
      setValue("disponible", productoEncontrado.disponible);
    }
  };

  const onSubmit = async (producto) => {
    if (editar) {
      const respuesta = await editarProductoAPI(producto, idProducto);
      if (respuesta.status === 200) {
        Swal.fire({
          title: `${producto.nombre} fue modificado correctamente`,
          text: "¿Qué desea realizar?",
          icon: "success",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: `Seguir modificando ${producto.nombre}`,
          cancelButtonText: "Volver a Administración",
        }).then(async (result) => {
          if (result.isConfirmed) {
          } else {
            history("/admin");
          }
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "El producto no fue agregado, intentelo nuevamente más tarde",
        });
      }
      console.log("Estamos editando");
    } else {
      console.log(producto);

      //llamar funcion crear producto
      const respuesta = await crearProductoAPI(producto);
      console.log(respuesta);

      if (respuesta.status === 201) {
        Swal.fire({
          title: `${producto.nombre} fue agregado correctamente`,
          text: "¿Qué desea realizar?",
          icon: "success",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Agregar otro Producto",
          cancelButtonText: "Volver a Administración",
        }).then(async (result) => {
          if (result.isConfirmed) {
            reset();
          } else {
            history("/admin");
          }
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "El producto no fue agregado, intentelo nuevamente más tarde",
        });
      }
    }
  };

  return (
    <Container className="my-5">
      <h1 className="display-5">{editar ? "Editar" : "Agregar"} Producto</h1>
      <hr />

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Label>Nombre:</Form.Label>

          <Form.Control
            type="text"
            placeholder="Nombre del producto"
            {...register("nombre", {
              required: "Ingrese un nombre",
              minLength: {
                value: 2,
                message: "Ingrese un nombre con mínimo 2 caracteres",
              },
              maxLength: {
                value: 30,
                message: "Ingrese un nombre con máximo 30 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombre?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>URL de la imagen:</Form.Label>
          <Form.Control
            type="text"
            placeholder="www.ejemplo.com"
            {...register("imagen", {
              required: "Ingrese una imagen",
              pattern: {
                value: /(http)=?s?:?(\/\/[^"'"]*\.(?:png|jpg|jpeg|gif|svg))/i,
                message: "Ingrese una url de una imagen png, jpg, gif, svg",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescBreve">
          <Form.Label>Descripción breve:</Form.Label>
          <Form.Control
            as="textarea"
            rows={1}
            placeholder="Descripción breve de su producto"
            {...register("descripcionBreve", {
              required: "Ingrese una descripción breve del producto",
              minLength: {
                value: 5,
                message:
                  "Ingrese una descripcion breve con mínimo 5 caracteres",
              },
              maxLength: {
                value: 200,
                message:
                  "Ingrese una descripcion breve con máximo 200 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcionBreve?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescAmplia">
          <Form.Label>Descripción amplia:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Descripción amplia de su producto"
            {...register("descripcionAmplia", {
              required: "Ingrese una descripción",
              minLength: {
                value: 10,
                message:
                  "Ingrese una descripcion amplia con mínimo 10 caracteres",
              },
              maxLength: {
                value: 1000,
                message: `Ingrese una descripcion amplia con máximo 1000 caracteres `,
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcionAmplia?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCategoria">
          <Form.Label>Categoria:</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "Seleccione una Categoría",
            })}
          >
            <option value="">Seleccione una Opción</option>
            <option value="Infusión">Infusión</option>
            <option value="Salado">Salado</option>
            <option value="Panificación">Panificación</option>
            <option value="Bebida Fría">Bebida Fría</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio:</Form.Label>
          <Form.Control
            type="number"
            {...register("precio", {
              required: "Ingrese un precio",
              min: {
                value: 100,
                message: "Ingrese cómo mínimo $100",
              },
              max: {
                value: 1000000,
                message: "Ingrese cómo máximo $1000000",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDisponible">
          <Form.Label>Disponible:</Form.Label>
          <Form.Check
            type="switch"
            id="checkStock"
            {...register("disponible")}
          />
        </Form.Group>

        <Button
          type="submit"
          className="btnPrincipal ms-auto mt-5"
          variant="success"
        >
          {editar ? "Editar" : "Guardar"}
        </Button>
      </Form>
    </Container>
  );
};

export default FormularioProducto;
