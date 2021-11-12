 import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth/useAuth';
 
const PrivateRoute = ({ children, ...rest }) => {
    const {user, isloading} = useAuth()
    if(isloading){
         return <p>loading...</p> 
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? children: (
                    <Redirect
                        to={{
                            pathname: "/register",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;