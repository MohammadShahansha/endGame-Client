import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const College = () => {

    const [colleges, setColleges] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/colleges')
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])

    console.log(colleges)

    return (
        <div className='bg-[--second-bg-color] py-10 px-3 md:px-28 lg:px-40'>
            <h2 className='text-5xl font-bold text-[--text-color] mb-5 text-center'>Populer <span className='text-[--main-color]'>Colleges</span></h2>
            {
                colleges.map(college => <div key={college._id}>
                    <div className="grid grid-cols-1 md:grid-cols-2 bg-[--bg-color] rounded-md items-center shadow-xl mb-3">
                        <figure className='ps-7'><img className='h-[450px] w-[500px] rounded-md' src={college.image} alt="Album" /></figure>
                        <div className="card-body text-[--text-color]">
                            <h2 className="font-bold text-3xl mb-2">{college.name}</h2>
                            <p className='font-bold text-xl'>Admission: <span className='font-medium text-lg'>{college.admission_dates}</span></p>
                            <div>
                                <h2 className='font-bold text-xl'>Events:</h2>
                                {
                                    college.events.map((event, index) => <div key={index}>
                                        <p className='font-medium text-lg ps-10'>{event.name}</p>
                                    </div>)
                                }

                            </div>
                            <div>
                                <h2 className='font-bold text-xl'>Sports:</h2>
                                {
                                    college.sports.map((sport, index) => <div key={index}>
                                        <p className='font-medium text-lg ps-10'>{sport.name}</p>
                                    </div>)
                                }

                            </div>
                            
                            <p className='text-xl'>{college.research_history}</p>

                            <div className="card-actions justify-end">
                               <Link to={`/college/${college._id}`} className='bg-[--main-color] text-[--bg-color] py-3 px-5 rounded-md text-xl font-medium'>See Details</Link>
                            </div>
                        </div>

                    </div>
                </div>)

            }

        </div>
    );
};

export default College;