"use client";
import { deleteTodo } from "@/actions";
import { todo } from "@/types";
import { message } from "antd";
import React from "react";

function DeleteTodoBtn({ todo }: { todo: todo }) {
  return (
    <button
      type="button"
      onClick={() => {
        deleteTodo(todo.id);
        message.success("todo deleted with success");
      }}
    >
      Delete
    </button>
  );
}

export default DeleteTodoBtn;
