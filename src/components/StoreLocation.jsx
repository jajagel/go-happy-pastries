import React from 'react'
import LocationCard from './LocationCard'
import { storeLocations } from '../constants'
import { useEffect } from 'react'

const StoreLocation = () => {
  useEffect(() => {
    ScrollReveal().reveal('.title',{origin:"bottom", distance:"70px", delay:600});
  }, []);
  return (
    <section data-section id="store" className="flex flex-col items-center sm:gap-7 scroll-mt-28 snap-start justify-center">
      <h1 className="font-sansita title text-4xl font-semibold text-darkGray max-sm:text-2xl">Store Locations</h1>
      <div  className="flex lg:flex-row flex-col lg:gap-20 gap-12">
        {storeLocations.map((item) => (
          <LocationCard   key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}

export default StoreLocation