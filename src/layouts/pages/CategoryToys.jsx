import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import ToysCard from '../../components/homelayouts/ToysCard';

const CategoryToys = () => {
    const {id} =useParams();
    const data= useLoaderData();
    const [categoryToys, setCategoryToys] = useState([]);
    //console.log(id, data);
    useEffect(()=>{
       if(id=="1"){
        setCategoryToys(data);
        return;
       }
       else{
          const filteredToys=data.filter(toys => toys.toyId == id);
        //console.log(filteredToys);

        setCategoryToys(filteredToys);
       }

       
    },[data, id]);
    return (
        <div>
          <h2 className='font-bold text-xl text-cyan-800 mb-5'>  Total <span className='text-amber-900'>{categoryToys.length}</span> Found</h2>


          <div className='grid grid-cols-4 gap-5'>
            {
                categoryToys.map(toys => <ToysCard key={toys.toyId} toys={toys}></ToysCard> )
            }
          </div>
        </div>
    );
};

export default CategoryToys;