import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { authContext } from '../../contextApi/AuthProvider';

const Login = () => {
    const { loginUser } = useContext(authContext)
    const [isLoading, setIsLoading] = useState(false)
    
    const handleFormData = e => {
        e.preventDefault()
        const form = e.target;
        setIsLoading(true)
        const email = form.email.value;
        const password = form.password.value;
        const userData = {
            email, password
        }
        loginUser(email, password)
            .then(data => {
                console.log(data)
                setIsLoading(false)
                toast.success('Login successful')
            })
            .catch(err => {
                setIsLoading(false)
                toast.error(err.message)
            })

    }
    return (
        <div className='w-[100vw] h-[100vh] bg-gradient-to-r from-[#3F55A5] to-[#A3519F] flex justify-center items-center'>
            <div className='my-5 lg:my-0 md:my-0'>
                <h1 className='text-white text-4xl font-bold text-center my-5'>Login</h1>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleFormData} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            {
                                isLoading ?
                                    <button type='submit' className="btn bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white" disabled><progress className="progress bg-white w-36"></progress></button> :
                                    <button type='submit' className="btn bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white">Login</button>
                            }
                        </div>
                    </form>
                    <h1 className='mx-2 text-center'>Don't have any account? <span className='text-[#A3519F] font-semibold'><Link to='/register'>Register Now!</Link></span></h1>
                    <h1 className='text-center mb-2'>Or <span className='text-[#A3519F] font-semibold'><Link to='/home'>Go to home</Link></span></h1>

                </div>

            </div>
        </div>
    );
};

export default Login;