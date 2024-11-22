import React from 'react'
import { CardDescription, CardTitle } from '../ui/card'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "../ui/table"
import { getTasks } from '@/services/task'
import { getDate } from '@/utils/getDate'
import StatusBullet from '../StatusBullet'
import { TaskStatus } from '../form/schema'
import TitleCell from './title'

export default async function TaskList() {

    const tasks = await getTasks()

    return (
        <div className='space-y-4'>
            <div className='space-y-2'>
                <CardTitle>Your Task For Today</CardTitle>
                <CardDescription>{"Let's get everything done"}</CardDescription>
            </div>

            <Table className='h-full w-full'>
                <TableCaption>{"A List of Your Tasks"}</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tasks.map((task) => (
                        <TableRow key={task.id} className='group'>
                            <TableCell className='font-medium'>{getDate(task.createdAt)}</TableCell>
                            <TableCell className='font-medium'>
                                <TitleCell task={task} />
                            </TableCell>
                            <TableCell className='capitalize'>
                                <StatusBullet status={task.status as TaskStatus} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>

        </div>
    )
}
