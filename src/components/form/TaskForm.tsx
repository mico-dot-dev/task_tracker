"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  TaskFormModelBase,
  TaskFormModelInput,
  TaskFormSchema,
  TaskFormModelUpdate,
} from "@/src/types/task";
import { ActionResponse } from "@/src/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateTask, GetTaskByID, UpdateTask } from "@/src/actions/task.action";
import Swal from "sweetalert2";
import { useSearchParams } from "next/navigation";
import { GetUserCategory } from "@/src/actions/category.action";
import { CategoryListModel } from "@/src/types/category";

interface TaskFormProps {
  closeModal: (open: boolean) => void;
}

function TaskForm({ closeModal }: TaskFormProps) {
  const searchParams = useSearchParams();
  const taskId = searchParams.get("id");
  const [userCategories, setUserCategories] = useState<CategoryListModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const { register, handleSubmit, reset } = useForm<TaskFormModelInput>({
    resolver: zodResolver(TaskFormSchema),
    defaultValues: {
      title: "",
      completed: false,
      description: "",
      category_id: 0,
    },
  });

  useEffect(() => {
    async function initializeData() {
      setLoading(true);
      try {
        const categoryPromise = GetUserCategory();
        const taskPromise = taskId
          ? GetTaskByID(taskId)
          : Promise.resolve(null);
        const [categories, taskData] = await Promise.all([
          categoryPromise,
          taskPromise,
        ]);

        if (categories.success && categories.data) {
          setUserCategories(categories.data || []);
          reset({
            category_id: categories.data.length > 0 ? categories.data[0].id : 0,
          });
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }

    initializeData();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col gap-3">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (userCategories.length === 0) {
    return (
      <div className="flex flex-col gap-3">
        <p className="text-muted-text">
          You need to create a category before adding tasks.
        </p>
      </div>
    );
  }

  async function TaskSubmit(data: TaskFormModelInput) {
    try {
      let res: ActionResponse<TaskFormModelBase>;

      const createData: TaskFormModelInput = {
        ...data,
      };
      res = await CreateTask(createData);

      if (!res.success) {
        throw new Error(
          res.error || "An error occurred while saving the task.",
        );
      }
      closeModal(false);
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
          id="task-description"
          placeholder="Task Description"
          className="input-base resize-none p-2 h-24"
        />

        <label htmlFor="task-category">Category</label>
        <select
          {...register("category_id", { valueAsNumber: true })}
          id="task-category"
          className="input-base p-2"
          required
        >
          {userCategories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="button-base rounded-4xl py-1.5 text-lg flex items-center justify-center font-semibold"
      >
        {taskId ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
}

export default TaskForm;
