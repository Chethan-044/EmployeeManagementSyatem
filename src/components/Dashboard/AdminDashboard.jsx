import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = ({ user, logout }) => {
  return (
    <div className='p-7 bg-[#1c1c1c] min-h-screen'>
        <Header user={user} logout={logout}/>
        <CreateTask/>
        <AllTask/>
    </div>
  )
}

export default AdminDashboard
