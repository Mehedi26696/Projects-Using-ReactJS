import React from 'react'
 
const Cards = (props) => {
  return (
    <div className='text-white w-1/5 h-[300px] bg-[#1e162a] rounded-xl p-5 m-5'>
      <h1 className='font-bold text-2xl'>{props.heading}</h1>
      <p className='py-5'>{props.desc}</p>
 
    </div>
  )
}

export default Cards
