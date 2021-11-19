import React from 'react';
import { useForm } from 'react-hook-form';

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        console.log(data)
         fetch('https://protected-forest-98778.herokuapp.com/products', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data=>{
                    console.log(data)
                  if (data.insertedId) {
                    alert('Add product Successfully');
                    reset();
                }
                });
        reset();
      };
    return (
        <div className="container add-product-container my-5 p-4 shadow-lg p-3 mb-5 bg-body rounded w-50">
            <h1 className="text-center mb-4">Add a new Product</h1>
            <form className="text-center fw-bolder" onSubmit={handleSubmit(onSubmit)}>
              <input className="place-Order-text" placeholder="Enter product name" {...register("name")} />
              <br />
              <input className="place-Order-text" type="number" placeholder="Enter product price" {...register("price")} />
              <br />
              <textarea className="place-Order-text" placeholder="Enter product discription" {...register("discription")}/>
              <br />
              <input className="place-Order-text" placeholder="Enter product image url" {...register("image")} />
              <br />
              <input className="bg-primary px-3 py-2 text-white fw-bolder form-control place-Order-text mx-auto" type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;