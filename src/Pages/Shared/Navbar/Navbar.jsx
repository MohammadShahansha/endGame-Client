import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext)

    const handelLogOut = () => {
        logOut()
        .then(() => {})
        .catch(error => console.log(error))
    }


    const navItem = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/allCollege">College</Link></li>
        <li><Link to="/admission">Admission</Link></li>
        <li><Link to="/dashboard/myclass">My College</Link></li>
        {
            user ? <>
                <button onClick={handelLogOut} className="btn btn-ghost">Logout</button>
                <button className="btn btn-ghost">{user.displayName}</button>
                
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        }
    </>
    return (
        <div className=' sticky top-0 z-10 mb-16'>
            <div className="navbar fixed top-0 text-[--text-color] bg-[--bg-color]">
                <div className="navbar">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 font-semibold text-[--text-color] bg-black rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Arts & Craft School</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-[--text-color] font-semibold text-xl px-1">
                        {navItem}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;