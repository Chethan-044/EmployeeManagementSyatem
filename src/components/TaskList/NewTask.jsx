import React from 'react'

const NewTask = ({ task }) => {
  return (
    <div className='bg-yellow-400 p-5 rounded-xl mb-4'>

      <div className='flex justify-between items-center'>
        <h2 className='text-xl font-bold'>{task.taskTitle}</h2>

        <span className='text-xs bg-black px-2 py-1 rounded'>
          New
        </span>
      </div>

      <p className='text-sm my-3'>{task.taskDescription}</p>

      <p className='text-xs'>
        📅 {task.taskDate}
      </p>

    </div>
  )
}

export default NewTask
