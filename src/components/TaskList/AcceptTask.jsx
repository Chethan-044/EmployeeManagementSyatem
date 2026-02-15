import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AcceptTask = ({ task, employeeName }) => {

  const { userData, setUserData } = useContext(AuthContext)

  const updateStatus = (status) => {

    const updatedEmployees = userData.employees.map(emp => {

      if (emp.firstName === employeeName) {

        const updatedTasks = emp.tasks.map(t => {

          if (t.taskTitle === task.taskTitle) {
            return {
              ...t,
              active: status === "active",
              completed: status === "completed",
              failed: status === "failed",
              newTask: false
            }
          }

          return t
        })

        return { ...emp, tasks: updatedTasks }
      }

      return emp
    })

    setUserData({ employees: updatedEmployees })
  }

  return (
    <div className='bg-yellow-400 p-5 rounded-xl mb-4'>

      <h2 className='text-xl font-bold'>{task.taskTitle}</h2>
      <p className='text-sm my-2'>{task.taskDescription}</p>
      <p className='text-xs mb-3'>📅 {task.taskDate}</p>

      <div className='flex gap-3'>

        <button
          onClick={() => updateStatus("active")}
          className='bg-blue-600 px-3 py-1 rounded'
        >
          Accept
        </button>

        <button
          onClick={() => updateStatus("completed")}
          className='bg-green-600 px-3 py-1 rounded'
        >
          Complete
        </button>

        <button
          onClick={() => updateStatus("failed")}
          className='bg-red-600 px-3 py-1 rounded'
        >
          Failed
        </button>

      </div>

    </div>
  )
}

export default AcceptTask
