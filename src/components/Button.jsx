import React from 'react'

const Button = ({href, children}) => (
    <div>
      <a href={href} className='bg-secondary hover:bg-white hover:ring-1 hover:ring-secondary hover:ring-inset transition duration-150 ease-out hover:text-secondary text-white font-sansita px-6 py-2 max-sm:text-base rounded-full'>{children}</a>
    </div>
  )


export default Button