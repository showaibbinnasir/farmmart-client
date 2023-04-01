import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../contextApi/AuthProvider';
import { toast } from 'react-hot-toast';

const NavigationBar = () => {
    const { user, logOut } = useContext(authContext)
    const navigation = useNavigate();
    const navigate = () => {
        navigation('/checkout')
    }
    const signingOut = () => {
        logOut();
    }
    const getFromLocal = localStorage.getItem('cart')
    const cart = JSON.parse(getFromLocal)
    let total = 0;
    for (var i = 0; i <= cart?.length; i++) {
        if (cart[i]?.price === undefined) {
            break;
        }
        total += cart[i]?.price;
    }

    const clearCart = () => {
        localStorage.removeItem('cart')
        toast.success('cleared cart')
        navigation('/needs')
        window.location.reload()
        
    }

    return (
        <div className="navbar sticky top-0 bg-gradient-to-r from-[#3F55A5] to-[#A3519F] z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="text-white font-normal menu menu-compact dropdown-content mt-3 p-2 shadow bg-gradient-to-r from-[#3F55A5] to-[#A3519F] rounded-box w-52">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/animals'>Animals</Link></li>
                        <li><Link to='/needs'>Needs</Link></li>
                        <li><a href='#blogs'>Blogs</a></li>
                        <li><a href='#about'>About</a></li>

                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"><img className='w-28 shadow-lg' src="https://i.ibb.co/NCBNFKD/logo.png" alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="text-white font-normal menu menu-horizontal px-1">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/animals'>Animals</Link></li>
                    <li><Link to='/needs'>Needs</Link></li>
                    <li><a href='#home'>Blogs</a></li>
                    <li><a href='#home'>About</a></li>
                </ul>
            </div>
            <div className="navbar-end">

                <div className=' md:inline lg:inline dropdown dropdown-bottom dropdown-end'>
                    <div class="indicator">
                        <span class="indicator-item badge badge-secondary scale-75">{
                            !cart ? 0 : 
                            cart?.length
                        }</span>
                        {/* <button class="btn">inbox</button> */}
                        <button tabIndex={0}><i class="fa-solid fa-cart-shopping text-white text-2xl"></i></button>
                    </div>

                    {/* <label tabIndex={0} className="btn m-1">Click</label> */}
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        {

                            !cart ? <h1>No data to show</h1> :
                                cart?.length < 1 ? <h1>No data to show</h1> :
                                    cart?.map(x => <div className='border border-blue-600 p-2 rounded-lg  my-1'>
                                        <div className='flex item-center gap-1'>
                                            <img src={x.images[0].thumbnail} className='w-10' alt="" />
                                            <h1>{x.title}</h1>
                                        </div>
                                        <h1>Price: {x.price} Taka</h1>
                                    </div>)
                        }
                        <h1 className='text-[#A3519F]'>Total Price: {total} Taka</h1>
                        <button onClick={navigate} className=' my-1 bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white px-3 py-1 rounded-lg'>Buy Now</button>
                        <button onClick={clearCart} className=' my-1 bg-gradient-to-r from-[rgb(241,90,41)] to-[rgb(218,28,92)] text-white px-3 py-1 rounded-lg'>Delete cart</button>
                    </ul>
                </div>

                {/* <a href='#home' className="btn btn-ghost text-white">Hi Showaib<span className='ml-2'><i class="fa-solid fa-angle-down"></i></span></a> */}
                <div className="dropdown dropdown-bottom dropdown-end text-white scale-75 lg:scale-100">
                    {
                        user?.email ?
                            <label tabIndex={0} className="btn m-1 bg-transparent border-0 text-white">Hi {
                                user?.photoURL ?
                                    <img className='w-10 rounded-full ml-2' src={user?.photoURL} alt="" /> : <img className='w-10 rounded-full ml-2' src="imgeerr.jpg" alt="" />
                            } <span className='ml-2'><i class="fa-solid fa-angle-down"></i></span></label> :
                            <label tabIndex={0} className="btn m-1 bg-transparent border-0 text-white">Login<span className='ml-2'><i class="fa-solid fa-angle-down"></i></span></label>
                    }
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-gradient-to-r from-[#3F55A5] to-[#A3519F] rounded-box w-52">
                        {
                            user?.email ?
                                <div>
                                    <li>
                                        <div>
                                            {
                                                user?.photoURL ?
                                                    <img className='w-10 rounded-full ml-2' src={user?.photoURL} alt="" /> : <img className='w-10 rounded-full ml-2' src="imgeerr.jpg" alt="" />
                                            }
                                            <h1>{user?.displayName}</h1>
                                        </div>
                                    </li>
                                    <li><Link to='/dashboard'>Dashboard</Link></li>
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