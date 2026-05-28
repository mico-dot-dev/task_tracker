"use client";
import React, { useEffect } from "react";
import { AVAILABLE_CATEGORIES } from "@/src/lib/task-util";
import { useForm } from "react-hook-form";
import {
  TaskFormModelBase,
  TaskFormModelInput,
  TaskFormSchema,
  TaskSchema,
  TaskFormModelUpdate,
  ActionResponse,
  TaskListModel,
} from "@/src/types/task";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateTask, GetTaskByID, UpdateTask } from "@/src/actions/task.action";
import Swal from "sweetalert2";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

function TaskForm() {
  const searchParams = useSearchParams();
  const taskId = searchParams.get("id");
  const router = useRouter();

  const { register, handleSubmit, reset } = useForm<TaskFormModelBase>({
    resolver: zodResolver(TaskSchema),
    defaultValues: {
      title: "",
      completed: false,
      category: AVAILABLE_CATEGORIES[0],
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
            category: AVAILABLE_CATEGORIES[0],
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

  function handleCancelEdit() {
    try {
      reset({
        title: "",
        description: "",
        category: AVAILABLE_CATEGORIES[0],
        completed: false,
      });
      router.replace("/tasks");
    } catch (error) {}
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
            {taskId ? "Update Task" : "Add Task"}
          </button>
        </form>
        {taskId && (
          <button
            className="mt-5 cursor-pointer bg-primary text-text-on-button rounded-4xl h-12 text-lg flex items-center justify-center "
            onClick={handleCancelEdit}
          >
            Cancel Edit
          </button>
        )}
      </div>
    </div>
  );
}

export default TaskForm;
