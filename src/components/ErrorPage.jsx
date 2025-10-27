import React from 'react';
import { Link } from 'react-router';
import errorImg from "../assets/error-404.png";
import Navbar from './Navbar';
import Footer from './Footer';

const ErrorPage = () => {
  return (
   <div className='bg-blue-50 w-11/12 mx-auto mb-5 '>
    <div className='py-5 px-10 bg-blue-100'>
        <Navbar></Navbar>
    </div>
     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-pink-50 text-center px-4">
       


      <img
        src={errorImg}
        alt="404 Error"
        className="w-72 md:w-96 mb-6 drop-shadow-lg"
      />

      
      <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600 mb-2">
        Oops! Page Not Found
      </h1>
      <p className="text-gray-600 text-lg mb-6 max-w-md">
        The page you’re looking for doesn’t exist or may have been moved.
      </p>

   
      <Link
        to="/"
        className="btn bg-gradient-to-r from-cyan-600 to-pink-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-transform"
      >
        Go Back Home
      </Link>

      
    </div>
    <div>
        <Footer></Footer>
      </div>
   </div>
  );
};

export default ErrorPage;
