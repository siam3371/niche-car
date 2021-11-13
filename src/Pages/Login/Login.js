import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth/useAuth';
import { useHistory, useLocation } from 'react-router';
// import { getAuth } from '@firebase/auth';

const Login = () => {
  const history = useHistory()
    const location = useLocation()
     // const [user, setUser] = useState({}) 
     const url = location.state?.from || "/dashboard" 
   const [password, setPassword] = useState('')
  const [email, setEmail] = useState('') 
const {  setUser, setIsLoading, loginUser, isloading,   } = useAuth() 
const handleEmail = e => {
   setEmail(e.target.value)
} 
const handlePassword = (e) => {
   setPassword(e.target.value)
}
   const handleSubmit = (e) => {
    e.preventDefault()  
      loginUser(email, password)
      .then((userCredential) => {
        setIsLoading(true) 
        setUser(userCredential.user)
             history.push(url)
})
.catch((error) => {
 })
.finally(() => setIsLoading(false));
}
  
if(isloading){
  return <p>loading...</p> 
}
    return (
        <div>
        <div className="container">  
  <form onSubmit={handleSubmit} >
<h1>Please Login</h1>  
<div className="row mb-3"> 
<label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
<div className="col-sm-10">
<input type="email" onBlur={handleEmail}  className="form-control w-50" id="inputEmail3" placeholder="     Your Email" required/>
</div>
</div>
<div className="row mb-3">
<label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
<div className="col-sm-10">
<input type="password" onBlur={handlePassword} className="form-control w-50" id="inputPassword3" placeholder=" Your Password" required/>
</div>
</div>  
 <button type="submit" className="btn btn-primary w-25">Login</button> 
  <Link to="/register"><p>New User? Please Register</p></Link>   
</form>    
</div>
</div>
    );
};

export default Login;