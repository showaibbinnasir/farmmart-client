import React, { useContext, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import useSeller from '../hooks/useSeller';
import useAdmin from '../hooks/useAdmin';
import { authContext } from '../contextApi/AuthProvider';

const DashboardLayout = () => {
    const { pathname } = useLocation();
    const { user } = useContext(authContext)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    const [isSeller] = useSeller(user?.email)
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="drawer-id" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-white">
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="drawer-id" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-gradient-to-r from-[#3F55A5] to-[#A3519F] lg:bg-base-0 text-white">

                        <li><Link to='/dashboard'>Profile</Link></li>
                        {
                            isAdmin ? <>
                                <li><Link to='/dashboard'>Manage User</Link></li>
                                <li><Link to='/dashboard'>Manage Needs</Link></li>
                                <li><Link to='/dashboard'>Manage Animals</Link></li>
                            </> :
                                isSeller ?
                                    <>
                                        <li><Link to='/dashboard/sellanimals'>Sell animals</Link></li>
                                        <li><Link to='/dashboard/sellneeds'>Sell needs</Link></li>
                                        <li><Link to='/dashboard/products'>My Product</Link></li>
                                    </> : <li><Link to='/dashboard/orders'>My Orders</Link></li>
                        }



                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;