import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const FormularioProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (respuesta) => {
    console.log(respuesta);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
            }
          })}
        />
        <Form.Text className="text-danger">{errors.nombre?.message}</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>URL de la imagen:</Form.Label>
        <Form.Control type="text" placeholder="www.ejemplo.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripción:</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Descripción de su producto"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Categoria:</Form.Label>
        <Form.Control type="text" placeholder="Tipo de Producto" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Precio:</Form.Label>
        <Form.Control
          type="number"
          {...register("precio", {
            required: "Ingrese un precio",
          })}
        />
        <Form.Text className="text-danger">{errors.precio?.message}</Form.Text>
      </Form.Group>

      <Form.Check type="switch" id="checkStock" label="Disponible" />
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
