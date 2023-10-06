import React from 'react'
import { loc } from '../assets'
import { useEffect } from 'react';

const LocationCard = ({item}) => {
    useEffect(() => {
        ScrollReveal().reveal('.store',{origin:"bottom", distance:"70px", delay:800});
        ScrollReveal().reveal('.address',{origin:"left", distance:"70px", delay:200});
      }, []);
    return(
        <div key={item.id} className="flex flex-col items-center justify-center max-sm:text-base sm:gap-6 gap-4">
            <div className="relative location transition-transform duration-200 ease-out hover:ease-in hover:scale-[1.05]" >
            <img src={item.img} alt={item.id}  className="sm:max-w-[400px] max-w-[370px] store-img store sm:max-h-[450px] max-h[400px] object-contain w-full" draggable="false"/>
                <div className="absolute flex gap-5 address transition-transform duration-200 ease-out hover:ease-in -bottom-7 sm:-bottom-3 left-10 bg-[#FFFEFD] border-primary max-w-xs border-4 p-4 sm:p-5 rounded-2xl">
                    <img src={loc} alt={item.id} draggable="false"/>
                    <div className="flex flex-col">
                        <h3>{item.address}</h3>
                        <p className="sm:text-base text-sm text-lightGray">{item.operatingHours}</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default LocationCard