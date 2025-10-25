import React, { useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa'; // for stars

const ToysCard = ({ toys }) => {
  const [readMore, setReadMore] = useState(false);

  // Fix URL issue if needed
  const imageURL = toys.pictureURL.replace('.com.com', '.com');

  // Description truncate
  const shortDescription =
    toys.description.length > 100
      ? toys.description.slice(0, 100) + '...'
      : toys.description;

  // Generate stars based on rating
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
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white m-4 hover:shadow-xl transition-all duration-300 border border-gray-200">
      {/* Image */}
      <div className="px-4 pt-4">
        <img
          className="w-full h-64 object-contain rounded-lg bg-gray-100"
          src={imageURL}
          alt={toys.toyName}
        />
      </div>

      {/* Details */}
      <div className="px-5 py-4">
        <h2 className="font-bold text-2xl mb-3 text-cyan-700">{toys.toyName}</h2>

        {/* Description + Read More Button */}
        <p className="text-gray-700 text-base mb-3">
          {readMore ? toys.description : shortDescription}
        </p>
        {toys.description.length > 100 && (
          <button
            onClick={() => setReadMore(!readMore)}
            className="btn btn-sm bg-pink-600 hover:bg-pink-700 text-white rounded-md px-4 py-2"
          >
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        )}

        {/* Price & Rating in same line */}
        <div className="flex justify-between items-center mt-4">
          <button className="bg-cyan-600 text-white font-semibold rounded-lg px-5 py-2">
            ${toys.price}
          </button>

          <div className="flex items-center gap-1">
            {renderStars(toys.rating)}
            <span className="text-gray-600 ml-1">({toys.rating})</span>
          </div>
        </div>

        <p className="text-gray-600 mt-3">Available: {toys.availableQuantity}</p>
      </div>
    </div>
  );
};

export default ToysCard;
