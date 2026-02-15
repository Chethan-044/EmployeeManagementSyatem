import React from 'react'

const FailedTask = ({ task }) => {
  return (
    <div className='bg-gray-600 p-5 rounded-xl mb-4'>

      <div className='flex justify-between items-center'>
        <h2 className='text-xl font-bold'>{task.taskTitle}</h2>
        <span className='text-xs bg-black px-2 py-1 rounded'>
          Failed
        </span>
      </div>

      <p className='text-sm my-3'>{task.taskDescription}</p>

      <p className='text-xs'>
        📅 {task.taskDate}
      </p>

    </div>
  )
}

export default FailedTask
