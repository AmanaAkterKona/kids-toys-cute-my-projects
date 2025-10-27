import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../components/Header';
import LatestToys from '../components/LatestToys';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homelayouts/LeftAside';
import RightAside from '../components/homelayouts/RightAside';
import Footer from '../components/Footer';
import Loading from './pages/Loading';


const HomeLayout = () => {
    const { state } = useNavigation()
    return (
        <div className='bg-blue-50'>
            <header>
                <nav className='w-11/12 mx-auto my-3 bg-blue-100'>
                   <Navbar></Navbar>
                </nav>

                
                <div className="w-11/12 mx-auto my-3 gap-4 grid grid-cols-12 
                bg-gradient-to-b from-[#D4EEF8] via-[#8CCDEB] to-[#5AB4E0] 
                bg-[length:100%_100%] bg-no-repeat transition-all duration-700 ease-in-out ">
                <section className="col-span-9 ">
                  <Header />
                 
                </section>
                <section className="col-span-3">
                  <RightAside />
                </section>
               </div>
                <section className='w-11/12 mx-auto my-3'>
                    <LatestToys></LatestToys>
                </section>
                
            </header>

            <main className='w-11/12 mx-auto my-3  grid grid-cols-12 gap-5'>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main col-span-9'>
                  {state=="loading"? <Loading/> : <Outlet></Outlet>} 
                    </section>
               
            </main>
            <section className=''>
                <Footer></Footer>
            </section>
        </div>
    );
};

export default HomeLayout;