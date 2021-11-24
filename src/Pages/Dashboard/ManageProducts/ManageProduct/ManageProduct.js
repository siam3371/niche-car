import React from 'react';
  
const ManageProduct = ({product}) => {
      const {name, describe, img, price, _id, setProducts } = product
      console.log(product)
       const handleDeleteProduct =()=>{
        const proceed = window.confirm('Are You surely Delete this Product');
        if(proceed){
          fetch(`https://protected-forest-98778.herokuapp.com/products/${_id}`, {
              method:'DELETE',
          })
          .then(res=>res.json())
          .then(data=>{ 
              
            if(data.deletedCount > 0){
              alert('deleted successfully');   
             }
                  });
        } 
          // console.log(products)
      } 
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
 <button className="btn btn-primary w-50" onClick={handleDeleteProduct }>Delete </button>
 </div> 
  </div>
        </ >
    );
};

export default ManageProduct;