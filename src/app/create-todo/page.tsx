import { addTodo } from "@/actions";
import React from "react";
function page() {
  return (
    <main className="m-10">
      <h1 className="text-center text-2xl">Add a new Todo!</h1>
      <form action={addTodo} className="flex flex-col gap-3 ">
        <input type="text" name="title" placeholder="Title" />
        <textarea
          name="description"
          cols={30}
          rows={5}
          placeholder="description"
        ></textarea>
        <button type="submit">Add Todo</button>
      </form>
    </main>
  );
}

export default page;
