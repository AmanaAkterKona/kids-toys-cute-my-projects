import React, { Suspense } from "react";
import Categories from "../Categories";
import sideImg from "../../assets/side imge 2.jpg";
const ColorfulLoader = () => {
  return (
    <div className="flex justify-center items-center h-60">
      <div
        className="
          relative w-20 h-20 
          border-8 border-t-transparent 
          border-r-pink-500 border-b-yellow-400 border-l-cyan-500 
          rounded-full 
          animate-spin
          transition-transform duration-500 hover:scale-125 hover:rotate-180
          shadow-[0_0_25px_rgba(0,0,0,0.2)]
        "
      >
        <div className="absolute inset-2 rounded-full bg-gradient-to-r from-pink-400 via-yellow-400 to-cyan-400 blur-[2px] animate-pulse"></div>
      </div>
    </div>
  );
};

const LeftAside = () => {
  return (
    <div>
      <Suspense fallback={<ColorfulLoader />}>
        <Categories />
      </Suspense>
       
      <div className="py-2"><p className="text-xl font-bold text-gray-500">Your Favorite One is...</p><img src={sideImg} alt="" /></div>
    </div>
  );
};

export default LeftAside;
