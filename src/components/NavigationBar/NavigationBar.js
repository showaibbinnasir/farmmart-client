import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../contextApi/AuthProvider';

const NavigationBar = () => {
    const { user, logOut } = useContext(authContext)

    const signingOut = () => {
        logOut();
    }
    return (
        <div className="navbar sticky top-0 bg-gradient-to-r from-[#3F55A5] to-[#A3519F] z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="text-white font-normal menu menu-compact dropdown-content mt-3 p-2 shadow bg-gradient-to-r from-[#3F55A5] to-[#A3519F] rounded-box w-52">
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#animals'>Animals</a></li>
                        <li><a href='#needs'>Needs</a></li>
                        <li><a href='#blogs'>Blogs</a></li>
                        <li><a href='#about'>About</a></li>
                        <li><div className='inline md:hidden lg:hidden'>
                            <button><i class="fa-solid fa-cart-shopping text-white text-xl"></i></button>
                        </div></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl" href='#home'><img className='w-36 shadow-lg' src="logo.png" alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="text-white font-normal menu menu-horizontal px-1">
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#home'>Animals</a></li>
                    <li><a href='#home'>Needs</a></li>
                    <li><a href='#home'>Blogs</a></li>
                    <li><a href='#home'>About</a></li>
                </ul>
            </div>
            <div className="navbar-end">

                <div className='hidden md:inline lg:inline'>
                    <button><i class="fa-solid fa-cart-shopping text-white text-xl"></i></button>
                </div>
                {/* <a href='#home' className="btn btn-ghost text-white">Hi Showaib<span className='ml-2'><i class="fa-solid fa-angle-down"></i></span></a> */}
                <div className="dropdown dropdown-bottom dropdown-end text-white scale-75 lg:scale-100">
                    {
                        user?.email ? 
                        <label tabIndex={0} className="btn m-1 bg-transparent border-0 text-white">Hi {user?.email}<span className='ml-2'><i class="fa-solid fa-angle-down"></i></span></label> : 
                        <label tabIndex={0} className="btn m-1 bg-transparent border-0 text-white">Login<span className='ml-2'><i class="fa-solid fa-angle-down"></i></span></label>
                    }
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-gradient-to-r from-[#3F55A5] to-[#A3519F] rounded-box w-52">
                        {
                            user?.email ?
                                <div>
                                    <li>
                                        <div>
                                            <img className='w-10 rounded-full' src='' alt="" />
                                            <h1>{user?.email}</h1>
                                        </div>
                                    </li>
                                    <li><Link to='/'>Dashboard</Link></li>
                                    <li><Link onClick={signingOut}>Logout</Link></li>
                                </div> :
                                <div>
                                    <li><Link to='/login'>Login</Link></li>
                                    <li><Link to='/register'>Register</Link></li>
                                </div>

                        }

                    </ul>
                </div>
            </div>

        </div>
    );
};

export default NavigationBar;