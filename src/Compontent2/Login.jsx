import React, { useState } from 'react'
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa6";
import { IoCheckboxOutline } from "react-icons/io5";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import logo from '../assets/logo.png'
import searchimg from '../assets/search.jpg'
const Login = () => {
  const[open,setOpen]= useState(false);
  const toggleButton =()=>{
    setOpen(!open);
  }
  return (
    <div className='flex'>
      <div className=' hidden lg:block w-2/5 h-screen p-2'>
        <img src= {searchimg}alt="image" className='h-full rounded-md'/>
      </div>
      <div className=' w-full lg:w-3/5 '>
      <div className='flex justify-between items-center mt-2 p-8'>
        <div className='flex items-center space-x-2'>
          <img src={logo} alt="logo" className='w-9' />
          <span className='font-semibold text-xl text-black'>VirtualR</span>
        </div>
          <p className='text-neutral-500'>Don't have an account?<span className='text-orange-400 underline text-[16px] ml-0.5 cursor-pointer'>Signin</span></p>
      </div>
      <div className='flex flex-col p-3 ml-4 space-y-2'>
        <h1 className='capitalize text-5xl text-orange-300 tracking-wide font-medium font-serif'>Sign Up For Free </h1>
        <p className='text-xl mt-1 text-neutral-700'>Find balance in your mind.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 p-4  mx-12 md:gap-3'>
        <div className='flex flex-col'>
          <p className='text-amber-500 mb-0.5'>Username</p>
          <input type="text" placeholder='Enter username'
          className='border bg-neutral-50 border-amber-500 focus:border-amber-600 px-3 py-1 rounded outline-none focus:ring focus:ring-amber-300' />
        </div>
        <div className='flex flex-col'>
          <p className='text-amber-500 mb-0.5'>Fullname</p>
          <input type="text" placeholder='Enter Fullname'
          className='border bg-neutral-50 border-amber-500 focus:border-amber-600 px-3 py-1 rounded outline-none focus:ring focus:ring-amber-300' />
        </div>
        <div className='flex flex-col'>
          <p className='text-amber-500 mb-0.5'>Email</p>
          <input type="text" placeholder='Enter Email'
          className='border bg-neutral-50 border-amber-500 focus:border-amber-600 px-3 py-1 rounded outline-none focus:ring focus:ring-amber-300' />
        </div>
        <div className='flex flex-col'>
          <p className='text-amber-500 mb-0.5'>Password</p>
          <input type="text" placeholder='Enter password'
          className='border bg-neutral-50 border-amber-500 focus:border-amber-600 px-3 py-1 rounded outline-none focus:ring focus:ring-amber-300' />
        </div>
       
      </div>
      <div className='flex space-x-2 justify-center '>
        <div onClick={toggleButton}>{open?<MdCheckBoxOutlineBlank/>:<IoCheckboxOutline/>}</div>
        <p className='text-[10px]'>I accept to the <span className='text-blue-500 underline capitalize'>Terms and Conditions</span> and i agree to the terms of <span className='text-blue-500 underline capitalize'>Privacy Policy</span> </p>
      </div>
      <div className='mt-3 flex justify-center mb-3'>
      <button className='uppercase bg-amber-500 text-amber-100  px-9 py-1 cursor-pointer hover:bg-amber-400 duration-100 delay-100 rounded-xl '>Sign up</button>
      </div>
      <div className='flex w-full  items-center'>
        <p className='text-[12px] ml-22 text-right text-neutral-600 '>OR SIGN IN WITH </p>
        <div className='flex cursor-pointer items-center'>
          <FaFacebook className='text-2xl text-neutral-500 bg-neutral-50 rounded-xl ml-4 mr-3 hover:text-blue-600'/>
          <FaTwitter className='text-2xl text-neutral-500 bg-neutral-50 rounded-xl  mr-3 hover:text-blue-600'/>
          <FaGooglePlusG className='text-2xl text-neutral-500 bg-neutral-50 rounded-xl hover:text-red-500'/>
        </div>

      </div>

     </div>
     

    </div>
  )
}

export default Login