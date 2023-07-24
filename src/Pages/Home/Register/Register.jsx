import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Provider/AuthProvider';
// import SocialLogin from '../Shared/SocialLogin/SocialLogin';


const Register = () => {


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, userProfile } = useContext(AuthContext)

    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const userCreated = result.user;
                console.log(userCreated);
                userProfile(data.name, data.photoURL)
                .then(() => {
                    console.log(' Profile Update');
                    reset();
                    Swal.fire('Registration Successfull');
                })
                .catch(error => console.log(error))
                    
            })
    };

    return (
        <div>
            <div className="hero min-h-screen bg-[--second-bg-color]">

                <div className="hero-content ">
                    
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  bg-[--bg-color]">
                        <h2 className='text-center text-3xl font-semibold mt-3 text-[--text-color]'>Please Register</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[--text-color] font-semibold text-lg">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name='name' placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className='text-red-500'>This field is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[--text-color] font-semibold text-lg">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-500'>This field is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[--text-color] font-semibold text-lg">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true, minLength: 6, pattern: /(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/ })} name='password' placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'require' && <span className='text-red-500'>Passwored is required</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-500'>passworde must be 6 cherecter</span>}
                                {errors.password?.type === 'pattern' && <span className='text-red-500'>Must be at least one digit, one uppercase and lowerCase and one Special cherecter</span>}
                            </div>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[--text-color] font-semibold text-lg">Photo URL</span>
                                </label>
                                <input type="text" name='photo' {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className='text-red-500'>This field is required</span>}
                            </div>

                            <div className="form-control mt-6">
                                <input className="bg-[--main-color] py-3 rounded-md text-[--bg-color] font-semibold text-xl cursor-pointer" type="submit" value="Register" />
                                <p className='text-center text-[--text-color] font-semibold text-lg'><span>Already have an Account?</span><Link to="/login" className='text-blue-500 underline'>Login</Link></p>
                            </div>

                        </form>
                        {/* <SocialLogin></SocialLogin> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;