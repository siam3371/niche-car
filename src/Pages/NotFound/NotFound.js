import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div  className="text-center">
             <h2>Page not Fount <small className="fs-1 text-primary"> 404</small>
             </h2>
          <Link to="/">   <button  className="btn btn-primary">
                 Go Back Home
             </button></Link>
        </div>
    );
};

export default NotFound;