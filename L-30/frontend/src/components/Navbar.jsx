import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbars() {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <div className="container">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto space-x-10">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/student">StudentData</NavLink>
              <NavLink to="/profile">Profile</NavLink>
              {isLoggedIn ? (
                <>
                  <button onClick={handleLogout}>Logout</button>
                </>
              ) : (
                <>
                  <NavLink to="/login">Login</NavLink>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default Navbars;
