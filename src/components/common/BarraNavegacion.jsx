import { Nav, Navbar, Container, Button } from "react-bootstrap";
import Coffe_Logo from "../../assets/Coffee_Logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const BarraNavegacion = ({ usuarioLogueado , setUsuarioLogueado}) => {

  const navigate = useNavigate();

  const logout = () => {
    Swal.fire({
      title: `Cerrar Sesión`,
      text: "¿Está seguro que desea salir de su cuenta?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Salir`,
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        sessionStorage.removeItem("loginRollingCoffe")
        setUsuarioLogueado("")
        navigate("/")
      }
    });

  }

  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={Coffe_Logo}
            alt="logoRollingCoffee"
            className="img-fluid"
            width={160}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            {usuarioLogueado === "" ? (
              <>
                <NavLink end to="/login" className="nav-link">
                  Iniciar Sesión
                </NavLink>
                <NavLink end to="/register" className="nav-link">
                  Registrarme
                </NavLink>
              </>
            ) : (
              <>
                <button onClick={logout} className="nav-link">
                  Cerrar Sesion
                </button>
                <NavLink end to="/admin" className="nav-link">
                  Administrador
                </NavLink>
              </>
            )}

            <NavLink end to="/about" className="nav-link">
              Sobre Mí
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BarraNavegacion;
