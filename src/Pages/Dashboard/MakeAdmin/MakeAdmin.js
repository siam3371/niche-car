 import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('') 
    const handleEmail = e => {
        setEmail(e.target.value) 
    }
 
    const handleSubmit = e => {
         fetch(`https://protected-forest-98778.herokuapp.com/users/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
            })
            .then(res => res.json())
            .then(data=>{
               if (data.modifiedCount) {
                alert('Make Admin Successfully');
            }
            });
        e.preventDefault();
    }
    return (
        <div className="m-5">
             <form onSubmit={handleSubmit}>
                  <input className="w-25" text="email"  onBlur={handleEmail} placeholder="Enter Email"></input>
                  <button type="submit" className="text-danger" variant="primary">Submit</button> 
                  </form> 
        </div>
    );
};

export default MakeAdmin;