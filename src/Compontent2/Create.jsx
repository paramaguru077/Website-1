import React, { useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { VscEyeClosed } from "react-icons/vsc";
import { FaEye } from "react-icons/fa";
import imagebg from '../assets/imagebg.jpeg'
const Create = () => {
    const [open,setOpen] = useState(false);
    const toogleButton =()=>{
        setOpen(!open);
    }
  return (
    <div className=' w-full bg-neutral-700 flex h-screen space-x-1  justify-center'>
        <div className='hidden md:flex  md:py-8 w-1/2  p-3 bg-white '>
            <img src={imagebg} alt='bgimg'/>
        </div>
        <div className='py-9 px-8 flex flex-col md:w-1/2'>
            <h1 className='text-amber-100 text-5xl font-serif tracking-wide mb-2 text-center'>Create an account</h1>
            <div className='flex items-center justify-center space-x-2'>
                <p className=' '>Already have an account?</p>
                <p className='text-blue-700 underline text-[10px]'>Login</p>
            </div>
            <div className='mt-10'>
                <form className=' p-4' >
                    <div className='flex space-x-8 my-2 mb-6'>
                        <input type="text" placeholder='FirstName' className='btn-border' />
                        <input type="text" placeholder='LastName' className='btn-border' />
                    </div>
                    <div className='my-2 mb-6'>
                        <input type="text" placeholder='Email' className='btn-border' />
                    </div>
                    <div className='mb-3 relative'>
                        <input type={open?"text":"password"} placeholder='Enter your password'className='btn-border relative' />
                        <div className=' absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer' onClick={toogleButton} >
                        {
                            open?<FaEye/>:<VscEyeClosed/>
                        }
                        </div>
                    </div>
                </form>
                <div className='flex space-x-2.5 pl-5'>
                    <p className='text-[17px]'>Regard to for <span className='text-blue-600 underline text-[12px]'>Term&Condition</span></p>
                </div>
                <div className='mt-15 md:mt-8 lg:p-5 flex justify-center'>
                    <button className='px-12 py-3 w-full lg:w-1/2 p-1  bg-purple-600 text-white rounded-xl' >Create Account</button>
                </div>
                <span> </span>
                <div className='flex space-x-9 mt-5 md:mt-2  justify-center '>
                    <button className='px-4 py-2 text-xl text-neutral-50 rounded-xl  border bg-gradient-to-r from-purple-700 to-purple-900  flex items-center cursor-pointer '> <FaGoogle className='mr-2 text-netural-50'/> Google</button>
                    <button className='px-4 py-2 text-xl text-neutral-50 rounded-xl  border bg-gradient-to-r from-purple-700 to-purple-900  flex items-center cursor-pointer'> < FaApple className='mr-2 text-black'/> Apple</button>
                </div>

            </div>



        </div>


    </div>
  )
}

export default Create