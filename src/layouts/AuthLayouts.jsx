import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import About from '../components/About';
import Details from './pages/Details';

const AuthLayouts = () => {
    return (
        <div className='bg-blue-50 min-h-screen w-11/12 mx-auto'>
          <header className='w-12/12 mx-auto py-5 bg-blue-100 px-10 '>
            <Navbar></Navbar>
          </header>
          <main className='w-11/12 mx-auto py-5'>
          <Outlet></Outlet>
          <About></About>
         

          </main>
          <section><Footer></Footer></section>
        </div>
    );
};

export default AuthLayouts;