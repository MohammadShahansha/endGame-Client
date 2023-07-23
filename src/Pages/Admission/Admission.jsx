import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Admission = () => {
    const [allCollege, setAllCollege] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allColleges')
            .then(res => res.json())
            .then(data => setAllCollege(data))
    }, [])

    return (
        <div className='bg-[--second-bg-color] text-center py-10'>
            <h2 className='text-[--text-color] text-3xl font-semibold'>Choise your college & click to apply</h2>
            <div className='mt-5'>
                {
                    allCollege.map(college => <div className='text-center' key={college._id}>
                        <Link to={`/apply/${college._id}`} className='font-semibold text-[--main-color] text-2xl underline'>{college.name}</Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Admission;