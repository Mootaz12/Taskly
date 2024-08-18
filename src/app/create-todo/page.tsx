import { addTodo } from "@/actions";
import React from "react";

function Page() {
  return (
    <section className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-center text-2xl font-semibold text-gray-800 mb-6">
        Add a New Todo!
      </h1>
      <form action={addTodo} className="flex flex-col gap-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 "
        />
        <textarea
          name="description"
          cols={30}
          rows={5}
          placeholder="Description"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Add Todo
        </button>
      </form>
    </section>
  );
}

export default Page;
