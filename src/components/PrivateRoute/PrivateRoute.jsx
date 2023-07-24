import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <progress className="progress progress-primary w-56" value="10" max="100"></progress>
    }
    if(user){
        return children
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;



// import React, { Children, useContext } from 'react';
// import { AuthContext } from '../Provider/AuthProvider';
// import { Navigate, useLocation } from 'react-router-dom';

// const PrivateRoute = ({children}) => {
//     const {user, loading} = useContext(AuthContext);
//     const location = useLocation();

//     if(loading){
//         return <progress className="progress progress-primary w-56" value="10" max="100"></progress>
//     }
//     if(user){
//         return children
//     }
//     return <Navigate to='/login' state={{from: location}} replace></Navigate>
// };

// export default PrivateRoute;