"use server"

import formSchema from "@/components/form/schema";
import prisma from "@/lib/prisma";
import { Task } from "@prisma/client";
import { revalidatePath } from "next/cache";

function revalidateData(){
    revalidatePath("/", "layout")
}

export async function createTask(task: formSchema){
    await prisma.task.create({
        data :{
            description: task.description || "",
            status: task.status,
            title: task.title
        }
    })
    revalidateData()
}

export async function getTasks() {
    const tasks = await prisma.task.findMany({
        orderBy: {
            createdAt: "desc"
        }
    })
    return tasks
}

export async function deleteTask(id: string) {
    await prisma.task.delete({
        where: {id}
    })
    revalidateData()
}

export async function updateTask(task: Task) {
    await prisma.task.update({
        where: {id: task.id},
        data: task
    })
    revalidateData()
}

export async function getTaskCountByStatus() {
    
    const [starting, progress, done] = await Promise.all([
        prisma.task.count({where: {status: "starting"}}),
        prisma.task.count({where: {status: "progress"}}),
        prisma.task.count({where: {status: "done"}})
    ])

    return {starting, progress, done}
}