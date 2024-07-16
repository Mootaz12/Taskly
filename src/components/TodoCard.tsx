import React from "react";
import { TodoCardPropsType } from "@/types";

const TodoCard: React.FC<TodoCardPropsType> = ({ todo }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 hover:bg-gray-100  ">
      <p className="text-xl font-semibold">{todo.title}</p>
      <p className="text-gray-700">{todo.description}</p>
    </div>
  );
};

export default TodoCard;
