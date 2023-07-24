
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    
    const { signin } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        signin(data.email, data.password)
            .then(result => {
                const logedUser = result.user;
                console.log(logedUser)
                reset()
                Swal.fire('Login successfull')
                navigate(from, { replace: true })

            })
    }



    return (
        
        <div>
            <div className="hero min-h-screen bg-[--second-bg-color]">

                <div className="hero-content">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[--bg-color]">
                        <h2 className='text-center text-3xl font-semibold mt-3 text-[--text-color]'>Please <span className='text-[--main-color]'>Login</span></h2>
                        {/* <form onSubmit={handelLogin} className="card-body"> */}
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[--text-color] font-semibold text-lg">Email</span>
                                </label>
                                <input type="email"{...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[--text-color] font-semibold text-lg">Password</span>
                                </label>
                                <input type="password"{...register("password", { required: true })} name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-[--text-color] text-lg">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="bg-[--main-color] py-3 rounded-md text-[--bg-color] font-semibold text-xl cursor-pointer" type="submit" value="Login" />
                                <p className='text-center text-[--text-color] font-semibold text-lg'><span>Don't have an Account?</span><Link to="/register" className='text-[--main-color] underline'>Register</Link></p>
                            </div>
                            <SocialLogin></SocialLogin>
                        </form>

                    </div>
                </div>
            </div>
        </div>
       
    );
};

export default Login;