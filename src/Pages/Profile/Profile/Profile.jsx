import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='bg-[--second-bg-color] py-10'>
            <div className='mb-5'>
                <h2 className='font-bold text-[--text-color] text-4xl text-center'>User <span className='text-[--main-color]'>Information</span></h2>
            </div>
            <div className='flex justify-center'>
                <div className="card card-compact w-96 bg-[--bg-color] shadow-xl">
                    <figure><img src={user.photoURL} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className='font-semibold text-xl text-[--text-color]'>Name: <span className='font-normal'>{user.displayName}</span></h2>
                        <h2 className='font-semibold text-xl text-[--text-color]'>Email: <span className='font-normal'>{user.email}</span></h2>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;