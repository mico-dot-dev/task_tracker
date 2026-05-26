"use client";
import React from "react";
import { AVAILABLE_CATEGORIES } from "@/src/lib/task-util";
import { useForm } from "react-hook-form";
import { TaskFormModelInput, TaskFormSchema } from "@/src/types/task";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateTask } from "@/src/actions/task.action";
import Swal from "sweetalert2";

function TaskForm() {
  const { register, handleSubmit } = useForm<TaskFormModelInput>({
    resolver: zodResolver(TaskFormSchema),
    defaultValues: {
      title: "",
      completed: false,
      category: AVAILABLE_CATEGORIES[0],
      user_id: "",
      description: "",
    },
  });

  async function TaskSubmit(data: TaskFormModelInput) {
    try {
      const res = await CreateTask(data);
      if (!res.success) {
        console.error("Error creating task:", res.error);
        return;
      }

      Swal.fire({
        icon: "success",
        title: "Task Added Successfully",
      });
    } catch (error) {
      console.error("Error submitting task:", error);
    }
  }

  return (
    <div className="w-1/2 mt-10 justify-items-center">
      <div className="flex flex-col w-4/5 h-[95%] justify-center">
        <p className="flex mb-10">Add a new task</p>
        <form
          onSubmit={handleSubmit(TaskSubmit)}
          className="flex flex-col gap-10"
        >
          <div className="flex flex-col gap-5">
            <label htmlFor="task-title">Task Title</label>
            <input
              {...register("title")}
              required
              id="task-title"
              type="text"
              placeholder="Task Title"
              className="input-base"
            />
            <label htmlFor="task-description">Task Description</label>
            <input
              {...register("description")}
              required
              id="task-description"
              placeholder="Task Description"
              type="text"
              className="input-base"
            />

            <label htmlFor="task-category">Category</label>
            <select
              {...register("category")}
              required
              defaultValue={AVAILABLE_CATEGORIES[0]}
              name="category"
              id="task-category"
              className="input-base"
            >
              {AVAILABLE_CATEGORIES.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <button className="cursor-pointer bg-primary text-text-on-button rounded-4xl h-12 text-lg flex items-center justify-center ">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
