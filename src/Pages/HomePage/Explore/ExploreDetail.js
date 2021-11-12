import React, { useEffect, useState } from 'react';
import ExploreItem from '../ExploreItem/ExploreItem';

const Explore = () => {
    const [products, setProducts] =useState([]);
    useEffect(()=> {
        fetch('https://protected-forest-98778.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className="row">
        {
           products.map(product => <ExploreItem key={product._id}
           product={product}
           ></ExploreItem> )
       }
 </div>
    );
};

export default Explore;