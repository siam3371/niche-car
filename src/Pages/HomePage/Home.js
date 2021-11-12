import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import './Home.css'  
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Link to="/explore"> <button className="btn-regular w-25 m-5 fw-bolder fs-4">Explore Page</button> 
</Link>
        </div>
    );
};

export default Home;