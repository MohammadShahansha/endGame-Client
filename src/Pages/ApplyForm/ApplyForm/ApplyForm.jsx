import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const ApplyForm = () => {

    const college = useLoaderData()
    // console.log(college)
    const { _id } = college;
    // console.log(_id)

    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        const {  name, image, phone, birthday, address, subject, email } = data;
        if (user && user.email) {
            // console.log(classe)
            const savedClass = { name, image, phone, birthday, address, subject, email, id: _id}
            fetch('http://localhost:5000/candidate', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(savedClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire('Successfully applyed')
                    }
                })
        }
    };
    // console.log(errors);

    return (
        <div className='bg-[--second-bg-color]'>
            <div className='w-full rounded-md py-10'>
                <div>
                    <div className="px-10 rounded-md md:my-10">
                        <h2 className='text-5xl font-bold text-[--text-color] text-center mb-5'>Apply <span className='text-[--main-color]'>College</span></h2>
                        <form onSubmit={handleSubmit(onSubmit)} className='mb-5 text-[--text-color]'>
                            <div className="md:flex gap-5">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-[--text-color] font-semibold text-lg ">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} placeholder="Input Your Name" className="input input-bordered text-[--bg-color] w-full" />
                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-[--text-color] font-semibold text-lg">Image</span>
                                    </label>
                                    {/* <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " /> */}
                                    <input type="text" {...register("image", { required: true })} placeholder="PhotoURL" className="input input-bordered text-[--bg-color] w-full" />

                                </div>
                            </div>
                            <div className="md:flex gap-5">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-[--text-color] font-semibold text-lg">Subject</span>
                                    </label>
                                    <input type="text" {...register("subject", { required: true })} placeholder="Subject Name" className="input input-bordered text-[--bg-color] w-full" />
                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-[--text-color] font-semibold text-lg">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} placeholder="Your Email" className="input input-bordered text-[--bg-color] w-full" />

                                </div>
                            </div>
                            <div className="md:flex gap-5">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-[--text-color] font-semibold text-lg">Phone Number</span>
                                    </label>
                                    <input type="number" {...register("phone", { required: true })} placeholder="Phone Number" className="input input-bordered text-[--bg-color] w-full" />
                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-[--text-color] font-semibold text-lg">Address</span>
                                    </label>
                                    <input type="text" {...register("address", { required: true })} placeholder="Address" className="input input-bordered text-[--bg-color] w-full" />

                                </div>

                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-[--text-color] font-semibold text-lg">Date of Birth</span>
                                </label>
                                <input type="text" {...register("birthday", { required: true })} placeholder="Date of Birth" className="input input-bordered w-full text-[--bg-color]" />

                            </div>
                            <div className='text-center my-5 pb-5'>
                                <input className='text-center bg-[--main-color] px-5 py-3 rounded-md text-lg font-bold cursor-pointer' type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ApplyForm;