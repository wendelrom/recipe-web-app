import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='h-[10dvh] md:h-[30dvh] flex justify-center items-center flex-col'>
      <div className='flex gap-4'>
        <FaInstagram className='text-lg md:text-2xl text-slate-700 transform transition-transform duration-300 hover:scale-110 hover:text-orange-500'/>
        <FaTwitter className='text-lg md:text-2xl text-slate-700 transform transition-transform duration-300 hover:scale-110 hover:text-orange-500'/>
        <FaYoutube className='text-lg md:text-2xl text-slate-700 transform transition-transform duration-300 hover:scale-110 hover:text-orange-500'/>
        <FaFacebook className='text-lg md:text-2xl text-slate-700 transform transition-transform duration-300 hover:scale-110 hover:text-orange-500'/>
      </div>
      <p className="text-md text-slate-700">@undefined</p>
    </footer>
  )
}

export default Footer

