"use server";
import { revalidatePath} from "next/cache";
import { redirect } from "next/navigation";
import prisma from "@/utils/db";

export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const createTask = async (formData) => {
  const content = formData.get("content");
  await prisma.task.create({
    data: {
      content: content,
    },
  });
  revalidatePath("/tasks");
};
export const createTaskCustom = async (prevState, formData) => {
  // await new Promise((resolve)=>setTimeout(resolve, 2000));
  const content = formData.get("content");
  
  try {
    await prisma.task.create({
      data: {
        content: content,
      },
    });
    revalidatePath("/tasks");
    return {message: "Success!!"}
  } catch (error) {
    return {message: "error..."}
  }
};

export const deleteTask = async (formData) => {
  const id = formData.get("id");
  await prisma.task.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/tasks");
};

export const getTask = async(id) => {
  const data = await prisma.task.findFirst({
    where: {
      id: id
    }
  })
  return data;
}

export const updateTask = async (formData) => {
  const id = formData.get('id');
  const completed = Boolean(formData.get('completed'));
  const content = formData.get('content');
  await prisma.task.update({
    where: {
      id: id,
    },
    data: {
      content: content,
      completed: completed
    },
  });
  redirect("/tasks");
};
