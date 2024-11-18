import React from 'react'
import { Form as FormComp, FormField } from '../ui/form'
import { useForm } from 'react-hook-form'

export default function Form() {

    const form = useForm()

  return (
    <FormComp>
         <form 
            action=""
            className='space-y-2'
         >
            <div className='flex items-center gap-3'>
                <FormField/>

            </div>
            
         </form>
    </FormComp>
  )
}
