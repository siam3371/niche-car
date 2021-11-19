import React, { useEffect, useState } from 'react';
import ManageProduct from './ManageProduct/ManageProduct';

const ManageProducts = () => {
    const [products, setProducts] =useState([]);
    useEffect(()=> {
        fetch('https://protected-forest-98778.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className="row">
             {
                 products.map(product=> <ManageProduct 
                    key={product._id}
                    product={product} 
                    setProducts={setProducts}
                 ></ManageProduct>)
             }
        </div>
    );
};

export default ManageProducts;