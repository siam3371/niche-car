import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import AuthProvider from './Pages/Context/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard';
import Pay from './Pages/Dashboard/Pay/Pay';
 import DashboradHeader from './Pages/DashboardHeader/DashboradHeader';
import ExploreBuyNow from './Pages/ExploreBuyNow/ExploreBuyNow';
import Footer from './Pages/Footer/Footer';
import Explore from './Pages/HomePage/Explore/ExploreDetail';
import Home from './Pages/HomePage/Home';
 import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
  import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Products from './Pages/Products/Products';
import QuestionAnswer from './Pages/Question/QuestionAnswer';
import Register from './Pages/Register/Register';
 import Header from './Pages/Shared/Header/Header';
 import Review  from './Pages/Review/Review.js';
import HomePageReview from './Pages/HomePageReview/HomePageReview';
import MyOrders from './Pages/MyOrders/MyOrders';
 
function App() {
  return (
 <div className="App">
            {/* start project  */}
         <AuthProvider>
        <Router>  
          <Switch>
            <Route exact path="/">
            <Header></Header> 
          <Home></Home>
          <Products></Products>
          <HomePageReview></HomePageReview>
              <About></About>
              <QuestionAnswer></QuestionAnswer>
            </Route>
            <Route path="/home">
            <Header></Header>
               <Home></Home>
              <Products></Products>
              <HomePageReview></HomePageReview>
                <About></About>
             <QuestionAnswer></QuestionAnswer>
            </Route> 
              <Route path="/explore">
                <Header></Header>
                  <Explore></Explore>
                </Route>
              <PrivateRoute path="/product/:id">
              <Header></Header> 
                  <ProductDetail></ProductDetail>
                  </PrivateRoute> 
                   <Route path="/login">
                     <Header></Header> 
                    <Login></Login>
                    </Route>
                    <Route path="/register">
                      <Header></Header>
                      <Register></Register>
                    </Route>
                    <PrivateRoute path="/dashboard">
                      <DashboradHeader></DashboradHeader>
                       <Dashboard></Dashboard> 
                    </PrivateRoute>
                    <Route path="/exploreDetail/:id">
                    <Header></Header> 
                      <ExploreBuyNow></ExploreBuyNow>
                     </Route>
                     <PrivateRoute path="/pay">
                       <DashboradHeader></DashboradHeader>
                       <Pay></Pay>
                        </PrivateRoute>  
                     <PrivateRoute path="/review">
                       <DashboradHeader></DashboradHeader>
                         <Review></Review>
                         </PrivateRoute>  
                     <PrivateRoute path="/myOrder">
                       <DashboradHeader></DashboradHeader>
                       <MyOrders></MyOrders>
                          </PrivateRoute>  
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
        </AuthProvider>
        {/* end project */}
    </div>
  );
}

export default App;
