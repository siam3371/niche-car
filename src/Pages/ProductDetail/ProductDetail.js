import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../Hooks/UseAuth/useAuth';
import './ProductDetail.css'
const ProductDetail = () => {
    const {detail} = useParams() 
     const {isloading} = useAuth()
    const [products, setProducts] =useState([]);
     useEffect(()=> {
        fetch('https://protected-forest-98778.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
     const details = products.find(service=> service._id ===  detail);
 
     return (
        <div className="container ">
            <div className="row">
                <div className="col-lg-6 col-12 col-md-12 card ">
                    <img src={details?.img}  alt="" />
                    <h2>{details?.name}</h2>
                <p>{details?.describe}</p>
                <p>${details?.price}</p>
                <button  className="btn btn-primary w-25 fs-5 cart "><i className="fas fa-shopping-cart"></i>Buy Now</button>   
                 </div>
            </div>
        </div>
    );
};

export default ProductDetail;