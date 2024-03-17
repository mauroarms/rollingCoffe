import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../../css/cardProducto.css";
import { Link} from "react-router-dom";

const CardProducto = ({id, imagen, nombre, categoria, descripcionBreve, precio }) => {

  const rutaAcceso = "/producto/" + id;
  return (
    <Card className="cardProducto">
      <Card.Img className="imgCard" variant="top" src={imagen} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Text className="mb-0 text-secondary text-decoration-underline">
            {categoria}
          </Card.Text>

          <Card.Title className="tituloProducto mb-3 mt-1">{nombre}</Card.Title>

          <Card.Text className="secDesc">
            {descripcionBreve}
          </Card.Text> 
        </div>

        <Card.Footer className="footerProducto">
          <Card.Text className="my-auto">
            <strong>
              Precio: <br />
            </strong>
            ${precio}
          </Card.Text>
          <Button
            className="btnPrincipal ms-auto my-auto"
            variant="success"
            as={Link}
            to={rutaAcceso}
          >
            Ver
          </Button>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

//   margin: auto 0 10px auto;

export default CardProducto;
