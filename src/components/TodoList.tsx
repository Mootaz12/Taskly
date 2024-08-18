"use client";
import { todo } from "@/types";
import React, { useState } from "react";
import TodoCard from "./TodoCard";
import {
  closestCorners,
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

function TodoList({ todos }: any) {
  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const keyboardSensor = useSensor(KeyboardSensor);
  const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);
  const [myTodos, setMyTodos] = useState<todo[]>(todos);
  // Handle drag end
  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    // Check if there is a valid over item
    if (over && active.id !== over.id) {
      const oldIndex = myTodos.findIndex((todo: todo) => todo.id === active.id);
      const newIndex = myTodos.findIndex((todo: todo) => todo.id === over.id);

      // Reorder items using arrayMove from @dnd-kit/sortable
      const newTodos = arrayMove(myTodos, oldIndex, newIndex);

      // Update state
      setMyTodos(newTodos);
    }
  };
  return (
    <DndContext
      collisionDetection={closestCorners}
      sensors={sensors}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={myTodos.map((todo: todo) => todo.id)}
        strategy={verticalListSortingStrategy}
      >
        {myTodos?.map((todo: todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </SortableContext>
    </DndContext>
  );
}

export default TodoList;
