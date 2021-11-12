 import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const useAuth = () => {
    // using context api
    const auth = useContext(AuthContext);
    return auth;
}

export default useAuth;