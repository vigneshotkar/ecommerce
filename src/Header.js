import { Link } from "react-router-dom"
import "./header.css"
import fashion from './pick.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <img src={fashion}></img>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <ul className="Ul-main">
            <li className="nav-item">
            <Link to="/">Home</Link>
            </li>

            <li className="nav-item">
            <Link to="Product">Product</Link>
            </li>

            <li className="nav-item">
            <Link to="Buy">Buy</Link>
            </li>

            <li className="nav-item">
            <Link to="Contact">Contact</Link>
            </li>

            <li className="nav-item">
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
             <Link to="Jewelery">Jewelery</Link>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default BasicExample;