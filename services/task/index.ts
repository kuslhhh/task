"use server"

import formSchema from "@/components/form/schema";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createTask(task: formSchema){
    await prisma.task.create({
        data :{
            description: task.description || "",
            status: task.status,
            title: task.title
        }
    })
    revalidatePath("/", "layout")
}

export async function getTasks() {
    const tasks = await prisma.task.findMany({
        orderBy: {
            createdAt: "desc"
        }
    })
    return tasks
}