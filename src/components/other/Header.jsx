import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-end'>
        <h1 className='text-2xl font-semibold'>Hello, <br/> <span className=' ml-4 text-3xl font-bold'>Chethan</span> </h1>
        <button className='bg-red-500 font-medium text-white px-4 py-2 rounded-md'>Log out </button>
    </div>
  )
}

export default Header