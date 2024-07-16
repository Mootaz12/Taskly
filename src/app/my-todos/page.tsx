import TodoCard from "@/components/TodoCard";
import TodoList from "@/components/TodoList";
import { Spin } from "antd";
import React, { Suspense } from "react";

async function page() {
  return (
    <div className="p-4">
      <Suspense fallback={<Spin />}>
        <TodoList />
      </Suspense>
    </div>
  );
}

export default page;
