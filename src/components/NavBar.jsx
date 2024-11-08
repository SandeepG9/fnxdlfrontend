import React from 'react'
import FBSlogo from "../Assets/FBSlogo.png"
import { IoMdArrowDropdown } from "react-icons/io";
const NavBar = () => {
  return (
    <div className='flex mb-6'>
      <div className='ml-14 mt-8'>
            <img src={FBSlogo} alt="" className='w-52 object-cover' />
      </div>
       <div className='list-none ml-12 mt-2 font-semibold flex text-2xl items-center justify-around flex-nowrap '>
        <div className='p-8'><li className='hover:text-[#50d71e] cursor-pointer'>Home</li></div>
        <div className='p-8 pr-2'><li className='cursor-pointer'>Why FBS </li></div>
        <div><IoMdArrowDropdown /></div>
        <div className='p-8 pr-2'><li className='cursor-pointer'>Courses</li></div>
        <div><IoMdArrowDropdown /></div>
        <div className='p-8 pr-2'><li className='cursor-pointer'>Admissions</li></div>
        <div><IoMdArrowDropdown /></div>
        <div className='p-8 pr-2'><li className='cursor-pointer'>Careers</li></div>
        <div><IoMdArrowDropdown /></div>
        <div className='p-8 pr-2'><li className='cursor-pointer'>Placements</li></div>
        <div><IoMdArrowDropdown /></div>
        <div className='p-8 pr-2'><li className='cursor-pointer'>Contact Us</li></div>         
      </div>
    </div>
  )
}

export default NavBar
