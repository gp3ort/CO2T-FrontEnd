import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { logout } from "../redux/actions/userActions";
import { LINKS_NAVBAR } from "../routes/link";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


function NavrBarMain(){
    const dispatch = useDispatch();

    const { user } = useSelector((store) => store.user);
    const handleClick = () => {
      dispatch(logout());
    };

    return (
    <Navbar
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      sticky="top"
      className="container"
    >
      <Container className="px-1">
        <Navbar.Brand>CO2</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end w-100 pe-2">
            {LINKS_NAVBAR.map((link) => (
              <Nav.Link
                key={link.path}
                to={link.path}
                as={Link}
                className="sm:w-100 text-center"
              >
                {link.name}
              </Nav.Link>
            ))}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      );
}
export default NavrBarMain;