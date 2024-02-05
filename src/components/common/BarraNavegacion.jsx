import {Nav, Navbar, Container} from 'react-bootstrap';
import Coffe_Logo from "../../assets/Coffee_Logo.png"

const BarraNavegacion = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <img src={Coffe_Logo} alt="logoRollingCoffee" className='img-fluid' width={160}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#link">Iniciar Sesión</Nav.Link>
            <Nav.Link href="#link">Registrarme</Nav.Link>
            <Nav.Link href="#link">Administrador</Nav.Link>
            <Nav.Link href="#link">Sobre Mí</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BarraNavegacion;
