"use server"

import formSchema from "@/components/form/schema";
import prisma from "@/lib/prisma";

export async function createTask(task: formSchema){
    await prisma.task.create({
        data :{
            description: task.description || "",
            status: task.status,
            title: task.title
        }
    })
}