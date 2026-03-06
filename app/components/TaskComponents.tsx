"use client";

import React from "react";
import Swal from "sweetalert2";

export function TaskForm() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);

      const response = await fetch("/api/task", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Task added successfully",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <label htmlFor="title">Task Title</label>
          <input
            type="text"
            name="title"
            placeholder="Create a new task"
            className="min-w-full bg-input py-3 rounded-xl indent-3"
          />
          <label htmlFor="description">Task Description</label>
          <textarea
            name="description"
            placeholder="Add a description for your task"
            className="bg-input py-5 pb-30 indent-3 rounded-xl resize-none "
          />
        </div>

        <button
          className="bg-button text-background w-[80%] py-2.5 rounded-3xl self-center"
          type="submit"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export function TaskButton() {
  return (
    <button
      className="bg-button text-background w-15 aspect-square rounded-4xl"
      onClick={() => (window.location.href = "/taskAdd")}
    >
      +
    </button>
  );
}
