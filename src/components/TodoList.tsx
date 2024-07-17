import { todo } from "@/types";
import React from "react";
import TodoCard from "./TodoCard";
import { getAlltodos } from "@/actions";

async function TodoList() {
  const myTodos: Promise<todo[] | null> = getAlltodos();
  return (
    <React.Fragment>
      {(await myTodos)?.map((todo: todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </React.Fragment>
  );
}

export default TodoList;
