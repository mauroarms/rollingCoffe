import { Container } from "react-bootstrap";
import Banner from "../Banner";
import Productos from "../producto/Productos";

const Index = () => {
  return (
    <div>
      <Banner />
      <Container>
        <h1 className="mt-4 display-5">Nuestros Productos</h1>
        <hr />
        <Productos></Productos>
      </Container>
    </div>
  );
};

export default Index;
