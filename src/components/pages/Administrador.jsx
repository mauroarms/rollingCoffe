import { Container } from "react-bootstrap";
import TablaAdministrador from "../TablaAdministrador";

const Administrador = () => {
  return (
    <Container>
      <h1 className="mt-4 display-5">Nuestros Productos</h1>
      <hr />
      <TablaAdministrador></TablaAdministrador>
    </Container>
  );
};

export default Administrador;
