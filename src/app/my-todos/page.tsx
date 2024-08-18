import { getAlltodos } from "@/actions";
import TodoList from "@/components/TodoList";
import { todo } from "@/types";
import { Spin } from "antd";
import React, { Suspense } from "react";

async function Page() {
  const myTodos: todo[] | null = await getAlltodos();

  return (
    <div className="p-4">
      <Suspense fallback={<Spin />}>
        <TodoList todos={myTodos} />
      </Suspense>
    </div>
  );
}

export default Page;
