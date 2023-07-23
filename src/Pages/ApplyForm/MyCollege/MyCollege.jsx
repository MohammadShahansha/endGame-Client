import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyCollege = () => {
    const [myCollege, setMyCollege] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/candidate')
            .then(res => res.json())
            .then(data => setMyCollege(data))
    }, [])
    console.log(myCollege)
    // const {name, _id} = myCollege.id;
    return (
        <div className='bg-[--second-bg-color]'>
            <div className='mx-20 py-10'>
                {
                    myCollege.map(item => <div w-full className='flex gap-10 items-center' key={item._id}>
                        <figure className='w-1/2'><img src={item.image} alt="" className=' border-2 border-solid border-[--main-color]' /></figure>
                        <div className='w-1/2'>
                            <h2 className='font-semibold text-lg text-[--text-color]'>Name: <span className='font-normal'>{item.name}</span></h2>
                            <h2 className='font-semibold text-lg text-[--text-color]'>Subject: <span className='font-normal'>{item.subject}</span></h2>
                            <h2 className='font-semibold text-lg text-[--text-color]'>Email: <span className='font-normal'>{item.email}</span></h2>
                            <h2 className='font-semibold text-lg text-[--text-color]'>Date of Birth: <span className='font-normal'>{item.birthday}</span></h2>
                            <h2 className='font-semibold text-lg text-[--text-color]'>Phone: <span className='font-normal'>{item.phone}</span></h2>
                            <h2 className='font-semibold text-lg text-[--text-color]'>Address: <span className='font-normal'>{item.address}</span></h2>
                            <h2 className='font-semibold text-lg text-[--text-color]'>Your College: <span className='font-normal'>{item.id.name}</span></h2>
                            <div className='mt-5'>
                                <p className='font-semibold text-lg text-[--text-color] mb-4'>If you want to see Detail about your college, please click see detail</p>
                                <div className="card-actions justify-end pb-5">
                                    <Link to={`/detailCollege/${item.id._id}`} className='bg-[--main-color] text-[--bg-color] py-3 px-5 rounded-md text-xl font-medium'>See Details</Link>
                                </div>
                            </div>
                        </div>



                    </div>)
                }
            </div>
           


        </div>
    );
};

export default MyCollege;