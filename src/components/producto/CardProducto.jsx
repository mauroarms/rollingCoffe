import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../../css/cardProducto.css";
import { Link, NavLink } from "react-router-dom";

const CardProducto = ({ imagen }) => {
  return (
    <Card className="cardProducto">
      <Card.Img className="imgCard" variant="top" src={imagen} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Container>
          <Card.Text className="mb-0 text-secondary">
            Bebida Caliente
          </Card.Text>

          <Card.Title className="tituloProducto mb-3">Cappuchino</Card.Title>

          <Card.Text>
            <strong>
              Descripción: <br />
            </strong>
            Espresso Doble con espuma y chocolate
          </Card.Text>
        </Container>

        <Card.Footer className="footerProducto">
          <Card.Text className="my-auto">
            <strong>
              Precio: <br />
            </strong>
            $1200
          </Card.Text>
          <Button
            className="btnPrincipal ms-auto my-auto"
            variant="success"
            as={Link}
            to="/producto"
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
