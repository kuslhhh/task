import React from 'react'

export default function Links() {
  return (
    <div className='flex items-center space-x-4 lg:space-x-6'>
        <span className='text-sm font-medium transition-colors hover:text-primary cursor-pointer'>Task</span>
        <span className='text-muted text-sm font-medium transition-colors hover:text-primary cursor-pointer'>Calender</span>
        <span className='text-muted text-sm font-medium transition-colors hover:text-primary cursor-pointer'>Settings</span>
    </div>
  )
}
