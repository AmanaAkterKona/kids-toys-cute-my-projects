import React, { use } from 'react';
import { NavLink } from 'react-router';


const categoryPromise= fetch("/categories.json").then(res=>res.json());
const Categories = () => {
   const categories = use(categoryPromise);

    return (
        <div>
            <h2 className='font-bold text-xl'>All Categories({categories.length})</h2>
            <div className='grid grid-cols-1 mt-5 gap-3'>
               {
                categories.map((category)=>(
                    <NavLink key={category.id} className={"btn bg-blue-200 border-0 hover:bg-blue-400 text-gray-600 font-bold "} to={`/category/${category.id}`}>{category.name}</NavLink>
                ))
               }
            </div>
        </div>
    );
};

export default Categories;