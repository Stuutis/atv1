import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextoLogin } from "../App";

export default function Menu(props) {
  const contextoLogin = useContext(ContextoLogin);
  //const contextoLogin = useContext(ContextoLogin);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="">
          <Link to="/">Menu</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Cadastros básicos" id="basic-nav-dropdown">
              <NavDropdown.Item href="">
                <Link to="/produto">Produto</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="">
                <Link to="/fornecedor">Fornecedor</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand
          href=""
          onClick={() => {
            contextoLogin.setDadosLogin({
              usuario: "",
              logado: false,
            });
          }}
        >
          Logout
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
