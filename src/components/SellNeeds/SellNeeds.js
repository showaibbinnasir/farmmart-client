import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { authContext } from '../../contextApi/AuthProvider';

const SellNeeds = () => {
    const [userData, setUserData] = useState([])
    const { user } = useContext(authContext)
    useEffect(() => {
        fetch(`https://farmmart-backend-showaibbinnasir.vercel.app/all_users?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setUserData(data[0]))
    }, [user])
    const handleFormData = e => {
        e.preventDefault()
        const form = e.target;
        const type = form.type.value;
        const animal = form.animal.value;
        const title = form.title.value;
        const company = form.brand.value;
        const uploadDate = form.uploadDate.value;
        const sellerLocation = form.sellerLocation.value;
        const sellerName = userData.userName;
        const seller_Email = userData.userEmail;
        const sellerImage = userData.userImage;
        const phone = userData.phone;
        const price = Number(form.price.value);
        const description = form.description.value;
        const image1 = form.image1.value;
        const image2 = form.image2.value;
        const image3 = form.image3.value;
        const images = [
            {
                original: image1,
                thumbnail: image1
            },
            {
                original: image2,
                thumbnail: image2
            },
            {
                original: image3,
                thumbnail: image3
            }
        ]
        const status = false;
        const postInfo = {
            type, animal, title, company, uploadDate, sellerLocation, sellerName, seller_Email, sellerImage, phone, price, description, images, status
        }
        console.log(postInfo);
        fetch('https://farmmart-backend-showaibbinnasir.vercel.app/all_needs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('upload successfully')
                form.reset()
            })
    }
    return (
        <div>
            <div data-aos="fade-right" className='flex justify-center lg:justify-center mt-10'>
                <h1 className='bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white px-16 py-4 rounded-tl-2xl rounded-br-2xl shadow-lg' >Post for Needs</h1>
            </div>
            <div>
                <form onSubmit={handleFormData} className="card-body">
                    <div className='grid grid-cols-2 gap-2'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <select name='type' className="select select-bordered w-full">
                                <option disabled selected>Type</option>
                                <option>Medicine</option>
                                <option>Food</option>
                            </select>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Animal type</span>
                            </label>
                            <select name='animal' className="select select-bordered w-full">
                                <option disabled selected>Animal</option>
                                <option>Cow</option>
                                <option>Goat</option>
                                <option>Hen</option>
                                <option>Duck</option>
                            </select>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" placeholder="Enter title" name='title' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand</span>
                            </label>
                            <input type="text" placeholder="Brand" name='brand' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Upload date</span>
                            </label>
                            <input type="text" placeholder="upload date" value={Date()} name='uploadDate' className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="text" placeholder="Enter you location" name='sellerLocation' className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" placeholder="Enter you animal price" name='price' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" placeholder="Description" name='description' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image1</span>
                            </label>
                            <input type="text" placeholder="first image" name='image1' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image2</span>
                            </label>
                            <input type="text" placeholder="second image" name='image2' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image 3</span>
                            </label>
                            <input type="text" placeholder="third image" name='image3' className="input input-bordered" required />
                        </div>
                    </div>
                    <button type='submit' className="btn bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white">Post now</button>
                </form>
            </div>
        </div>
    );
};

export default SellNeeds;