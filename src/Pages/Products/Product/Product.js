import React from 'react';
import { Link } from 'react-router-dom';
import './product.css'
const Product = ({product}) => {
    // console.log(product)
    const {name, describe, img, price, _id} = product 
     return (
        <>
            <div className="col-lg-4 col-md-6 col-12">
  {/* services item showing */}
<div style={{
      height:"630px"
}} className="shadow-lg p-2 mb-5 bg-body rounded p-5">
<img className="w-100" src={img} alt="" />
<h3>{name}</h3>
<p>{describe}</p> 
<p>price:${price}</p>
 {/* button click */}
<Link to={`/product/${_id}`} >   <button  className="btn btn-primary w-50 fs-5 button-size ">     <i class="fas fa-info-circle"></i>
Purchase</button>
</Link>
 </div> 
  </div>
        </ >
    );
};

export default Product;