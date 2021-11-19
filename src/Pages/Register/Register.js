// import { getAuth, updateProfile } from '@firebase/auth';
import { getAuth, updateProfile } from '@firebase/auth';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth/useAuth';

const Register = () => {
    const history = useHistory()
    const location = useLocation()
     // const [user, setUser] = useState({}) 
    const auth = getAuth(); 
    const url = location.state?.from || "/dashboard" 
      const [name, setName] = useState('')
     const [password, setPassword] = useState('')
     const [email, setEmail] = useState('') 
 const { registerUser, setUser, setIsLoading} = useAuth()
  const handleName = (e) => {
          setName(e.target.value)
  }
  const handleEmail = e => {
      setEmail(e.target.value)
  } 
  const handlePassword = (e) => {
      setPassword(e.target.value)
  }
  const OneNew = {name, email, password}
   const hanldeRegistration = (e) => {
    e.preventDefault() 
         registerUser(email, password)
        .then((userCredential) => { 
             fetch('https://protected-forest-98778.herokuapp.com/users', {

                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(OneNew)
            })
                .then(res => res.json())
                .then(data=>{
                  if (data.insertedId) {
                    alert('User Added successful');
                 }
                })
            setIsLoading(true)
            const newUser = { email, displayName: name };
            setUser(newUser);
            history.push(url)
            // send name to firebase after creation
            updateProfile(auth.currentUser, {
                displayName: name
            }).then(() => {
            }).catch((error) => {
            });
            // history.replace('/'); 
         })
        .catch((error) => {
            
        })
        .finally(() => setIsLoading(false));

  }
   
    return (
        <div>
        <div className="container">  
  <form onSubmit={hanldeRegistration}>
<h1>Please Register</h1> 
<div className="row mb-3"> 
<label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
<div className="col-sm-10">
<input type="text" onBlur={handleName}  className="form-control w-50" id="inputEmail3" placeholder="Your Name" required/>
</div>
</div> 
<div className="row mb-3">
<label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Email</label>
<div className="col-sm-10">
<input type="email" onBlur={handleEmail} className="form-control w-50" id="inputPassword3" placeholder=" Your Email" required/>
</div>
</div>  
<div className="row mb-3">
<label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
<div className="col-sm-10">
<input type="password" onBlur={handlePassword} className="form-control w-50" id="inputPassword3" placeholder=" Your Password" required/>
</div>
</div>  
 <button type="submit" className="btn btn-primary w-25">Register</button>   
  <Link to="login"><p>Already have a user? Login</p></Link>
</form>    
</div>
</div>
    );
};

export default Register;