import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='w-[100vw] h-[100vh] bg-gradient-to-r from-[#3F55A5] to-[#A3519F] flex justify-center items-center'>
            <div>
                <h1 className='text-white text-4xl font-bold text-center my-5'>Login</h1>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white">Login</button>
                        </div>
                    </div>
                    <h1 className='mx-2 text-center'>Don't have any account? <span className='text-[#A3519F] font-semibold'>Register Now!</span></h1>
                    <h1 className='text-center mb-2'>Or <span className='text-[#A3519F] font-semibold'><Link to='/home'>Go to home</Link></span></h1>
                </div>
                
            </div>
        </div>
    );
};

export default Login;