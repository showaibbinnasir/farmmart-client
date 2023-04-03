import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../contextApi/AuthProvider';

const Registration = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const { createUser, updateUser } = useContext(authContext)
    const [isLoading, setIsLoading] = useState(false)
    const handleFormData = e => {
        e.preventDefault();
        const form = e.target;
        setIsLoading(true)
        const email = form.email.value;
        const username = form.userName.value;
        const password = form.password.value;
        const photoURL = form.photourl.value;
        const phone = form.phone.value;
        const gender = form.gender.value;
        const role = form.role.value;
        const status = false
        const formInfo = {
            userEmail: email, userName: username, userImage: photoURL, phone, gender, role
        }
        console.log(formInfo)
        createUser(email, password)
            .then(data => {
                handleUpdate(username, photoURL)
                console.log(data);
                setIsLoading(false);
                saveUser(email, username, photoURL, phone, gender, role,status)
                toast.success(`registration complete ${username}`)
                navigate(from, { replace: true })
            })
            .catch(err => {
                setIsLoading(false)
                toast.error(err.message)
            })
    }

    const saveUser = (userEmail, userName, userImage, phone, gender, role, status) => {
        const userInfo = { userEmail, userName, userImage, phone, gender, role, status }
        fetch('http://localhost:5000/all_users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    const handleUpdate = (name, photoLink) => {
        const profile = {
            displayName: name,
            photoURL: photoLink
        }
        updateUser(profile)
            .then(data => console.log(data))
            .catch(err => console.log(err))

    }
    return (
        <div className='p-5 w-[100vw] h-[100vh] bg-gradient-to-r from-[#3F55A5] to-[#A3519F] flex justify-center items-center'>
            <div className='my-5 lg:my-0 md:my-0'>
                <h1 className='text-white text-4xl font-bold text-center my-5'>Registration</h1>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleFormData} className="card-body">
                        <div className='grid grid-cols-2 gap-2'>
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
                                    <span className="label-text">photoURL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" name='photourl' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="text" placeholder="Enter you number" name='phone' className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Gender</span>
                                </label>
                                <select name='gender' className="select select-bordered w-full max-w-xs">
                                    <option disabled selected>Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>

                            </div>
                        </div>
                        <select name='role' className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Which role you want to play?</option>
                            <option>Buyer</option>
                            <option>Seller</option>
                        </select>
                        <div className="form-control mt-3">
                            {
                                isLoading ?
                                    <button type='submit' className="btn bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white" disabled><progress className="progress bg-white w-36"></progress></button> :
                                    <button type='submit' className="btn bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white">Register</button>
                            }
                        </div>
                    </form>
                    <h1 className='mx-2 text-center'>Already have account? <span className='text-[#A3519F] font-semibold'><Link to='/login'>Login Now!</Link></span></h1>
                    <h1 className='text-center mb-2'>Or <span className='text-[#A3519F] font-semibold'><Link to='/home'>Go to home</Link></span></h1>

                </div>

            </div>
        </div>
    );
};

export default Registration;