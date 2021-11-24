import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
 import useAuth from '../Hooks/UseAuth/useAuth';
 import Review from '../Review/Review'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Dashboard/Pay/Pay';
import MakeAdmin from '../Dashboard/MakeAdmin/MakeAdmin';
import AddProducts from '../Dashboard/AddProducts/AddProducts';
import ManageAllOrders from '../Dashboard/ManageAllOrders/ManageAllOrders';
import ManageProducts from '../Dashboard/ManageProducts/ManageProducts';
import Explore from '../HomePage/Explore/ExploreDetail';
const DashboradHeader = () => {
    const {logout, user, admin}= useAuth()
    let { path, url } = useRouteMatch();
    console.log(path)
    return (
        <>
        
        {/* dashboard */}
        <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
            <Container>
                    <Navbar.Brand as={Link} to="/explore" className="text-primary fw-bolder fs-3">Explore </Navbar.Brand>
                 <Navbar.Brand as={Link} to="/"   className="text-primary fw-bolder fs-3">Home</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end fs-4">
                {!admin && <>
                    <Nav.Link  className="fw-bolder"  as={Link} to={`${url}/pay`}>pay</Nav.Link>
                    <Nav.Link  className="fw-bolder" as={Link} to={`${url}`}>My Orders</Nav.Link>
                    <Nav.Link  className="fw-bolder" as={Link} to={`${url}/review`}>Review</Nav.Link>
                </>}
                    {admin && <> 
                        <Nav.Link className="fw-bolder" as={Link} to={`${url}/makeAdmin`}>Make Admin</Nav.Link>
                        <Nav.Link className="fw-bolder" as={Link} to={`${url}/addproducts`}>Add A Products</Nav.Link>
                        <Nav.Link className="fw-bolder" as={Link} to={`${url}/manageallorders`}>Manage All Oreders</Nav.Link>
                        <Nav.Link className="fw-bolder" as={Link} to={`${url}/manageproducts`}>Manage Products</Nav.Link>
                    </>}
                    {user.email ? <button onClick={logout}>logOut</button> : ''}
                    <Navbar.Text>
                     </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Switch>
        <Route exact path={path}>
            <MyOrders></MyOrders>
         </Route>
        <Route path={`${path}/pay`}>
            <Pay></Pay> 
            </Route>
        <Route path={`${path}/explore`}>
        <Explore></Explore> 
             </Route>
        <Route path={`${path}/review`}>
            <Review></Review> 
            </Route>
        <Route path={`${path}/makeAdmin`}>
             <MakeAdmin></MakeAdmin>
            </Route>
        <Route path={`${path}/addproducts`}>
              <AddProducts></AddProducts>
            </Route>
        <Route path={`${path}/manageallorders`}>
            <ManageAllOrders></ManageAllOrders>
             </Route>
        <Route path={`${path}/manageproducts`}>
            <ManageProducts></ManageProducts>
              </Route>
      </Switch>
    </>
    );
};

export default DashboradHeader;