import React from 'react';
import Button from "./Button";
import {hero} from "../assets"; 
import { otherLinks } from '../constants';
import { useEffect } from 'react';


const Hero = () => { 
  useEffect(() => {
    ScrollReveal().reveal('.detail-hero',{origin:"left", distance:"70px"});
  }, []);
  return (
    <section id="home" data-section className="sm:ps-16 mt-28 scroll-mt-28 snap-start ps-10">
      <div className="flex flex-col justify-between gap-10 items-center sm:flex-row ">
        <div className="sm:order-last flex self-end " >
          <img src={hero} alt="pizza hero" className="sm:h-[90%] w-full pizza-hero" draggable="false" />  
        </div>  
        <div className="flex flex-col detail-hero max-sm:pr-10  sm:items-start items-center max-sm:text-center gap-6 sm:gap-8">
          <h1 className="font-sansita font-semibold text-5xl text-darkGray max-sm:text-3xl">Go Happy Pastries</h1>
          <p className="text-lightGray text-xl max-sm:text-base">We offer pizza and some delights good for your cravings!</p>
          <div className="flex flex-row sm:gap-10 max-sm:justify-center gap-8 flex-wrap">
            <div className="flex flex-row justify-center items-center gap-5">
              {otherLinks.map((link, index)=>(
                <a key= {index} href={link.url} target="_blank"><img src={link.img} alt={link.id} className="sm:h-[32px] h-[24px]" /></a>
              ))}
            </div>
            <Button href={`#order`}>How to Order</Button>
          </div>
        </div>
      </div>
    </section>
  );
};	

export default Hero