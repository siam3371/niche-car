 import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import useAuth from '../../Hooks/UseAuth/useAuth';
import './Header.css'
 
const Header = () => {
    const {logout, user} = useAuth()
    return (
        <div>
            {/* this is header */}
            <Navbar bg="dark" variant="dark"  className="sticky-top" collapseOnSelect expand="lg">
    <Container>
     <Navbar.Brand href="#home" className="fs-1 brand  fw-normal"> <i className="fas fa-car"></i>Car Sales </Navbar.Brand>
     <Navbar.Brand href="#home" as={Link} to="/explore" className="fs-1 brand  fw-bolder">Explore Page</Navbar.Brand>
     <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
          <Nav.Link as={Link} to="/login" className=" brand fs-3">Login</Nav.Link>
          {
              user.email ?<>             <Nav.Link as={Link} to="/dashboard" className=" brand fs-3">Dashboard</Nav.Link>

              <button onClick={logout}>Logout</button><span className="text-white">{user.displayName}</span>   </>:  ""   
          } 
            <Navbar.Text> 
       </Navbar.Text>
    </Navbar.Collapse> 
    </Container>
  </Navbar>
        </div>
    );
};

export default Header; 