 
 
 import React, { useEffect, useState } from 'react';
 import { Card, Spinner } from 'react-bootstrap';
 import { useForm } from "react-hook-form";
 import { useParams } from 'react-router';
import useAuth from '../Hooks/UseAuth/useAuth';
  import './ProductDetail.css' 
 const PlaceOrder = () => {
    //  const [placeOrderService, setPlaceOrderService] = useState([]);
     const [products, setProducts] =useState([]);
      const {isLoading, user} = useAuth();
    //  const {name, details?.price, img,   describe} = placeOrderService;
     const { register, handleSubmit, reset } = useForm();
       const {id} = useParams();
     useEffect(()=>{
       fetch("https://protected-forest-98778.herokuapp.com/products")
       .then(res => res.json())
       .then(data => setProducts(data))
   }, []);
   // product detail 
const details = products.find(service=> service._id ===   id);
          const onSubmit = data =>{ 
          fetch(`http://localhost:5000/orders/${id}`, {
 
                 method: 'POST',
                 headers: {
                     'content-type': 'application/json'
                 },
                 body: JSON.stringify(data)
             })
                 .then(res => res.json())
                 .then(data=>{
                   if (data.insertedId) {
                     alert('Order processed Successfully');
                     reset();
                 }
                 });
         reset();
       };
        const handleName= (e) => {
            console.log(e.target.value)
        } 
        const handleEamil = (e) => {
             
        }
       if(isLoading){
         return <Spinner animation="border" variant="primary" />
     }
     return (
       <>
          <div>
           <h1 className="my-5 text-center">Please Place Your Order</h1>
           <div className="container my-5 d-flex place-container justify-content-between">
             <div className="shadow-lg p-3 mb-5 bg-body rounded p-5">
               <div className="px-3 form-container">
                 <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="place-Order-text" onBlur={handleName} defaultValue={user.displayName} {...register("name")} />
                   <br />
                   <input className="place-Order-text" defaultValue={user.email  } {...register("email")} />
                   <br />
                   <input className="place-Order-text" autoFocus {...register("tour")} value={details?.name}/>
                   <br />
                   <input className="place-Order-text" placeholder="Enter your address" {...register("address")} />
                   <br />
                   <input className="place-Order-text"  placeholder="Enter your number" {...register("phoneNumber")} />
                   <br />
                   <input className="bg-primary px-3 py-2 text-white fw-bolder form-control" type="submit" />
                 </form>
               </div>
           </div>
           <div className="shadow-lg p-3 mb-5 bg-body rounded">
           <Card  className="place-card">
             <Card.Img variant="top" src={details?.img} />
             <Card.Body>
               <Card.Title>{details?.name}</Card.Title>
               <Card.Text className="text-start">
                 <i>{details?.describe}</i>
                 <p className="fw-bolder text-danger"> price: {details?.price}</p>
               </Card.Text>
             </Card.Body>
           </Card>
           </div>
         </div>
         </div>
       </>
     );
   };
 
 export default PlaceOrder;