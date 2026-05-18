"use client";
import React from "react";
import { AVAILABLE_CATEGORIES } from "@/src/constants/categories";
import { useForm } from "react-hook-form";
import { TaskFormModel, TaskFormSchema } from "@/src/types/task";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateTask } from "@/src/actions/task.action";
import Swal from "sweetalert2";

function TaskForm() {
  const { register, handleSubmit } = useForm<TaskFormModel>({
    resolver: zodResolver(TaskFormSchema),
    defaultValues: {
      title: "",
      description: "",
      category: AVAILABLE_CATEGORIES[0],
      completed: false,
      user_id: "",
    },
  });

  async function TaskSubmit(data: TaskFormModel) {
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
      <div className="flex flex-col w-4/5 h-[95%]">
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
              className="
              bg-foreground border-border rounded-2xl
              h-12 indent-3
              text-primary-text
            
              focus:outline-none
              focus:ring-2
              focus:ring-primary
              focus:border-primary
              "
            />
            <label htmlFor="task-description">Task Description</label>
            <input
              {...register("description")}
              required
              id="task-description"
              placeholder="Task Description"
              type="text"
              className="
              bg-foreground border-border rounded-2xl
              h-12 indent-3
              text-primary-text
            
              focus:outline-none
              focus:ring-2
              focus:ring-primary
              focus:border-primary
              "
            />

            <label htmlFor="task-category">Category</label>
            <select
              {...register("category")}
              required
              defaultValue={AVAILABLE_CATEGORIES[0]}
              name="category"
              id="task-category"
              className="
              bg-foreground border-border rounded-2xl
              h-12 indent-3
              text-primary-text
            
              focus:outline-none
              focus:ring-2
              focus:ring-primary
              focus:border-primary
              "
            >
              {AVAILABLE_CATEGORIES.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <button className="cursor-pointer bg-primary text-background rounded-4xl h-12 text-lg flex items-center justify-center ">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
