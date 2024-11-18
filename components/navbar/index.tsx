import React from 'react'
import TeamSwitcher from './team-switcher'
import Links from './Links'
import Search from './Search'
import Avatar from './Avatar'

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center px-4 py-2'>
        <div className='flex items-center gap-12 '>
            <TeamSwitcher/>
            <Links/>
        </div>
        <div className='flex items-center gap-12'>
          <Search/>
          <Avatar/>
        </div>

    </nav>
  )
}
