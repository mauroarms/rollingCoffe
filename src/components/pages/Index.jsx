import { Container } from "react-bootstrap";
import Productos from "../producto/Productos";

const Index = () => {
  return (
    <div>
      <img src="https://wallpapers.com/images/featured/coffee-shop-background-02x9a49rdcr5c18i.jpg" alt="" className="banner"/>
      <Container>
        <h1 className="mt-4 display-5">Nuestros Productos</h1>
        <hr />
        <Productos></Productos>
      </Container>
    </div>
  );
};

export default Index;
