import React, { useContext } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { CartContext } from "../provider/CartContext";
import Link from "daisyui/components/link";

const ToysDetailsCard = ({ toys }) => {
  const { addToCart } = useContext(CartContext);

  if (!toys) return null;


  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400 text-lg" />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-300 text-lg" />);
    }
    return stars;
  };

  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-r from-[#E0F7FA] to-[#F1F8E9] rounded-3xl shadow-xl overflow-hidden p-6 md:p-10 max-w-5xl mx-auto my-10 border border-gray-200">
    
      <div className="flex-1 flex justify-center items-center">
        <img
          src={toys.pictureURL}
          alt={toys.toyName}
          className="rounded-2xl shadow-md w-full md:w-80 h-80 object-contain bg-white"
        />
      </div>

     
      <div className="flex-1 mt-6 md:mt-0 md:ml-10 space-y-4">
        <h2 className="text-3xl font-extrabold text-cyan-700">{toys.toyName}</h2>
        <p className="text-gray-700 text-lg">{toys.description}</p>

     
        <div className="flex items-center gap-5">
          <span className="text-2xl font-semibold text-pink-600">${toys.price}</span>
          <div className="flex items-center gap-1">
            {renderStars(toys.rating)}
            <span className="text-gray-600 ml-1">({toys.rating})</span>
          </div>
        </div>

      
        <div className="flex flex-wrap gap-3 mt-3">
          <span className="px-3 py-1 bg-cyan-100 text-cyan-800 font-medium rounded-full">
            Category: {toys.subCategory}
          </span>
          <span className="px-3 py-1 bg-green-100 text-green-800 font-medium rounded-full">
            In Stock: {toys.availableQuantity}
          </span>
        </div>

     
        <div className="bg-white p-4 rounded-xl shadow-inner border border-gray-100 mt-5">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Seller Information</h3>
          <p className="text-gray-700 font-medium">Name: {toys.sellerName}</p>
          <p className="text-gray-600 text-sm">Email: {toys.sellerEmail}</p>
        </div>

        
        <button
          onClick={() => {
            addToCart(toys);
            alert(`✅ ${toys.toyName} added to cart!`);
          }}
          className="mt-6 bg-gradient-to-r from-pink-500 to-cyan-600 hover:from-pink-600 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-xl transition-transform transform hover:scale-105 shadow-md"
        >
          Add to Cart
        </button>

       
        <div className="mt-10 bg-white shadow-inner rounded-2xl p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-cyan-700 mb-4">Try This Toy Now!</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("🎉 Thank you! We’ll contact you soon for a trial!");
              e.target.reset();
            }}
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="input input-bordered w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="input input-bordered w-full"
            />
            <button
              type="submit"
              className="btn bg-gradient-to-r from-cyan-600 to-pink-500 text-white hover:from-cyan-700 hover:to-pink-600 w-full"
            >
              Try Now
            </button>
          </form>
        </div>
      </div>
     
    </div>
  );
};

export default ToysDetailsCard;
