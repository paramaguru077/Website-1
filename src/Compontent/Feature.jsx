import React from 'react'
import {features} from '../constants/index.jsx'
import{motion} from 'framer-motion'
const Feature = () => {
  return (
    <div className='mt-10 overflow-hidden'>
        <motion.h1 className='text-center mt-3 text-3xl  font-medium'
        initial={{y:"100%"}}
        animate={{y:"0"}}
        exit={{y:"-100%"}}
        transition={{duration:"0.5"}}
        > Easily build <span className='bg-amber-500 text-transparent bg-clip-text text-5xl uppercase'>your code</span> </motion.h1>
        <div className=' mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {
            features.map((item,i)=>(
              <div className='border border-amber-300 rounded-2xl m-4 px-3 py-2 cursor-pointer ' >
                <div className='flex justify-center items-center ' >
                  <span className='bg-amber-500 p-2 rounded-2xl text-amber-100'>{item.icon}</span>
                  <p className='ml-4 text-2xl text-title'>{item.text}</p>
                </div>
                <div className='mt-2'>
                  <p className='tracking-wide text-[17px] text-neutral-500'>{item.description}</p>
                </div>


              </div>
            ))
          }


        </div>
    </div>
  )
}

export default Feature