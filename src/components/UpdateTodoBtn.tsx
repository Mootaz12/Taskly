import { todo } from "@/types";
import Link from "next/link";
import React from "react";

function UpdateTodoBtn({ todo }: { todo: todo }) {
  return <Link href={`/todo/${todo.id}`}>Update</Link>;
}

export default UpdateTodoBtn;
