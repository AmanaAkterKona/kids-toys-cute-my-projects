import React from 'react';
import { FaHeart, FaSmile, FaCheckCircle, FaLightbulb } from 'react-icons/fa';
import softImg from "../assets/img cute.jpg";
const About = () => { 
    return (
      
        <div className="bg-amber-50 py-16 sm:py-24"> 
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center mb-16">
                    <p className="text-base font-semibold text-yellow-600 tracking-wide uppercase">
                        Our Story
                    </p>
                    
                    <h2 className="mt-2 text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
                        Playing is Learning.
                    </h2>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        We believe that every moment of play is an opportunity for discovery, creativity, and joy.
                    </p>
                </div>

               
                <div className="relative bg-white rounded-3xl p-10 md:p-16 shadow-2xl overflow-hidden border-l-8 border-yellow-500">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                       
                        <div className="mb-10 lg:mb-0">
                            <h3 className="text-3xl font-bold text-gray-800 sm:text-4xl mb-4">
                                Our Mission: More Than Just Toys
                            </h3>
                            <p className="mt-3 text-lg text-gray-700">
                                'Kids Toys Cute Projects' was founded with a simple goal: to curate a collection of toys that are not only fun but also **enriching and safe**. As parents ourselves, we understand the importance of quality playtime. Every item on our shelf is hand-picked to ensure it sparks **imagination, encourages skill development,** and brings genuine smiles.
                            </p>
                            <p className="mt-4 text-lg text-gray-700">
                                We are committed to fostering a world where kids can play freely and dream big. We're not just selling toys; **we're investing in happy childhoods.**
                            </p>
                        </div>
                        
                       
                        <div className="relative h-64 md:h-96 rounded-2xl shadow-xl overflow-hidden">
                            <img
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                src={softImg}
                                alt="Children playing with toys"
                            />
                        </div>
                    </div>
                </div>

               
                <div className="mt-20">
                    <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
                        Why Choose Us?
                    </h3>
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10">
                        
                       
                        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300">
                            <FaCheckCircle className="h-10 w-10 text-green-600 mb-4" />
                            <dt className="text-lg font-medium text-gray-900">Safety First</dt>
                            <dd className="mt-2 text-base text-gray-600">
                                All toys are non-toxic and compliant with international safety standards (ASTM/EN71).
                            </dd>
                        </div>

                       
                        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300">
                            <FaLightbulb className="h-10 w-10 text-amber-500 mb-4" />
                            <dt className="text-lg font-medium text-gray-900">Learn & Grow</dt>
                            <dd className="mt-2 text-base text-gray-600">
                                We focus on toys that boost STEM skills, creativity, and cognitive development.
                            </dd>
                        </div>

                  
                        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300">
                            <FaHeart className="h-10 w-10 text-rose-500 mb-4" />
                            <dt className="text-lg font-medium text-gray-900">Hand-Picked Joy</dt>
                            <dd className="mt-2 text-base text-gray-600">
                                Only the best, most unique, and adorable items make it into our exclusive collection.
                            </dd>
                        </div>

                        
                        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300">
                            <FaSmile className="h-10 w-10 text-blue-500 mb-4" />
                            <dt className="text-lg font-medium text-gray-900">Customer Delight</dt>
                            <dd className="mt-2 text-base text-gray-600">
                                Dedicated support and hassle-free returns to ensure a perfect shopping experience.
                            </dd>
                        </div>

                    </dl>
                </div>

               
                <div className="mt-20 text-center">
                   
                    <a 
                        href="/shop" 
                        className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-xl font-medium rounded-full shadow-lg text-white bg-yellow-600 hover:bg-yellow-700 transition duration-300 transform hover:scale-105"
                    >
                        Start Your Play Journey
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;