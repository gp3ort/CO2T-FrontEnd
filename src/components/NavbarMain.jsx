import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LINKS_NAVBAR } from "../routes/link";
import { Link } from "react-router-dom";
function NavrBarMain(){
    return (
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          className="navbar-custom"
        >
          <Container fluid className="p-0">
            <Nav className="w-100 justify-content-center">
              {LINKS_NAVBAR.map((link) => (
                <Nav.Link
                  key={link.path}
                  to={link.path}
                  as={Link}
                  className="text-center"
                >
                  {link.name}
                </Nav.Link>
              ))}
            </Nav>
          </Container>
        </Navbar>
      );
}

export default NavrBarMain;