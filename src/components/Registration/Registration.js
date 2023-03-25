import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    const handleFormData = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const username = form.userName.value;
        const password = form.password.value;
        const formInfo = {
            email, username, password
        }
        console.log(formInfo)
    }
    return (
        <div className='w-[100vw] h-[100vh] bg-gradient-to-r from-[#3F55A5] to-[#A3519F] flex justify-center items-center'>
            <div className='my-5 lg:my-0 md:my-0'>
                <h1 className='text-white text-4xl font-bold text-center my-5'>Registration</h1>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleFormData} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <input type="text" placeholder="username" name='userName' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white">Login</button>
                        </div>
                    </form>
                    <h1 className='mx-2 text-center'>Already have account? <span className='text-[#A3519F] font-semibold'><Link to='/login'>Login Now!</Link></span></h1>
                    <h1 className='text-center mb-2'>Or <span className='text-[#A3519F] font-semibold'><Link to='/home'>Go to home</Link></span></h1>
                    <div className='mt-2'>
                        <h1 className='text-center'>Or Login with</h1>
                        <div className='flex justify-center my-2'>
                            <button className='btn text-white border-0 bg-gradient-to-r from-[#3F55A5] to-[#A3519F]'><i class="fa-brands fa-google mr-2"></i>Google</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Registration;