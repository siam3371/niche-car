import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const Products = () => {
    const [products, setProducts] =useState([]);
    useEffect(()=> {
        fetch('https://protected-forest-98778.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    console.log(products)
     return (
        <div className="row ">
                 {/* home page product car */}
                 {
                    products.slice(0, 6).map(product => <Product 
                        key={product._id}
                    product={product} 
                    ></Product>)
                }
          </div>
    );
};

export default Products;