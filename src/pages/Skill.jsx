import React from 'react'

export default function Skill() {
  return (
    <div className='h-dvh mt-8'>
      <h1 className='text-center font-bold text-xl'>MY skills</h1>
     <div className='p-14 grid grid-cols-2 gap-5 h-full'>

        <div className='m-2 w-full'>
          <div className='flex justify-between '> <span className='font-semibold text-sm'>HTML</span> <span className='font-semibold text-sm'>85%</span> </div>
          <div><progress className="progress progress-secondary w-full " value={85} max="100"></progress>
          </div>
        </div>

        <div className='m-2 w-full'>
          <div className='flex justify-between '> <span className='font-semibold text-sm'>CSS</span> <span className='font-semibold text-sm'>80%</span> </div>
          <div><progress className="progress progress-secondary  w-full" value={80} max="100"></progress>
          </div>
        </div>

        <div className='m-2 w-full'>
          <div className='flex justify-between '> <span className='font-semibold text-sm'>JAVASCRIPT</span> <span className='font-semibold text-sm'>70%</span> </div>
          <div><progress className="progress progress-secondary  w-full" value={70} max="100"></progress>
          </div>
        </div>

        
        <div className='m-2 w-full'>
          <div className='flex justify-between '> <span className='font-semibold text-sm'>REACT</span> <span className='font-semibold text-sm'>75%</span> </div>
          <div><progress className="progress progress-secondary  w-full" value={75} max="100"></progress>
          </div>
        </div>

        
        <div className='m-2 w-full'>
          <div className='flex justify-between '> <span className='font-semibold text-sm'>GIT</span> <span className='font-semibold text-sm'>90%</span> </div>
          <div><progress className="progress progress-secondary  w-full" value={90} max="100"></progress>
          </div>
        </div>

        <div className='m-2 w-full'>
          <div className='flex justify-between '> <span className='font-semibold text-sm'>TAILWINDCSS</span> <span className='font-semibold text-sm'>60%</span> </div>
          <div><progress className="progress   progress-secondary  w-full" value={60} max="100"></progress>
          </div>
        </div>

        <div className='m-2 w-full'>
          <div className='flex justify-between '> <span className='font-semibold text-sm'>REDUX</span> <span className='font-semibold text-sm'>40%</span> </div>
          <div><progress className="progress   progress-secondary  w-full" value={40} max="100"></progress>
          </div>
        </div>

        <div className='m-2 w-full'>
          <div className='flex justify-between '> <span className='font-semibold text-sm'>PHP</span> <span className='font-semibold text-sm'>30%</span> </div>
          <div><progress className="progress   progress-secondary  w-full" value={30} max="100"></progress>
          </div>
        </div>
       
     </div>
  </div>
  )
}
