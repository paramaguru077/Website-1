import React from 'react'
import codeImage from '../assets/code.jpg'
import {checklistItems} from '../constants/index.jsx'
import { BiCheckCircle } from "react-icons/bi";
const WorkFlow = () => {
  return (
    <div className='mt-20'> 
      <h1 className='text-center text-3xl md:text-4xl lg:text-5xl tracking-wide'>Acclerate your 
        <span className='uppercase bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text font-bold'>{" "}coding workflow</span>
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 mt-8 p-3 gap-2 min-h-44'>
        <div className='border border-amber-200 rounded-3xl p-4'>
            <img src={codeImage} alt="codeimage" />
        </div>
        <div className='flex flex-col gap-1 mt-6 rounded-2xl'>
            {
                checklistItems.map((item,i)=>(
                    <div className=''>  
                        <div className='flex justify-center items-center m-4 bg-amber-500 max-w-[23px] min-h-[10px] rounded-full'>
                        <BiCheckCircle className='text-2xl text-amber-100' />
                        </div>
                        <div className='flex justify-center flex-col items-center'>
                            <h4 className='font-semibold text-2xl '>{item.title}</h4>
                            <p className='mt-2 p-2 text-neutral-600'>{item.description}</p>
                        </div>
                    </div>

                ))
            }
        </div>

      </div>

    </div>
  )
}

export default WorkFlow