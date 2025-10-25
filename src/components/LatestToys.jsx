import React from 'react';
import img1 from '../assets/hero-img2.webp';
import img2 from '../assets/hero img4.webp';
import img3 from '../assets/hero img.webp';
import Marquee from "react-fast-marquee";
import latest from "../assets/toys logo2.webp";

const LatestToys = () => {
    return (
         <div className="bg-blue-100 py-10 flex gap-4">
            <div className='rounded-2xl bg-gradient-to-b from-[#D4EEF8] via-[#8CCDEB] to-[#5AB4E0]'><button className="  py-7 px-8 rounded-2xl text-4xl font-semibold text-cyan-600 mt-20 ">
            <span className='text-4xl font-bold'>Upcoming Toys....</span>
            <img className='w-90 h-55 rounded-full mt-10 ' src={latest} alt="" />
          </button></div>
      <Marquee speed={50} gradient={false} pauseOnHover={true} speed={100}>
        
        <div className="flex items-center gap-10">
          
          
          <img src={img1} alt="toy" className="h-[px]" />
          <div><p className="text-6xl font-semibold text-cyan-600 mr-4"> Soft toys for your kids</p>
          <p className='text-cyan-900 font-bold text-xl'>get <span className='text-6xl font-bold text-amber-500'>20%</span> flate your first purchase.......!!</p>
          </div>

         
          <img src={img2} alt="toy" className="h-[px]" />
          <p className="text-6xl font-semibold text-cyan-600 mr-4">flate your first purchase <br/>Upto<span className='font-bold text-7xl text-neutral-500'> 50%...</span>
          <button>Shop</button>
          
          </p>

         
          <img src={img3} alt="toy" className="h-[px]" />
          <p className="text-6xl font-semibold text-cyan-600 mr-4"> More Toys Coming Soon! <br/>discount!!<span class={"text-8xl font-bold text-neutral-600"}>40% </span></p>
        </div>
      </Marquee>
    </div>
    );
};

export default LatestToys;