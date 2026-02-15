import React from 'react'

const TaskList = ({ user }) => {

  return (
    <div
      id='tasklist'
      className='h-[55%] overflow-x-auto flex gap-5 flex-nowrap py-5 w-full mt-5'
    >

      {user?.tasks?.map((task, i) => {

        const statusColor =
          task.completed ? "bg-green-400"
          : task.failed ? "bg-gray-500"
          : task.active ? "bg-blue-400"
          : "bg-yellow-400"

        const statusText =
          task.completed ? "Completed"
          : task.failed ? "Failed"
          : task.active ? "Active"
          : "New"

        return (
          <div
            key={i}
            className={`flex-shrink-0 h-full w-[300px] ${statusColor} rounded-lg shadow-md`}
          >

            {/* Header */}
            <div className='flex justify-between items-center px-3 py-2'>
              <h4 className='bg-black text-white px-3 py-1 rounded-xl text-xs'>
                {task.category}
              </h4>

              <h4 className='text-sm text-white'>
                {task.taskDate}
              </h4>
            </div>

            {/* Title */}
            <h2 className='text-2xl mt-6 font-semibold px-3'>
              {task.taskTitle}
            </h2>

            {/* Description */}
            <p className='mt-2 px-3 text-sm'>
              {task.taskDescription}
            </p>

            {/* Status */}
            <div className='px-3 mt-4'>
              <span className='text-xs bg-black text-white px-3 py-1 rounded'>
                {statusText}
              </span>
            </div>

          </div>
        )
      })}

    </div>
  )
}

export default TaskList
