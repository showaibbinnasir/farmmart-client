import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../contextApi/AuthProvider';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(authContext)
    const location = useLocation();
    if (loading) {
        return <progress className="progress w-56 progress-warning"></progress>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default PrivateRouter;