"use client"
import { z } from "zod"

const status = z.union([z.literal("starting"), z.literal("progress"), z.literal("done")]).default("starting")

const formSchema = z.object({
    title: z.string().min(5, "Title must be at least 5 characters").max(25, "Title must not exceed 25 characters").default(""),
    description: z.string().min(5, "Description must be at least 5 characters").max(100, "Description must not exceed 100 characters").optional(),
    status, 
})

export default formSchema

export type TaskStatus = z.infer<typeof status>
export type FormSchemaType = z.infer<typeof formSchema>
