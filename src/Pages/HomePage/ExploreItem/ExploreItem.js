import React from 'react';
import { useHistory } from 'react-router';
 
const ExploreItem = ({product}) => {
    const history = useHistory()
    const {name, describe, img, price, _id} = product;
     const handleDetails = (id) => {
         const uri = `/exploreDetail/${id}`;
        history.push(uri) 
} 
     return (
        <div className="col-lg-4 col-md-6 col-12 bg-success">
        {/* services item showing */}
      <div style={{
            height:"630px"
      }} className="shadow-lg p-2 mb-5 bg-body rounded p-5 ">
      <img className="w-100" src={img} alt="" />
      <h3>{name}</h3>
      <p>{describe}</p> 
      <p>price:${price}</p>
       {/* button click */}
         <button  className="btn btn-primary w-50 fs-5 button-size" onClick={() =>handleDetails(product._id) }><i className="fas fa-shopping-cart"></i>Purchase</button>
        </div> 
        </div>
    );
};

export default ExploreItem;