import React, { useEffect, useState } from 'react';

const Review = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/getreview')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews)
    return (
        <div className='bg-[-bg-color] pt-10 text-[--text-color]'>
            <h2 className='text-5xl font-bold text-[--text-color] mb-5 text-center'>Rev<span className='text-[--main-color]'>iews</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-20'>
                {
                    reviews.map(item => <div key={item._id}>
                        <div className="rounded-2xl bg-[--second-bg-color] shadow-xl">
                            <div className="p-2">
                            <h2 className='font-bold text-xl'>Feedback: <span className='font-medium text-lg'>{item.feedback}</span></h2>
                            <h2 className='font-bold text-xl'>Rating: <span className='font-medium text-lg'>{item.rating}</span></h2>
                           
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <hr className='mt-20' />
        </div>
    );
};

export default Review;