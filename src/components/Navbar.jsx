import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from "../assets/logo navbar.avif";
import icons from "../assets/icons8-user-24.png";
const Navbar = () => {
    return (
        <div className='flex justify-between items-center py-5 '>

           <div className=''> <img src={logo} alt="" /></div>

           <div className='nav flex gap-5 text-xl font-semibold text-cyan-600'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/toys">All Toys</NavLink>
           </div>
           <div className='login-btn flex gap-3'>
            <img className='h-10 w-10' src={icons} alt="" />
            <Link to="/auth/login" className='btn bg-pink-900 text-xl text-white rounded-lg py-6 px-8'>Login</Link>
           </div>
        </div>
    );
};

export default Navbar;