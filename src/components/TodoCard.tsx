import React from "react";
import { TodoCardPropsType } from "@/types";
import DeleteTodoBtn from "./DeleteTodoBtn";
import UpdateTodoBtn from "./UpdateTodoBtn";

const TodoCard: React.FC<TodoCardPropsType> = ({ todo }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 hover:bg-gray-100 flex gap-5 justify-between ">
      <div className="flex flex-col items-center justify-center gap-3 text-center ">
        <p className="text-xl font-semibold">{todo.title}</p>
        <p className="text-gray-700 max-w-[500px]">{todo.description}</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <UpdateTodoBtn todo={todo} />
        <DeleteTodoBtn todo={todo} />
      </div>
    </div>
  );
};

export default TodoCard;
