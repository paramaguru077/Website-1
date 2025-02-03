import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFire } from "react-icons/fa";
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
import {animate, motion} from 'framer-motion'
const HeroSection = () => {
  return (
    <div className='mt-20 flex flex-col bg-white'
   
    >
        <div className='flex justify-center flex-col items-center overflow-hidden'>
            <motion.h1 className='text-3xl md:text-4xl lg:text-5xl'
            initial={{y:"100%"}}
            animate={{y:"0"}}
            exit={{y:"-100%"}}
            transition={{duration:0.5}}
            >VirtualR build tools<br/> <span className='bg-gradient-to-r from-orange-700 to-orange-900 text-transparent bg-clip-text font-bold capitalize text-6xl lg:text-8xl'>
                  for developers  
                </span></motion.h1>
            <p className='m-4 text-2xl md:text-4xl p-3 text-neutral-700 tracking-wide'>Your ultimate destination for endless entertainment. Stream your favorite movies, TV shows, and exclusive videos all in one place.</p>    
        </div>
        <div className='flex justify-center '>
            <button className=' bg-amber-600 text-white rounded-2xl
            py-4 px-10 flex items-center justify-center hover:bg-transparent border-2 hover:border-amber-600 hover:text-amber-600  text-xl transition-all duration-200 cursor-pointer'>
                Get Started
                <FaArrowRightLong className='ml-2'/>
            </button>
            
        </div>
       <div className='flex justify-center items-center '>
       <FaFire className='mt-4 mr-2 bg-orange-400  rounded-4xl p-3  ' />
       <p className=' mt-4 text-[17px] text-neutral-700'>Pause or cancel service anytime</p>
       </div>
      
       <div className='flex mt-5 flex-wrap'>
       <video muted loop autoPlay className='w-full md:w-1/2 p-5 '>
            <source src={video1} />
        </video>
        <video muted loop autoPlay className='w-full md:w-1/2 p-5' >
            <source src={video2}  />
        </video>
       </div>
       

       


    </div>
  )
}

export default HeroSection