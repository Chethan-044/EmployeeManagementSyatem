import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center gap-5 flex-nowrap justify-items-start py-5 w-full mt-5'>
        
        <div className='flex-shrink-0 h-full w-[300px] bg-red-300 rounded-lg shadow-md'>
            <div className='flex justify-between items-center px-3 py-2'>
                <h4 className='bg-red-500 w-[65px] ml-2 text-center mt-2 rounded-xl' >High</h4>
            <h4 className='text-sm text-white'>20 feb 2026</h4>
            </div>
            <h2 className='text-2xl mt-7 font-semibold  px-3'>Make a utube video 1</h2>
            <p className='mt-1 p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, molestiae.</p>
        </div>
      
       
    </div>
  ) 
}

export default TaskList