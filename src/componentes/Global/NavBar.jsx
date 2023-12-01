import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Navbarxd() {
  const links= {
    textDecoration:'none',
    color:'white',
  }
  return (
    <Navbar bg="primary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand ><Link style={links} to="/" >Tiendita Bimbo</Link></Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link ><Link style={links} to="Productos" >Productos</Link></Nav.Link>
        <Nav.Link ><Link style={links} to="Contacto" >Sobre Nosotros</Link></Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
}

export default Navbarxd;