import React, { useEffect, useState } from 'react';

const CollegeDetails = () => {
    const [college, setCollege] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/colleges')
            .then(res => res.json())
            .then(data => setCollege(data))
    }, [])

    console.log(college)

    return (
        <div className=''>
            {
                college.map(college => <div key={college._id}>
                    <h1 className='text-[--text-color] font-bold text-5xl'>{college.name}</h1>
                    <div className="bg-[--bg-color] rounded-md items-center shadow-xl mb-3">
                        <figure className='ps-7'><img className='h-[450px] w-[500px] rounded-md' src={college.image} alt="Album" /></figure>
                        <div className="card-body text-[--text-color]">
                            <h2 className="font-bold text-3xl mb-2">{college.name}</h2>
                            <p className='font-bold text-xl'>Admission: <span className='font-medium text-lg'>{college.admission_dates}</span></p>
                            <div>
                            
                            </div>
                        </div>

                    </div>
                </div>)
            }

        </div>
    );
};

export default CollegeDetails;