import { Fragment, useEffect } from 'react'
import { Tab } from '@headlessui/react'
import {goHappyMenu} from '../constants';
import MenuItem from './MenuItem';


const Menu = () => {
  const menuCategories = Object.keys(goHappyMenu[0]);
  useEffect(() => {
    ScrollReveal().reveal('.title',{origin:"bottom", distance:"70px", delay:100});
    ScrollReveal().reveal('.tabs',{origin:"bottom", distance:"70px", delay:200});
    ScrollReveal().reveal('.menu-item',{scale: .90, delay:400});
  }, []);
  return (
    <section id="menu" data-section className="sm:px-16 px-10 scroll-mt-28 snap-start " >
      <div className="max-sm:text-base flex justify-center items-center flex-col gap-6 sm:gap-8">
        <h1 className="font-sansita title text-4xl font-semibold text-darkGray max-sm:text-2xl">Go Happy <span className="text-secondary">Menu</span></h1>
        <Tab.Group>
          <Tab.List>
            <div className="flex tabs items-center gap-2  justify-center">
              {menuCategories.map((category, index) => (
                <Tab key={index} as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={`transition ease-in-out
                        ${selected ? 'bg-primary text-white border-none outline-none px-3 rounded-full' : 'bg-white hover:bg-gray-100 text-darkGray px-3 rounded-full'}
                      `}
                    >
                      {category}
                    </button>
                  )}
                </Tab>
              ))}
            </div>
          </Tab.List>
          <Tab.Panels>
            {menuCategories.map((category) => (
              <Tab.Panel key={category}>
                <div className="flex flex-wrap gap-2 menu-item justify-center ">
                  {goHappyMenu[0][category].map((item) => (
                    <MenuItem key={item.id} item={item}/>
                  ))}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
      
    </section>
  );
};


export default Menu