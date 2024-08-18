import React from "react";
import { todo } from "@/types";
import DeleteTodoBtn from "./DeleteTodoBtn";
import UpdateTodoBtn from "./UpdateTodoBtn";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
const TodoCard = ({ todo }: { todo: todo }) => {
  const { listeners, attributes, setNodeRef, transform, transition } =
    useSortable({ id: String(todo.id) });

  const style = { transition, transform: CSS.Transform.toString(transform) };
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="bg-white shadow-lg rounded-lg p-6 mb-6 hover:bg-gray-50 transition-all duration-200 ease-in-out flex items-center justify-between"
    >
      <div className="flex-1 pr-6">
        <p className="text-2xl font-bold text-gray-900">{todo.title}</p>
        <p className="text-gray-700 mt-2">{todo.description}</p>
      </div>
      <div className="flex flex-col items-end gap-2">
        <UpdateTodoBtn todo={todo} />
        <DeleteTodoBtn todo={todo} />
      </div>
    </div>
  );
};

export default TodoCard;
