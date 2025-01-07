import React from 'react'
import Calender from './calender'
import { getTasks } from '@/services/task'


export default async function Page() {

  const task = await getTasks()

  return (
    <Calender tasks={task} />
  )
}
