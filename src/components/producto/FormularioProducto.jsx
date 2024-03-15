import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearProductoAPI } from "../../helpers/queries";
import Swal from 'sweetalert2';

const FormularioProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (producto) => {
    console.log(producto);

    //llamar funcion crear producto
    const respuesta = await crearProductoAPI(producto);
    console.log(respuesta);

    if(respuesta.status===201){
      Swal.fire({
        title: "Producto Agregado",
        text: `Se agregó ${producto.nombre} exitosamente`,
        icon: "success"
      });
      reset()
      
    }else{
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "El producto no fue agregado, intentelo nuevamente más tarde",
      });
    }

  };


  return (
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
        <Form.Text className="text-danger">{errors.nombre?.message}</Form.Text>
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
        <Form.Text className="text-danger">{errors.imagen?.message}</Form.Text>
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
              message: "Ingrese una descripcion breve con mínimo 5 caracteres",
            },
            maxLenght: {
              value: 200,
              message: "Ingrese una descripcion breve con máximo 200 caracteres",
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
              message: "Ingrese una descripcion amplia con mínimo 10 caracteres"
            },
            maxLength: {
              value: 1000,
              message: "Ingrese una descripcion amplia con máximo 1000 caracteres"
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
            required: "Seleccione una Categoría"
          })}
        >
          <option value="">Seleccione una Opción</option>
          <option value="Infusion">Infusion</option>
          <option value="Salado">Salado</option>
          <option value="Panificacion">Panificacion</option>
          <option value="Bebida Fria">Bebida Fría</option>
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
        <Form.Text className="text-danger">{errors.precio?.message}</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDisponible">
        <Form.Label>Disponible:</Form.Label>
        <Form.Check type="switch" id="checkStock" {...register("disponible")}/>
      </Form.Group>
      
      <Button
        type="submit"
        className="btnPrincipal ms-auto mt-5"
        variant="success"
      >
        Enviar
      </Button>
    </Form>
  );
};

export default FormularioProducto;
