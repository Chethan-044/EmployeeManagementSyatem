import React from 'react'

const TaskListNumbers = ({ user }) => {

  const taskCounts = {
    new: user?.tasks?.filter(t => t.newTask).length || 0,
    active: user?.tasks?.filter(t => t.active).length || 0,
    completed: user?.tasks?.filter(t => t.completed).length || 0,
    failed: user?.tasks?.filter(t => t.failed).length || 0,
  }

  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mt-10'>

      <div className='py-6 px-9 bg-red-400 rounded-2xl'>
        <h2 className='text-2xl'>{taskCounts.new}</h2>
        <h3 className='text-xl font-medium'>New Tasks</h3>
      </div>

      <div className='py-6 px-9 bg-blue-400 rounded-2xl'>
        <h2 className='text-2xl'>{taskCounts.active}</h2>
        <h3 className='text-xl font-medium'>Active Tasks</h3>
      </div>

      <div className='py-6 px-9 bg-green-400 rounded-2xl'>
        <h2 className='text-2xl'>{taskCounts.completed}</h2>
        <h3 className='text-xl font-medium'>Completed</h3>
      </div>

      <div className='py-6 px-9 bg-yellow-400 rounded-2xl'>
        <h2 className='text-2xl'>{taskCounts.failed}</h2>
        <h3 className='text-xl font-medium'>Failed</h3>
      </div>

    </div>
  )
}

export default TaskListNumbers
