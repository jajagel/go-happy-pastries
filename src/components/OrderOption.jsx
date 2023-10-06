import React from 'react'
import { orderOptions } from '../constants'
import { useEffect } from 'react'
import OrderOptionItem from './OrderOptionItem'

const OrderOption = () => {
  useEffect(() => {
    ScrollReveal().reveal('.title',{origin:"bottom", distance:"70px", delay:400 });
  }, []);
   
  return (
    <section id="order" data-section className="flex  flex-col mx-8 gap-12 sm:gap-16 justify-center items-center scroll-mt-28 snap-start ">
      <h1 className="font-sansita title text-4xl font-semibold text-darkGray max-sm:text-2xl">How to Order</h1>
      <div className="grid lg:grid-cols-4 sm:gap-12 gap-8 grid-cols-2" >
          {orderOptions.map((item) => (
            <OrderOptionItem key={item.id} item={item} />
          ))}
      </div>
    </section>
  )
}

export default OrderOption