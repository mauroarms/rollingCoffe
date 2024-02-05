import { Container } from "react-bootstrap";
import Banner from "../Banner";
import Productos from "../Productos";

const Index = () => {
  return (
    <div>
      <Banner />

      <Container className="contenidoPrincipal">
        <Productos></Productos>
      </Container>
    </div>
  );
};

export default Index;
