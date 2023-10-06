import React from 'react'
import {ribbon} from '../assets'

const MenuItem = ({ item }) => {
  return(
    <div key={item.id} className={`flex flex-col items-center ${item.bestseller ? 'min-[1068px]:mt-12' : ''}`}>
      <img src={item.img} alt={item.title} className="max-h-64 max-md:h-60 object-contain transition-transform duration-200 ease-out hover:ease-in hover:rotate-45 hover:scale-[1.04]" draggable="false"/>
      {item.bestseller && (
        <>
        <div className="relative">
            <img src={ribbon} alt="ribbon" className="w-40" draggable="false" />
            <p className="absolute top-[5px] left-[47px] sm:left-[40px] sm:top-[3px] text-lightGray" >Best Seller</p>
        </div>
        
        </>
        )}
      <h3 className="font-sansita">{item.title}</h3>
      <p className="text-lightGray text-center">
        {typeof item.price === 'string' ? item.price : (
          <span>
            {item.price.one}<br />
            {item.price.two}
          </span>
        )}
      </p>
    </div>
  );
};
  
export default MenuItem