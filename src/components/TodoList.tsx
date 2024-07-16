import prisma from "@/db/db";
import { todo } from "@/types";
import React from "react";
import TodoCard from "./TodoCard";

async function TodoList() {
  const myTodos: todo[] = await prisma.todo.findMany();

  return (
    <React.Fragment>
      {myTodos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </React.Fragment>
  );
}

export default TodoList;
