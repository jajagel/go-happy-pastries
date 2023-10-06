import React from 'react'
import { copyright } from '../constants'
import { logo } from '../assets'
import { otherLinks } from '../constants'

const Footer = () => (
    <div className="flex flex-col justify-between md:flex-row w-full py-6 items-center max-sm:text-base text-center gap-4 md:gap-12 navbar">
      <div className="flex gap-5 md:gap-8 max-md:flex-col items-center">
        <a href="/"><img className='w-[100px]' src={logo} alt="Go Happy Pastries" draggable="false"/></a>
        <p>{copyright}</p>
      </div>
      <div className="flex flex-row justify-center items-center gap-5">
        {otherLinks.map((link, index)=>(
          <a key= {index} href={link.url} target="_blank"><img src={link.img} alt={link.id} className="sm:h-[24x] h-[24px]" /></a>
        ))}
      </div>
    </div>
  )

export default Footer