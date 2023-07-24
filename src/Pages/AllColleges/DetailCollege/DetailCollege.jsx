import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailCollege = () => {
    const detailCollege = useLoaderData()
    console.log(detailCollege)
    const { name, college_image, admission_date, num_research, rating, events, sports, _id } = detailCollege
    return (
        <div className='bg-[--bg-color] text-[--text-color]'>
            <div className='bg-[--second-bg-color] pt-10'>
                <h2 className='font-bold text-[--text-color] text-4xl md:text-5xl text-center'>{name}</h2>
                <figure><img className='opacity-60 w-full mt-5' src={college_image} alt="" /></figure>

            </div>
            <div>
                <h2 className='font-bold text-[--text-color] text-4xl md:text-5xl text-center py-5'>Educational <span className='text-[--main-color]'>Information</span></h2>
                <div className='md:w-[800px] lg:w-[900px] mx-auto px-3'>
                    <p className='font-bold text-xl mb-[-7px]'>Admission: <span className='font-normal'>Admission held in <span className='text-[--main-color]'>{admission_date}</span>. If you Want to know details please, </span> <a href="#" className='font-normal text-[--main-color] underline'>Visite Here.</a></p>
                    <div className='grid grid-cols-1 md:grid-cols-3 mt-5  gap-5'>
                        <div className='bg-[--second-bg-color] rounded-2xl md:pt-5 ps-3'>
                            <p className='font-bold text-xl  md:mb-[-7px] '>Number of Resurch: <span className='font-normal text-lg'>{num_research}</span></p>
                            <p className='font-bold text-xl '>Rating: <span className='font-normal text-lg'>{rating}</span></p>
                        </div>
                        <div className='bg-[--second-bg-color] rounded-2xl pt-3 ps-3'>
                            <div>
                                <h2 className='font-bold text-xl '>Events:</h2>
                                {
                                    events.map((event, index) => <div className='ps-10' key={index}>
                                        <h2 className='font-normal text-lg'>{event.event_name}</h2>
                                    </div>)
                                }
                            </div>
                        </div>
                        <div className='bg-[--second-bg-color] rounded-2xl py-3 ps-3'>
                            <div>
                                <h2 className='font-bold text-xl '>Sports:</h2>
                                {
                                    sports.map((sport, index) => <div className='ps-10' key={index}>
                                        <h2 className='font-normal text-lg'>{sport.name}</h2>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* -----------------------------------
            ------------------events dispalay----------here in details */}
            <div className='bg-[--second-bg-color] pt-5 mt-10'>

                <h2 className='font-bold text-[--text-color] text-5xl text-center mb-3'>Eve<span className='text-[--main-color]'>nts</span></h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-10 md:mx-10 lg:mx-20'>
                    {
                        events.map((event, index) => <div className='bg-[--bg-color] rounded-lg pb-10' key={index}>

                            {/* <h2 className='text-[--text-color] font-bold text-2xl text-center py-5'>{item.name}</h2> */}
                            <div className="  shadow-xl">
                                <figure className='rounded-md'><img className='md:h-[300px] w-full rounded-[15px]' src={event.event_image} alt="Collage Image" /></figure>
                                <div className="text-[--text-color] px-3">
                                    <p className='font-bold text-xl mb-[-7px]'>Name of Event: <span className='font-normal text-lg'>{event.event_name}</span></p>
                                    <p className='font-bold text-xl  mb-[-7px] '>Author: <span className='font-normal text-lg'>{event.author}</span></p>
                                    <p className='font-bold text-xl'>Description: <span className='font-normal text-lg'>{event.description}</span></p>
                                </div>
                            </div>

                        </div>)
                    }
                </div>
            </div>


        </div>
    );
};

export default DetailCollege;