import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "aos/dist/aos.css";
import AOS from "aos";

import banner1 from "../assets/fluffy-toy-texture-close-up.jpg";
import banner2 from "../assets/hero img.webp";
import banner3 from "../assets/hero img4.webp";

AOS.init();

const Header = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="h-[650px]"
      >
        {[banner1, banner2, banner3].map((img, i) => (
          <SwiperSlide key={i}>
            <div
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-full h-[650px] flex flex-col items-center justify-center text-center relative"
            >
             
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>

              {/* content */}
              <div
                className="relative z-10 text-white space-y-4 px-4"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <p className="text-cyan-300 font-semibold text-lg tracking-wide">
                  The Unique Appeal of Toy Time Toys & Games
                </p>

                <h1 className="text-5xl md:text-6xl font-extrabold text-cyan-100 drop-shadow-lg">
                  Exclusive Toy Collection
                </h1>

                <p className="max-w-2xl mx-auto text-lg text-cyan-200">
                  Discover playful treasures crafted with love and imagination.
                  Perfect for kids, collectors, and dreamers alike!
                </p>

                <button className="mt-6 bg-cyan-700 hover:bg-cyan-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Header;
