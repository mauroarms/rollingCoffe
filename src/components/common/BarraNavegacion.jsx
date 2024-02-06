import {Nav, Navbar, Container} from 'react-bootstrap';
import Coffe_Logo from "../../assets/Coffee_Logo.png"
import { Link, NavLink } from 'react-router-dom';


const BarraNavegacion = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
            <img src={Coffe_Logo} alt="logoRollingCoffee" className='img-fluid' width={160}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end to='/login' className='nav-link'>Iniciar Sesión</NavLink>
            <NavLink end to='/registro' className='nav-link'>Registrarme</NavLink>
            <NavLink end to='/admin' className='nav-link'>Administrador</NavLink>
            <NavLink end to='/about' className='nav-link'>Sobre Mí</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BarraNavegacion;
