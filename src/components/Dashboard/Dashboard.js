import React, { useContext } from 'react';
import useSeller from '../../hooks/useSeller';
import { authContext } from '../../contextApi/AuthProvider';

const Dashboard = () => {
    const {user} = useContext(authContext)
    const [isSeller] = useSeller(user?.email)
    console.log(isSeller);
    return (
        <div>
            This is dashboard
        </div>
    );
};

export default Dashboard;