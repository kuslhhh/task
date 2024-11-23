"use client"

import { Task } from '@prisma/client'
import React from 'react'
import { eachDayOfInterval, endOfMonth, getDay, startOfMonth } from "date-fns"

type CalenderProps = {
    tasks: Task[]
}

export default function Calender({ tasks }: CalenderProps) {

    const currDate = new Date()
    const firstDayOfMonth = startOfMonth(currDate)
    const lastDayOfMonth = endOfMonth(currDate)

    const daysInMonth = eachDayOfInterval({
        start: firstDayOfMonth,
        end: lastDayOfMonth
    })

    const StartingDayIdx = getDay(firstDayOfMonth) - 1 < 0 ? 6 : getDay(firstDayOfMonth) - 1

    const weekdays = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]

    return (
        <div className='p-6'>
            <div className='grid grid-cols-7 gap-1'>
                {weekdays.map(w => (
                    <span className='font-medium' key={w}>
                        {w}
                    </span>
                ))}
                {Array.from({ length: StartingDayIdx }).map((_, idx) => (
                    <div className='bg-secondary/60 min-h-44' key={idx} />
                ))}
            </div>
        </div>
    )
}
