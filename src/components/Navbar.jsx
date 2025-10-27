import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import logo from "../assets/logo navbar.avif";
import icons from "../assets/icons.png";
import { AuthContext } from '../provider/AuthProvider';
import { CartContext } from '../provider/CartContext';
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);

  const handleLogOut = () => {
    logOut().then(() => {
      alert("You Logged Out successfully");
    }).catch((error) => console.log(error));
  };

  return (
    <div className="flex justify-between items-center py-7 px-7">
     
     
        <img src={logo} alt="logo" className="h-15 w-35" />
       

      
      <div className="nav flex gap-5 text-xl font-semibold text-cyan-600">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/auth">About</NavLink>
        <NavLink to="/details">Details</NavLink>
      </div>

     
      <div className="flex items-center gap-5">
      
        <div className="relative">
          <FaShoppingCart className="text-3xl text-pink-700" />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full px-2">
              {cartItems.length}
            </span>
          )}
        </div>

        
        <img className="h-12 w-12 rounded-full" src={`${user ?user.
photoURL : icons}`} alt="" />

        
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn bg-pink-900 text-white text-xl rounded-lg py-2 px-5"
          >
            LogOut
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="btn bg-pink-900 text-xl text-white rounded-lg py-2 px-5"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
