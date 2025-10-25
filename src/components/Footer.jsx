import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo navbar.avif"; // নিজের logo image বসাও

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#D4EEF8] via-[#8CCDEB] to-[#5AB4E0] mt-16  text-gray-800">
      <div className="w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand Section */}
        <div className="text-center md:text-left">
          <img src={logo} alt="ToyTopia Logo" className="w-24 mx-auto md:mx-0 rounded-xl" />
          <h2 className="text-3xl font-bold text-pink-700 mt-4">ToyTopia</h2>
          <p className="text-gray-700 mt-2">
            A joyful world of toys! Discover, play, and learn with fun collections for kids of all ages.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold text-cyan-700 mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-pink-600">Home</a></li>
            <li><a href="/about" className="hover:text-pink-600">About</a></li>
            <li><a href="/toys" className="hover:text-pink-600">All Toys</a></li>
            <li><a href="/contact" className="hover:text-pink-600">Contact</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-2xl font-semibold text-cyan-700 mb-3">Customer Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-pink-600">Help Center</a></li>
            <li><a href="#" className="hover:text-pink-600">FAQs</a></li>
            <li><a href="#" className="hover:text-pink-600">Shipping Info</a></li>
            <li><a href="#" className="hover:text-pink-600">Return Policy</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold text-cyan-700 mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-5 text-3xl text-pink-700">
            <a href="#" className="hover:text-cyan-600"><FaFacebook /></a>
            <a href="#" className="hover:text-cyan-600"><FaInstagram /></a>
            <a href="#" className="hover:text-cyan-600"><FaTwitter /></a>
            <a href="#" className="hover:text-cyan-600"><FaYoutube /></a>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="bg-blue-200 py-4 text-center text-gray-700 text-sm rounded-b-2xl">
        © {new Date().getFullYear()} <span className="font-semibold text-pink-700">ToyTopia</span> | All Rights Reserved 🎈
      </div>
    </footer>
  );
};

export default Footer;
