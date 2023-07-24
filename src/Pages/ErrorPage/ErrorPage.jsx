import React from 'react';
import errorImg from '../../assets/images/error.jpg'
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <div className='text-center flex flex-col justify-center mt-10'>
           <Link className='flex justify-center mx-auto mt-20 items-center font-semibold text-2xl bg-[--main-color] px-8 py-3 rounded-md w-[200px]' to="/"><FaArrowCircleLeft></FaArrowCircleLeft> Go Home</Link>
            <div className='flex justify-center'>
                <img className=' w-[700px] h-[700px]' src={errorImg} alt="" />
            </div>

        </div>
    );
};

export default ErrorPage;