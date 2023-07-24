import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handelGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const logByGoogle = result.user;
                console.log(logByGoogle)

            })
    }
    return (
        <div className='mb-3'>
            <hr className='mb-2'/>
            <div className='text-center'>
                <button onClick={handelGoogleSignIn} className="btn btn-circle btn-outline text-[--text-color] text-center">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;