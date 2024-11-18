'use client'

import React, { useState } from 'react'
import {
  Form as FormComp,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '../ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import formSchema, { TaskStatus } from './schema'
import { Input } from '../ui/input'
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue
} from '../ui/select'
import StatusBullet from '../StatusBullet'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { IoAddOutline } from 'react-icons/io5'
import { VscLoading } from 'react-icons/vsc'
import { createTask } from '@/services/task'
import { useToast } from '@/hooks/use-toast'
import { Task } from '@prisma/client'

type Props = {
  task?: Task
}
export default function Form (props: Props) {
  const { task } = props
  const isEditing = !!task

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: isEditing
      ? {
          title: task.title,
          description: task.description,
          status: task.status as TaskStatus
        }
      : {
          status: 'starting'
        }
  })

  const { toast } = useToast()

  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    try {
      await createTask(data) // Ensure the async function is awaited
    } catch (error) {
      console.error('Error creating task:', error)
    } finally {
      setIsLoading(false) // Always stop loading, even if there's an error
    }
    toast({
      title: 'Your new task was created successfully!'
    })
  }

  return (
    <FormComp {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
        <div className='flex items-center gap-3'>
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem className='grow'>
                <FormMessage />
                <FormControl>
                  <Input placeholder='what do you have to do?' {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='status'
            render={({ field }) => (
              <FormItem className='grow'>
                <FormMessage />
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Status' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='starting'>
                      <StatusBullet status='starting' />
                    </SelectItem>
                    <SelectItem value='progress'>
                      <StatusBullet status='progress' />
                    </SelectItem>
                    <SelectItem value='done'>
                      <StatusBullet status='done' />
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          {isEditing ? null : (
            <Button
              type='submit'
              icon={
                isLoading ? (
                  <VscLoading className='animate-spin' />
                ) : (
                  <IoAddOutline />
                )
              }
            >
              Add Task
            </Button>
          )}
        </div>
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormMessage />
              <FormControl>
                <Textarea
                  placeholder='Give more information about the task'
                  className='resize-none'
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </FormComp>
  )
}
