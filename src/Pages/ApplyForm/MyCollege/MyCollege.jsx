import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Provider/AuthProvider';

const MyCollege = () => {
    const [myCollege, setMyCollege] = useState([])
    useEffect(() => {
        fetch('https://endgame-server.onrender.com/candidate')
            .then(res => res.json())
            .then(data => setMyCollege(data))
    }, [])
    console.log(myCollege)


    const { user } = useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        const {  feedback, rating } = data;
        if (user && user.email) {
            // console.log(classe)
            const savedClass = { feedback, rating}
            fetch('https://endgame-server.onrender.com/review', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(savedClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        reset()
                        Swal.fire('Successfully applyed')
                    }
                })
        }
    };




    return (
        <div className='bg-[--second-bg-color]'>
            <div className='md:mx-5 lg:mx-20 py-10'>
                {
                    myCollege.map(item => <div w-full className='md:flex gap-10 items-center' key={item._id}>
                        <figure className='md:w-1/2'><img src={item.image} alt="" className=' lg:border-2 lg:border-solid lg:border-[--main-color]' /></figure>
                        <div className='md:w-1/2 px-3'>
                            <h2 className='font-semibold text-xl text-[--text-color]'>Name: <span className='font-normal'>{item.name}</span></h2>
                            <h2 className='font-semibold text-xl text-[--text-color]'>Subject: <span className='font-normal'>{item.subject}</span></h2>
                            <h2 className='font-semibold text-xl text-[--text-color]'>Email: <span className='font-normal'>{item.email}</span></h2>
                            <h2 className='font-semibold text-xl text-[--text-color]'>Date of Birth: <span className='font-normal'>{item.birthday}</span></h2>
                            <h2 className='font-semibold text-xl text-[--text-color]'>Phone: <span className='font-normal'>{item.phone}</span></h2>
                            <h2 className='font-semibold text-xl text-[--text-color]'>Address: <span className='font-normal'>{item.address}</span></h2>
                            <div className='mt-5'>
                                <h2 className='font-semibold text-xl text-[--text-color]'>Your College: <span className='font-normal'>{item.id.name}</span></h2>
                                <p className='font-semibold text-xl text-[--text-color] mb-4'>If you want to see Detail about your college, please click see detail</p>
                                <div className="card-actions justify-end pb-5">
                                    <Link to={`/detailCollege/${item.id._id}`} className='bg-[--main-color] text-[--bg-color] py-3 px-5 rounded-md text-xl font-medium'>See Details</Link>
                                </div>
                            </div>
                        </div>



                    </div>)
                }
            </div>
            <div>
                <div className='bg-[--bg-color]'>
                    <div className='w-full rounded-md py-10'>
                        <div>
                            <div className="px-10 rounded-md md:my-10">
                                <h2 className='text-5xl font-bold text-[--text-color] text-center mb-5'>Add <span className='text-[--main-color]'>Review</span></h2>
                                <form onSubmit={handleSubmit(onSubmit)} className='mb-5 text-[--text-color]'>

                                    <div className="">
                                        <div className="form-control md:w-1/2 mx-auto">
                                            <label className="label">
                                                <span className="label-text text-[--text-color] font-semibold text-lg">Feedback</span>
                                            </label>
                                            <textarea type="text" {...register("feedback", { required: true })} placeholder="Feedback" className="input input-bordered text-[--bg-color] w-full" />
                                        </div>
                                        <div className="form-control md:w-1/2 mx-auto">
                                            <label className="label">
                                                <span className="label-text text-[--text-color] font-semibold text-lg">Rating</span>
                                            </label>
                                            <input type="number" {...register("rating", { required: true })} placeholder="Rating" className="input input-bordered text-[--bg-color] w-full" />

                                        </div>

                                    </div>

                                    <div className='text-center my-5 pb-5'>
                                        <input className='text-center bg-[--main-color] px-5 py-3 rounded-md text-lg font-bold cursor-pointer' type="submit" value="Submit" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                    <div className="divider"></div> 
                </div>
            </div>


        </div>
    );
};

export default MyCollege;