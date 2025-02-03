import React from 'react'
import Review from './Review'
const Testmoninal = () => {
  return (
    <div className='mt-6'>

        <h4 className='uppercase text-xl text-amber-500 text-center font-medium'>Testmonial</h4>
        <h2 className='mt-4 text-4xl lg:text-6xl tracking-wide text-center font-semibold font-serif relative md:text-5xl '>What clients say</h2>
        <span className='w-[150px] h-2 bg-amber-500 absolute left-[40%] mt-3 rounded-3xl '></span>
        <div className='max-w[50%]'>
        <p className='mt-8 p-8 text-neutral-600 text-[15px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum cum explicabo, ex perferendis sunt odio consectetur qui repellendus, id sapiente mollitia ad quod molestiae est quisquam quidem rerum dicta quae?</p>
        </div>
        <Review/>
    </div>
  )
}

export default Testmoninal