import React from 'react'
import Image from 'next/image'

const Bigcards = ({img,title}) => {
  return (
    <div className='text-center hover:scale-105 transition ease-out'>
        <div className='relative h-80 w-80' >
        <Image className='rounded-lg' src={img} layout='fill'/>
        </div>
        <h3 className='text-2xl mt-2 '>{title}</h3>
    </div>
   
  )
}

export default Bigcards