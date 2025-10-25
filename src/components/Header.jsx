import React from "react";

import bannerImg from "../assets/fluffy-toy-texture-close-up.jpg";
import RightAside from "./homelayouts/RightAside";

const Header = () => {
  return (
    <div className="" >
       <div
            style={{
              borderBottomRightRadius: "15px",
              backgroundImage: `url(${bannerImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "650px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              color: "white",
              
              overflow: "hidden",
            }}
          >
        <p
          className="text-cyan-600 font-bold"
          style={{ fontSize: "20px", letterSpacing: "1px" }}
        >
          The Unique Appeal of Toy Time Toys & Games
        </p>

        <h1
          className="text-cyan-900 font-bold"
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            margin: "10px 0",
          }}
        >
          Exclusive Toy Collection
        </h1>

        <p
          className="text-cyan-800 font-semibold text-xl"
          style={{ maxWidth: "650px", lineHeight: "1.6" }}
        >
          Praesent tristique magna sit amet purus gravida quis blandit.
        </p>

        <button
          className="mt-6 bg-cyan-700 hover:bg-cyan-800 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300"
        >
          Shop Now
        </button>
      </div>
     
    </div>
  );
};

export default Header;
