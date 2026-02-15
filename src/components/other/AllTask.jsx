import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const { userData } = useContext(AuthContext)

  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded overflow-auto'>

      {userData?.employees?.map(emp =>
        emp.tasks.map((task, i) => (

          <div
            key={i}
            className='bg-red-400 mb-3 py-2 px-4 flex justify-between rounded'
          >
            <h2>{emp.firstName}</h2>
            <h3>{task.taskTitle}</h3>
            <h5>
              {task.newTask && "New"}
              {task.active && "Active"}
              {task.completed && "Completed"}
              {task.failed && "Failed"}
            </h5>
          </div>

        ))
      )}

    </div>
  )
}

export default AllTask
