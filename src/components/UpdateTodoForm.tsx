"use client";
import { updateTodo } from "@/actions";
import { UpdateTodoFormProps } from "@/types";
import { useEffect, useState } from "react";
const UpdateTodoForm: React.FC<UpdateTodoFormProps> = ({ todo }) => {
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [id, setId] = useState<string>();
  useEffect(() => {
    if (todo) {
      setTitle(todo.title as string);
      setDescription(todo.description as string);
      setId(todo.id);
    }
  }, [todo]);
  return (
    <form action={updateTodo} className="flex flex-col gap-3 p-4 m-5">
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle((prev) => e.target.value)}
      />
      <textarea
        name="description"
        cols={30}
        rows={5}
        value={description}
        onChange={(e) => setDescription((prev) => e.target.value)}
      />
      <input type="hidden" name="id" value={id} />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateTodoForm;
