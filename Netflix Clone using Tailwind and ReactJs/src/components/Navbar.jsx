import React from 'react'
import logo from "./netflix.svg"
const Navbar = () => {
  return (
    <div className='flex justify-around'>
      <div >
        <img className='w-40 ' src={logo} alt="" />
      </div>
      <div><button className='bg-[#e50914] text-white py-[5px] px-4 rounded-[5px] font-bold hover:bg-[#c11119]'>Sign In</button></div>
    </div>
  )
}

export default Navbar
