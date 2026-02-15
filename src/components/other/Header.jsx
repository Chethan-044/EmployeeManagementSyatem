import React, { useContext, useEffect, useState } from 'react'


const Header = ({ user, logout }) => {
  return (
    <div className='flex justify-between items-end'>
        <h1 className='text-2xl font-semibold'>
          Hello, <br/>
          <span className='ml-4 text-3xl font-bold'>
{user?.role === "admin" ? "Admin" : user?.firstName}
          </span>
        </h1>

        <button
          onClick={logout}
          className='bg-red-500 font-medium text-white px-4 py-2 rounded-md'
        >
          Log out
        </button>
    </div>
  )
}
export default Header