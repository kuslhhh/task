import Link from 'next/link'
import React from 'react'

export default function Links() {
  return (
    <div className='flex items-center space-x-4 lg:space-x-6'>
        <Link href="/" className='text-sm font-medium transition-colors hover:text-primary cursor-pointer'>Task</Link>
        <Link href="/calender" className='text-muted text-sm font-medium transition-colors hover:text-primary cursor-pointer'>Calender</Link>
        <Link href="/settings" className='text-muted text-sm font-medium transition-colors hover:text-primary cursor-pointer'>Settings</Link>
    </div>
  )
}
