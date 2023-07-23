import React from 'react';
import College from '../College/College';
import GraduateGallary from '../GraduateGallary/GraduateGallary';

const Home = () => {
    return (
        <div className='mt-16 bg-[--bg-color] pb-10'>
            {/* Serch button--------------------------------------- */}
            <div className="form-control bg-[--second-bg-color] pt-10">
                <div className="input-group flex justify-center">
                    <input type="text" placeholder="Search College" className="input text-xl border-gray-400 w-full px-2 md:w-[500px] lg:w-[700px]" />
                    <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
            <College></College>
            <GraduateGallary></GraduateGallary>

        </div>
    );
};

export default Home;