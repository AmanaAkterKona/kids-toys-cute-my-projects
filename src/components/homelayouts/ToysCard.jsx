import React, { useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const ToysCard = ({ toys }) => {
  const { toyId } = toys;
  const imageURL = toys.pictureURL?.replace('.com.com', '.com');
  const thumbnailURL = toys.thumbnail || imageURL;
  const shortDescription =
    toys.description.length > 100
      ? toys.description.slice(0, 100) + '...'
      : toys.description;

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-500" />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400" />);
    }
    return stars;
  };

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white m-4 hover:shadow-xl border border-gray-200 relative">
      <div className="px-4 pt-4">
        <img className="w-full h-64 object-contain rounded-lg bg-gray-100" src={imageURL} alt={toys.toyName} />
      </div>
      <div className="px-5 py-4">
        <h2 className="font-bold text-2xl mb-3 text-cyan-700">{toys.toyName}</h2>
        <p className="text-gray-700 text-base mb-3">{shortDescription}</p>

       
        <Link
          to={`/toys-details/${toyId}`}
          className="btn btn-sm bg-pink-600 hover:bg-pink-700 text-white rounded-md px-4 py-2"
        >
          View More
        </Link>

        <div className="flex justify-between items-center mt-4">
          <button className="bg-cyan-600 text-white font-semibold rounded-lg px-5 py-2">
            ${toys.price}
          </button>

          <div className="flex items-center gap-1">
            {renderStars(toys.rating)}
            <span className="text-gray-600 ml-1">({toys.rating})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToysCard;
