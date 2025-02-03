import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { navItems } from '../constants/index.jsx'
import{X,Menu} from 'lucide-react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  const[open,setOpen]= useState(false);
  const toggleButton =()=>{
    setOpen(!open);
  }
  return (
    <div className='sticky top-0  backdrop-blur-sm z-20 '>
      <div className='flex justify-between items-center'>
        <div className='flex items-center space-x-2.5 ml-8'>
          <img src={logo} alt="logo"  className='w-14 h-14 m-2' />
          <span className='text-2xl md:text-3xl text-amber-400 hover:text-neutral-50 duration-150 cursor-pointer'>VirtualR</span>
        </div>
        <ul className='hidden md:flex items-center justify-center'>
          {
            navItems.map((item,i)=>(
              <li key={i} className='text-orange-400 ml-2 hover:text-neutral-50 duration-100 text-[18px] mr-6 '><Link to={item.href}>{item.label}</Link></li>
            ))
          }
        </ul>
        <div className='hidden md:flex justify-between items-center space-x-4 p-2 '>
          <Link to="/create" className='py-2 px-4 bg-amber-600 rounded-md text-neutral-50 hover:bg-amber-500 duration-100'>Create Account</Link>
          <Link to="/login" className='py-2 px-4 bg-amber-600 rounded-md mr-3 text-neutral-50 hover:bg-amber-500 duration-100'> Sign In</Link>
        </div>
        <div onClick={toggleButton} className='m-3 md:hidden bg-amber-300 rounded-3xl text-white p-2 flex justify-center items-center cursor-pointer'> 
          {
            open?<X/>:<Menu/>
          }
        </div>
      </div>
      {
        open && (
          <div className=' md:hidden w-full fixed bg-neutral-50 flex justify-center py-5 border-t border-black  z-10'>
            <ul>
              {
                navItems.map((item,i)=>(
                  <li className='mb-4 text-[18px] text-orange-400 hover:text-neutral-200 duration-100'><Link to={item.href}>{item.label}</Link>
                  </li>
                ))
              }
            </ul>
           </div>
        )
      }
      
    </div>
  )
}

export default Navbar