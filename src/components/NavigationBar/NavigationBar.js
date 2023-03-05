import React from 'react';

const NavigationBar = () => {
    return (
        <div className="navbar bg-gradient-to-r from-[#3F55A5] to-[#A3519F]">
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
                <a href='#home' className="btn btn-ghost text-white">Hi Showaib<span className='ml-2'><i class="fa-solid fa-angle-down"></i></span></a>
            </div>
        </div>
    );
};

export default NavigationBar;