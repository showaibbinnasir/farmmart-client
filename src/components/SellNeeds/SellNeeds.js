import React from 'react';
import { toast } from 'react-hot-toast';

const SellNeeds = () => {
    const handleFormData = e => {
        e.preventDefault()
        toast.error('under development')
    }
    return (
        <div>
            <div data-aos="fade-right" className='flex justify-center lg:justify-center mt-10'>
                <h1 className='bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white px-16 py-4 rounded-tl-2xl rounded-br-2xl shadow-lg' >Post for Animals</h1>
            </div>
            <div>
                <form onSubmit={handleFormData} className="card-body">
                    <div className='grid grid-cols-2 gap-2'>
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
                                <span className="label-text">Color</span>
                            </label>
                            <input type="text" placeholder="Animal color" name='color' className="input input-bordered" required />
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