import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../contextApi/AuthProvider';
import Loader from '../Loader/Loader';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(authContext)
    const location = useLocation();
    if (loading) {
        return <Loader></Loader>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default PrivateRouter;