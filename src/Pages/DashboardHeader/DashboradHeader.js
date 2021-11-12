import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth/useAuth';

const DashboradHeader = () => {
    const {logout, user}= useAuth()
    return (
        <>
        
        {/* dashboard */}
        <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
            <Container>
                <Navbar.Brand href="#home">Welcome To Our Dashboard</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end fs-4">
                    <Nav.Link as={Link} to="/pay">pay</Nav.Link>
                    <Nav.Link as={Link} to="">My Orders</Nav.Link>
                    <Nav.Link as={Link} to="/review">Review</Nav.Link>
                    {user.email ? <button onClick={logout}>logOut</button> : ''}
                    <Navbar.Text>
                     </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    );
};

export default DashboradHeader;