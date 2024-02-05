import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../css/cardProducto.css"

const CardProducto = ({imagen}) => {
  return (
    <Card className="cardProducto">
      <Card.Img
        className="imgCard"
        variant="top"
        src={imagen}
      />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Container>
          <Card.Title className="tituloProducto">Cappuchino</Card.Title>
          <Card.Text>
            <strong>
              Descripción: <br />
            </strong>
            Espresso Doble con espuma y chocolate
          </Card.Text>
        </Container>
        
        <Card.Footer className="footerProducto">
          <Card.Text>
            <strong>
              Precio: <br />
            </strong>
            $1200
          </Card.Text>
          <Button className="btnProducto" variant="success">
            Ver
          </Button>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default CardProducto;
