"use client";

import React from "react";

function TaskForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Task form submitted");
    try {
      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);

      const response = fetch("/api/task", {
        method: "POST",
        body: formData,
      });
    } catch (error) {}
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Do you have a new task? Input it here"
          className="min-w-full"
        />
        <textarea name="description" placeholder="Task description" />
        <button
          type="submit"
          className="cursor-pointer bg-white text-black p-1 rounded-lg"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
