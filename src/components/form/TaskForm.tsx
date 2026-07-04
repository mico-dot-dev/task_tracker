"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  TaskFormModelBase,
  TaskFormModelInput,
  TaskSchema,
  TaskFormModelUpdate,
} from "@/src/types/task";
import { ActionResponse } from "@/src/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateTask, GetTaskByID, UpdateTask } from "@/src/actions/task.action";
import Swal from "sweetalert2";
import { useSearchParams } from "next/navigation";

function TaskForm() {
  const searchParams = useSearchParams();
  const taskId = searchParams.get("id");

  const { register, handleSubmit, reset } = useForm<TaskFormModelBase>({
    resolver: zodResolver(TaskSchema),
    defaultValues: {
      title: "",
      completed: false,
      description: "",
    },
  });

  useEffect(() => {
    async function fetchTaskData(id: string) {
      try {
        if (!taskId) {
          reset({
            title: "",
            description: "",
            completed: false,
          });
          return;
        }

        const res = await GetTaskByID(id);
        if (res.success && res.data) {
          reset(res.data);
          return;
        }
      } catch (error) {
        console.error("Error occurred while fetching task data:", error);
      }
    }
    if (taskId) {
      fetchTaskData(taskId);
    }
  }, [taskId, reset]);

  async function TaskSubmit(data: TaskFormModelBase) {
    try {
      let res: ActionResponse<TaskFormModelBase>;
      if (taskId) {
        const updateData: TaskFormModelUpdate = {
          ...data,
          id: taskId,
        };
        res = await UpdateTask(updateData);
      } else {
        const createData: TaskFormModelInput = {
          ...data,
          user_id: "",
        };
        res = await CreateTask(createData);
      }

      if (!res.success) {
        throw new Error(
          res.error || "An error occurred while saving the task.",
        );
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
    <form
      onSubmit={handleSubmit(TaskSubmit)}
      className="flex flex-col gap-10 text-base"
    >
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <label htmlFor="task-title">Task Title</label>
          <input
            {...register("title")}
            required
            id="task-title"
            type="text"
            placeholder="Task Title"
            className="input-base p-2"
          />
        </div>
        <label htmlFor="task-description">Task Description</label>
        <textarea
          {...register("description")}
          required
          id="task-description"
          placeholder="Task Description"
          className="input-base resize-none p-2 h-24"
        />

        <label htmlFor="task-category">Category</label>
      </div>

      <button className="button-base rounded-4xl py-2 text-lg flex items-center justify-center font-semibold">
        {taskId ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
}

export default TaskForm;
