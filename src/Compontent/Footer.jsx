import React from 'react'
import{resourcesLinks,platformLinks,communityLinks} from '../constants/index.jsx'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const icons=[
    <FaFacebook/>,
        <FaXTwitter/>,
        <FaLinkedin/>,
        <FaYoutube/>,
        <FaInstagram/>
  ]
  const Explore =[
    "Home",
    "About Us",
    "Contact Us",
    "Terms & Conditions",
    "Privacy Policy",
    "Blog"
  ]
  return (
    <div className="mt-4  bg-purple-950">
      <div className="flex mt-7">
        {icons.map((icon, i) => (
          <div key={i} className="bg-amber-50 mt-20 ml-8">
            <div className="border text-2xl p-4 cursor-pointer shadow-2xl border-purple-950 bg-purple-800 hover:bg-amber-50 duration-150 delay-100 text-white hover:text-purple-800">
              {icon}
            </div>
          </div>
        ))}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-9 mt-9'>
        <div className='flex flex-col  p-2 '>
        <h2 className='uppercase border-b-1 border-purple-50 py-3 text-xl text-purple-50 ml-2 mr-4'>Explore</h2>
        <ul className='mx-2 my-3 p-2'>
          {
            Explore.map((e,i)=>(
              <li key={i} className='p-1 text-amber-100 hover:text-neutral-500 duration-150 delay-150 cursor-pointer mb-1'>{e}</li>
            ))
          }

        </ul>
        </div>
        <div className='flex flex-col p-2 '>
        <h2 className='uppercase border-b-1 border-purple-50 py-3 text-xl text-purple-50 ml-2 mr-4'>platformLinks</h2>
        <ul className='mx-2 my-3 p-2'>
          {
            platformLinks.map((item,i)=>(
              <li key={i} className='p-1 text-amber-100 hover:text-neutral-500 duration-150 delay-150 cursor-pointer mb-1'>{item.text}</li>
            ))
          }
        </ul>
        </div>
        <div className='flex flex-col p-2 '>
        <h2 className='uppercase border-b-1 border-purple-50 py-3 text-xl text-purple-50 ml-2 mr-4'>communityLinks</h2>
        <ul className='mx-2 my-3 p-2'>
          {
            communityLinks.map((item,i)=>(
              <li key={i} className='p-1 text-amber-100 hover:text-neutral-500 duration-150 delay-150 cursor-pointer mb-1'>{item.text}</li>
            ))
          }
        </ul>

        </div>

        <div className=' flex flex-col p-2 '>
        <h2 className='uppercase border-b-1 border-purple-50 py-3 text-xl text-purple-50 ml-2 mr-4'>Get in touch</h2>
        <ul className='mx-2 my-3 p-2'>
          <li className='p-1 text-amber-100 hover:text-neutral-500 duration-150 delay-150 cursor-pointer mb-1'>
          Get in Touch with us, we would be more than happy to help
          </li>
          <li className='p-1 text-amber-100 hover:text-neutral-500 duration-150 delay-150 cursor-pointer mb-1'>+91 9345824501</li>

        </ul>

        </div>

      </div>
      <div className=' mx-15 p-2 mb-3 '>
        <p className='tracking-wide text-neutral-200'> <span className='text-[17px] text-black font-medium'>DISCLAIMER : </span>The information provided on this website is for general informational purposes only. While we strive to keep the content accurate and up to date, we make no representations or warranties, express or implied, regarding the accuracy, reliability, or completeness of any information on this site</p>
      </div>


    </div>
  );
``  
}

export default Footer