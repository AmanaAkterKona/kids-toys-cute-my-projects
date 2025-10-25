import React from 'react';
import { FaFacebook, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import cuteToys from "../../assets/hero img.webp";
const FindUs = () => {
  return (
    <div>
      <h2 className='font-bold mb-5'>Find Us On</h2>

      
    <div className='join join-vertical w-full pr-2'>
        <button className='btn join-item justify-start'><FaFacebook></FaFacebook> Facebook</button>
        <button className='btn join-item justify-start'><FaTwitter></FaTwitter> Twitter</button>
        <button className='btn join-item justify-start'><FaInstagram></FaInstagram> Instagram</button>

    </div>
    <div>
        <img src={cuteToys} alt="" />
    </div>
    </div>
  );
};

export default FindUs;
