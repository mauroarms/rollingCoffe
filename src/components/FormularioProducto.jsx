import { Form } from "react-bootstrap";

const FormularioProducto = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Nombre del producto" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>URL de la imagen</Form.Label>
        <Form.Control type="text" placeholder="www.ejemplo.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Descripción de su producto"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Categoria</Form.Label>
        <Form.Control type="text" placeholder="Tipo de Producto" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Precio</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>

      <Form.Check // prettier-ignore
        type="switch"
        id="checkStock"
        label="Disponible"
      />
    </Form>
  );
};

export default FormularioProducto;
