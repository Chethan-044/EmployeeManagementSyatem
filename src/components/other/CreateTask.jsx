import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const { userData, setUserData } = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

        const taskObj = {
            taskTitle,
            taskDescription,
            taskDate,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false
        }

        const updatedEmployees = userData.employees.map(emp => {
            if (emp.firstName === asignTo) {
                return {
                    ...emp,
                    tasks: [...emp.tasks, taskObj],
                    taskCounts: {
                        ...emp.taskCounts,
                        newTask: emp.taskCounts.newTask + 1
                    }
                }
            }
            return emp
        })

        setUserData({ employees: updatedEmployees })

        // reset form
        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')
    }

    return (
        <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
            <form onSubmit={submitHandler}
                className='flex flex-wrap w-full items-start justify-between'
            >
                <div className='w-1/2'>

                    <h3 className='text-sm text-gray-300'>Task Title</h3>
                    <input value={taskTitle}
                        onChange={(e)=>setTaskTitle(e.target.value)}
                        className='input'/>

                    <h3 className='text-sm text-gray-300'>Date</h3>
                    <input type="date"
                        value={taskDate}
                        onChange={(e)=>setTaskDate(e.target.value)}
                        className='input'/>

                    <h3 className='text-sm text-gray-300'>Assign to</h3>
                    <input value={asignTo}
                        onChange={(e)=>setAsignTo(e.target.value)}
                        className='input'/>

                    <h3 className='text-sm text-gray-300'>Category</h3>
                    <input value={category}
                        onChange={(e)=>setCategory(e.target.value)}
                        className='input'/>

                </div>

                <div className='w-2/5 flex flex-col'>
                    <h3 className='text-sm text-gray-300'>Description</h3>
                    <textarea
                        value={taskDescription}
                        onChange={(e)=>setTaskDescription(e.target.value)}
                        className='textarea'/>

                    <button className='bg-emerald-500 py-3 mt-4 rounded'>
                        Create Task
                    </button>
                </div>

            </form>
        </div>
    )
}

export default CreateTask
