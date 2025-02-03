import React from 'react'
import { testimonials} from '../constants/index.jsx'
import { FaQuoteLeft } from "react-icons/fa";
const Review = () => {
  return (
    <div className='mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 gap-4 '>
        
        {
            testimonials.map((item,i)=>(
                <div className='flex flex-col border items-center rounded-xl shadow-2xl border-amber-400 ' key={i}>
                    <img src={item.image} alt="profile" className='w-20 rounded-full mt-4' />
                    <h2 className='mt-6 text-2xl font-medium tracking-wide'>{item.user}</h2>
                    <p className='mt-1 text-neutral-600 '> {item.company}</p>
                    <FaQuoteLeft className='mt-10 text-amber-400' />

                    <p className='mt-10 text-center tracking-wide mb-1 p-3 text-neutral-900'>{item.text}</p>

                </div>
            ))
        }
        
    </div>
  )
}

export default Review