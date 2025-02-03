import React from 'react'
import {pricingOptions} from '../constants/index.jsx'
import { BiCheckCircle } from "react-icons/bi";
const Pricing = () => {
  return (
    <div className='mt-20'>
        <h2 className='text-center text-2xl md:text-3xl lg:text-4xl tracking-wide text-amber-500 font-medium uppercase mb-5'> 
        Pricing
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            
            
            {
                pricingOptions.map((item,i)=>(
                    <div className='flex flex-col mb-3 border items-center mx-13 md:mx-4 py-5 shadow-xl border-amber-300 rounded-3xl'>
                      <h2 className='text-2xl md:text-3xl lg:text-4xl 
                      font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text'>
                        {item.title==='Pro'?(
                            <>
                            {item.title}
                            <span>(Most Popular)</span>
                            </>
                        ):(
                            item.title
                        )}
                      </h2>
                     <h3 className='text-4xl mt-5 font-medium '>{item.price} <span className='text-xl text-neutral-700'>/Month</span></h3>
                      <ul className='mt-3'>
                        {
                            item.features.map((f,i)=>(
                                <div className='flex space-x-2 items-center'>
                                    <BiCheckCircle className='text-xl text-amber-500'/>
                                    <li className='mb-1 text-xl text-neutral-700'><a href="#">{f}</a></li>
                                 </div>
                            ))
                        }
                      </ul>
                      <button className='px-9 py-2 mt-3 text-white border bg-amber-500 hover:text-amber-500 hover:bg-white transition-all duration-150 hover:border-amber-600 rounded-3xl cursor-pointer text-xl' >Subscribe</button>

                    </div>
                ))
            }
            
           
        </div>

    </div>
  )
}

export default Pricing