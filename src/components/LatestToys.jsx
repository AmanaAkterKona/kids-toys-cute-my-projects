import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import img1 from '../assets/hero-img2.webp';
import img2 from '../assets/hero img4.webp';
import img3 from '../assets/hero img.webp';

const LatestToys = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 py-12">
      
     
      <div className='text-center mb-12'>
        <h2 className="text-5xl md:text-6xl font-extrabold text-cyan-700 mb-4">Discover Our Exclusive Toy Collection</h2>
        <p className='text-xl md:text-2xl text-cyan-900 max-w-3xl mx-auto'>
          Explore fun, creative, and educational toys for your little ones. Exciting discounts await you on selected items!
        </p>
      </div>

    
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="max-w-6xl mx-auto"
      >
       
        <SwiperSlide>
          <div className='flex flex-col md:flex-row items-center justify-center gap-10 bg-white p-10 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500'>
            <img src={img1} alt="Soft Toy" className="w-72 h-72 rounded-2xl object-cover shadow-lg" />
            <div className='text-center md:text-left'>
              <h3 className="text-4xl md:text-5xl font-extrabold text-cyan-700 mb-4">Soft & Cuddly Toys</h3>
              <p className='text-lg md:text-xl text-cyan-900 mb-4'>
                Bring joy to your kids with soft companions! Enjoy <span className='text-3xl font-bold text-amber-500'>20% off</span> on your first purchase.
              </p>
              <button className="bg-cyan-700 hover:bg-cyan-800 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>

       
        <SwiperSlide>
          <div className='flex flex-col md:flex-row items-center justify-center gap-10 bg-white p-10 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500'>
            <img src={img2} alt="Toy Set" className="w-72 h-72 rounded-2xl object-cover shadow-lg" />
            <div className='text-center md:text-left'>
              <h3 className="text-4xl md:text-5xl font-extrabold text-cyan-700 mb-4">Thrilling Adventure Sets</h3>
              <p className='text-lg md:text-xl text-cyan-900 mb-4'>
                Race, build & play! Grab <span className='text-3xl font-bold text-amber-500'>50% off</span> on select items.
              </p>
              <button className="bg-cyan-700 hover:bg-cyan-800 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        
        <SwiperSlide>
          <div className='flex flex-col md:flex-row items-center justify-center gap-10 bg-white p-10 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500'>
            <img src={img3} alt="New Toys" className="w-72 h-72 rounded-2xl object-cover shadow-lg" />
            <div className='text-center md:text-left'>
              <h3 className="text-4xl md:text-5xl font-extrabold text-cyan-700 mb-4">Discover New Favorites</h3>
              <p className='text-lg md:text-xl text-cyan-900 mb-4'>
                Exciting toys are here! Enjoy up to <span className='text-3xl font-bold text-amber-500'>40% off</span> for a limited time.
              </p>
              <button className="bg-cyan-700 hover:bg-cyan-800 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default LatestToys;
