"use server";

import prisma from "@/db/db";
import { todo } from "@/types";
import { revalidatePath } from "next/cache";

export async function getAlltodos(): Promise<todo[] | null> {
  try {
    return await prisma.todo.findMany();
  } catch (error) {
    console.error(error);
    return null;
  }
}
export async function getTodo(id: string): Promise<todo | null> {
  try {
    return await prisma.todo.findUnique({ where: { id: id } });
  } catch (error) {
    console.error(error);
    return null;
  }
}
export async function addTodo(data: FormData): Promise<void> {
  try {
    await prisma.todo.create({
      data: {
        title: data.get("title") as string,
        description: data.get("description") as string,
      },
    });
  } catch (error) {
    console.error("Error creating todo:", error);
    throw new Error("Failed to create todo");
  } finally {
    await prisma.$disconnect();
    revalidatePath("/my-todos");
  }
}
export async function updateTodo(data: FormData): Promise<void> {
  try {
    await prisma.todo.update({
      where: { id: data.get("id") as string },
      data: {
        title: data.get("title") as string,
        description: data.get("description") as string,
      },
    });
  } catch (error) {
    console.error(error);
  }
}
export async function deleteTodo(id: string): Promise<void> {
  try {
    await prisma.todo.delete({ where: { id: id } });
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw new Error("Failed to delete todo");
  } finally {
    await prisma.$disconnect();
    revalidatePath("/my-todos");
  }
}
