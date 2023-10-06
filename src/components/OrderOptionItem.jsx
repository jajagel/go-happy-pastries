import React from 'react'
import { useEffect } from 'react';

const OrderOptionItem = ({ item }) => {
  useEffect(() => {
    ScrollReveal().reveal('.icon',{origin:"bottom", distance:"70px", delay:600});
    ScrollReveal().reveal('.description',{origin:"bottom", distance:"70px", delay:800 });
  }, []);
    return(
      <div key={item.id}  className="flex flex-col items-center max-sm:text-base sm:gap-6 gap-4 max-w-[150px] sm:max-w-[230px] lg:max-w-[200px] text-center">
        <img src={item.icon} alt={item.title} className="sm:h-9 h-7 icon object-contain" draggable="false"/>
        <h3 className='description'>{item.description} </h3>
      </div>
    );
  };

export default OrderOptionItem
