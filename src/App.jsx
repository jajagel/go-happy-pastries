import React from 'react';
import { useEffect } from 'react';
import{Navbar, Hero, Button, Menu, OrderOption, StoreLocation, Footer} from './components';

const App = () => {
    return (
    <div className="w-full overflow-hidden bg-[#FFFEFD] font-judson text-lg text-baseGray">
      <div className=" flex justify-center  items-start">
        <div className="xl:max-w-[1280px] w-full" >
          <Navbar />
        </div>
      </div>
      <div className="flex flex-col gap-12 sm:gap-20">
        <div className="flex justify-center items-start">
          <div className="xl:max-w-[1280px] w-full">
            <Hero />
          </div>
        </div>
        <div className="flex justify-center items-start">
          <div className="xl:max-w-[1280px] snap-y w-full gap-12 sm:px-16 px-10 sm:gap-20 flex flex-col">
            <Menu />
            <OrderOption />
            <StoreLocation />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
  };

export default App