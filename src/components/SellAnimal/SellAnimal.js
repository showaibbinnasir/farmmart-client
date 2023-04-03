import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../contextApi/AuthProvider';
import { toast } from 'react-hot-toast';

const SellAnimal = () => {
    const [userData, setUserData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { user } = useContext(authContext)
    useEffect(() => {
        fetch(`https://farmmart-backend-showaibbinnasir.vercel.app/all_users?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setUserData(data[0]))
    }, [user])
    const handleFormData = (e) => {
        setIsLoading(true)
        e.preventDefault()
        const form = e.target;
        const animal = form.animal.value;
        const title = form.title.value;
        const color = form.color.value;
        const uploadDate = form.uploadDate.value;
        const sellerLocation = form.sellerLocation.value;
        const sellerName = userData.userName;
        const sellerEmail = userData.userEmail;
        const sellerImage = userData.userImage;
        const phone = userData.phone;
        const price = form.price.value;
        const description = form.description.value;
        const image1 = form.thumbnailOne.files[0];
        const image2 = form.thumbnailTwo.files[0]
        const image3 = form.thumbnailThree.files[0]
        const formDataOne = new FormData()
        formDataOne.append('image', image1)
        const formDataTwo = new FormData()
        formDataTwo.append('image', image2)
        const formDataThree = new FormData()
        formDataThree.append('image', image3)
        let imageOne = ''
        let imageTwo = ''
        let imageThree = ''

        const status = false;

        console.log({ image1, image2, image3 })
        fetch("https://api.imgbb.com/1/upload?key=63ff49e7f3a9f352605525982cb4b330", {
            method: 'POST',
            body: formDataOne
        })
            .then(res => res.json())
            .then(imageData => {
                console.log(imageData)
                imageOne = imageData.data?.url
                fetch("https://api.imgbb.com/1/upload?key=63ff49e7f3a9f352605525982cb4b330", {
                    method: 'POST',
                    body: formDataTwo
                })
                    .then(res => res.json())
                    .then(imageData => {
                        console.log(imageData)
                        imageTwo = imageData.data?.url
                        fetch("https://api.imgbb.com/1/upload?key=63ff49e7f3a9f352605525982cb4b330", {
                            method: 'POST',
                            body: formDataThree
                        })
                            .then(res => res.json())
                            .then(imageData => {
                                console.log(imageData)
                                imageThree = imageData.data?.url
                                const images = [
                                    {
                                        original: imageOne,
                                        thumbnail: imageOne
                                    },
                                    {
                                        original: imageTwo,
                                        thumbnail: imageTwo
                                    },
                                    {
                                        original: imageThree,
                                        thumbnail: imageThree
                                    }
                                ]
                                const postInfo = {
                                    animal, title, color, uploadDate, sellerLocation, sellerName, sellerEmail, sellerImage, phone, price, description, images, status
                                }
                                console.log(postInfo);
                                fetch('https://farmmart-backend-showaibbinnasir.vercel.app/all_animals', {
                                    method: 'POST',
                                    headers: {
                                        'content-type': 'application/json'
                                    },
                                    body: JSON.stringify(postInfo)
                                })
                                    .then(res => res.json())
                                    .then(data => {
                                        console.log(data)
                                        setIsLoading(false)
                                        toast.success('upload successfully')
                                        form.reset()
                                    })


                            })

                    })

            })
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
                                <option disabled selected>Cow</option>
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
                        {/* <div className="form-control">
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
                        </div> */}
                    </div>
                    <div>
                        <h1>Images:</h1>
                        <div id="fileUpload">
                            <div className="mb-2 block">
                                <label
                                    htmlFor="file"
                                    value="Upload file"
                                />
                            </div>
                            <input
                                id="file"
                                type="file"
                                name='thumbnailOne'

                            />
                        </div>
                        <div id="fileUpload">
                            <div className="mb-2 block">
                                <label
                                    htmlFor="file"
                                    value="Upload file"
                                />
                            </div>
                            <input
                                id="file"
                                type="file"
                                name='thumbnailTwo'

                            />
                        </div>
                        <div id="fileUpload">
                            <div className="mb-2 block">
                                <label
                                    htmlFor="file"
                                    value="Upload file"
                                />
                            </div>
                            <input
                                id="file"
                                type="file"
                                name='thumbnailThree'

                            />
                        </div>
                    </div>
                    {
                        isLoading ?
                            <button type='submit' className="btn bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white" disabled><progress className="progress bg-white w-36"></progress></button> :
                            <button type='submit' className="btn bg-gradient-to-r from-[#3F55A5] to-[#A3519F] text-white">Post now</button>
                    }
                </form>
            </div>
        </div>
    );
};

export default SellAnimal;