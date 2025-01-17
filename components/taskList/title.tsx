"use client"

import { Task } from '@prisma/client'
import React, { useState } from 'react'
import Modal from '../ui/modal'
import Form from '../form'

type props = {
    task: Task
}

export default function TitleCell(props: props) {

    const {task} = props
    const [isOpen, setIsOpen] = useState(false)
    const open = () => setIsOpen(true)
    const close = () => setIsOpen(false)

  return (
    <>
        <span onClick={open} className='hover:underline '>
            {task.title}
        </span>
        <Modal title='Task Details' isOpen={isOpen} close={close}>
            <div className='min-w-[500px]'>
                <Form task={task} onSubmitOrDelete={close}/> 
            </div>
        </Modal>
    </>
  )

}
