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
 <Navbar.Brand as={Link} to="/" className=""><img className="w-25" src="https://csaustralia.org/wp-content/uploads/2021/06/carsales-logo.png" alt="" /> </Navbar.Brand>
 
      <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link    as={Link} to="/explore" className=" brand  ">Explore Page</Nav.Link>
    <Nav.Link   as={Link} to="/explore" className=" brand  ">Manage all Orders</Nav.Link>
    <Nav.Link as={Link} to="/login" className=" brand ">Login</Nav.Link>

          {
              user.email ?<>             <Nav.Link as={Link} to="/dashboard" className=" brand">Dashboard</Nav.Link>

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