import React from 'react';
import { useLoaderData } from 'react-router';
import { FaDollarSign, FaStar, FaTags } from 'react-icons/fa'; 
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Details = () => {
    
    const toysData = useLoaderData(); 

   
    if (!toysData || toysData.length === 0) {
        return (
            <div className="text-center py-20 bg-gray-50">
                <h2 className="text-3xl font-bold text-gray-700">No toys data found!</h2>
                <p className="text-gray-500 mt-2">Please check your loader function and data source.</p>
            </div>
        );
    }

    const defaultImageUrl = "https://via.placeholder.com/600x400?text=Toy+Image"; 

   
    const getImageUrl = (toy) => toy.pictureURL || toy.image || defaultImageUrl;


    return (
        <div className='w-11/12 mx-auto mb-5'>
          <div className='bg-blue-100'>  <Navbar></Navbar></div>
           
            <div className="py-12 md:py-20 bg-blue-50"> 
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                
                <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12 border-b-4 border-pink-200 pb-3">
                    Our Exclusive Toy Catalog
                </h1>

               
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {toysData.map((toy) => (
                        
                       
                        <div 
                            key={toy.id || toy.name} 
                            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-500 border border-indigo-100"
                        >
                            
                            {/* Toy Image */}
                            <img 
                                className="w-full h-64 object-cover p-2" 
                                src={getImageUrl(toy)} 
                                alt={toy.name || "Toy Image"} 
                                onError={(e) => { 
                                    e.target.onerror = null; 
                                    e.target.src = defaultImageUrl; 
                                }}
                            />

                            {/* Card Content */}
                            <div className="p-6">
                                
                              
                                <h3 className="text-2xl font-extrabold text-indigo-900 mb-3 truncate" title={toy.name || toy.title}>
                                    {toy.name || toy.title || "Toy Name"}
                                </h3>

                                {/* Price and Rating */}
                                <div className="flex justify-between items-center text-lg mb-4 border-b-2 border-gray-100 pb-3">
                                    <p className="flex items-center text-gray-900 font-bold">
                                      
                                        <FaDollarSign className="w-5 h-5 text-emerald-500 mr-2" /> 
                                        Price: <span className="ml-1 text-2xl font-extrabold text-red-600">{toy.price || 'N/A'}</span>
                                    </p>
                                    <p className="flex items-center text-gray-700">
                                      
                                        <FaStar className="w-4 h-4 text-amber-500 mr-1" /> 
                                        <span className="font-semibold">{toy.rating || 'N/A'}</span>
                                    </p>
                                </div>
                                
                                {/* Category/Type */}
                                <p className="flex items-center text-gray-600 mb-4">
                                    <FaTags className="w-4 h-4 text-purple-600 mr-2" />
                                    Category: <span className="ml-2 font-medium text-indigo-700">{toy.category || 'Uncategorized'}</span>
                                </p>

                               
                                <button className="w-full bg-pink-200 text-gray-600 py-3 rounded-xl font-bold hover:bg-sky-200 transition duration-300 shadow-lg hover:shadow-xl">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Details;