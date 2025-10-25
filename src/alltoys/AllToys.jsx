import React from 'react';
import CategoryToys from '../layouts/pages/CategoryToys';
import ToysCard from '../components/homelayouts/ToysCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const AllToys = () => {
    return (
        <div>
           <div><Navbar></Navbar></div>

           <Outlet></Outlet>

          <div> <Footer></Footer></div>
        </div>
    );
};

export default AllToys;