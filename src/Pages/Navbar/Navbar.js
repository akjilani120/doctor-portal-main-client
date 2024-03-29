import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
  const [user] = useAuthState(auth)

  const logOut = () => {
    
    signOut(auth)
    localStorage.removeItem("accessToken")
    
  }
  const navMenu =
    [
      <li><Link to="/home">Home</Link></li>,
      <li><Link to="/about">About</Link></li>,
      <li><Link to="/appointment">Appointment</Link></li>,
      <li><Link to="/reviews">Reviews</Link></li>,
      <li><Link to="/ContactUs">Contact Us</Link></li>,
      <li>{
           user &&
        <Link to="/headDashboard">Dashboard</Link>}</li>,
      <li>{user ?

        <button class="btn btn-active btn-ghost" onClick={logOut}> log out </button> :
        <Link to="/login">Login</Link>}</li>
    ]

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              
                {navMenu}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Doctor Portal</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
           
                {navMenu}
          </ul>
        </div>
       <div className='navbar-end lg:hidden'>
       <label tabindex="1" for="dashboard-sidenav" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
       
       </div>
      </div>
    </div>
  );
};

export default Navbar;