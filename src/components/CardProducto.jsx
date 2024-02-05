import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardProducto = () => {
  return (
    <Card className="cardProducto">
      <Card.Img
        variant="top"
        src="https://tapcom-live.ams3.cdn.digitaloceanspaces.com/media/cheat-menu-saudi/products/cappuchino-Cappuccino_-_12Oz.jpg"
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
