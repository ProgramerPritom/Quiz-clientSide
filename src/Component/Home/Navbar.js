import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from './capitol 1.png'

const Navbar = () => {

    const navigate = useNavigate()

    const handleSignUp = ()=>{
        navigate('/login');
    }


    return (
        <div id='navbar-area' class="navbar">
            <div class="navbar-start">
                <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Test</Link></li>
                    <li><Link to="/">Pricing</Link></li>
                </ul>
                </div>
                <Link class="normal-case text-xl">
                    <img className='Logo-img' src={logo} alt="" />
                </Link>
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Test</Link></li>
                <li><Link to="/">Pricing</Link></li>
                
                </ul>
            </div>
            <p onClick={handleSignUp} className='signup-btn'>SignUp</p>
            
            
            </div>
    );
};

export default Navbar;