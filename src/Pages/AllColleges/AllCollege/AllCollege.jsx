import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllCollege = () => {
    const [allCollege, setAllCollege] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allColleges')
            .then(res => res.json())
            .then(data => setAllCollege(data))
    }, [])
    console.log(allCollege)
    return (
        <div className='bg-[--second-bg-color] py-10 '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:mx-20 rounded-md'>
                {
                    allCollege.map(item => <div className='bg-[--bg-color] rounded-lg' key={item._id}>
                        <h2 className='text-[--text-color] font-bold text-2xl text-center py-5'>{item.name}</h2>
                        <div className="  shadow-xl">
                            <figure className='rounded-md'><img className='md:h-[300px] px-2 rounded-[15px]' src={item.college_image} alt="Collage Image" /></figure>
                            <div className="text-[--text-color] px-3">
                                 <p className='font-bold text-xl mb-[-7px]'>Admission: <span className='font-normal text-lg'>{item.admission_date}</span></p>
                                 <p className='font-bold text-xl  mb-[-7px] '>Number of Resurch: <span className='font-normal text-lg'>{item.num_research}</span></p>
                                 <p className='font-bold text-xl '>Rating: <span className='font-normal text-lg'>{item.rating}</span></p>
                           
                                <div className="card-actions justify-end pb-5">
                                    <Link to={`/detailCollege/${item._id}`}  className='bg-[--main-color] text-[--bg-color] py-3 px-5 rounded-md text-xl font-medium'>See Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default AllCollege;