"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateCategory } from "@/src/actions/category.action";
import { CategorySchema, CategoryModel } from "@/src/types/category";
import Swal from "sweetalert2";

function TaskCatForm() {
  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(CategorySchema),
    defaultValues: {
      title: "",
    },
  });

  async function CategorySubmit(data: CategoryModel) {
    const res = await CreateCategory(data);
    if (res.success) {
      reset();
      Swal.fire({
        icon: "success",
        title: "Category Created",
        text: "Your category has been created successfully.",
      });
    }
  }

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={handleSubmit(CategorySubmit)}
    >
      <div className="flex flex-col  gap-2">
        <label htmlFor="category-name">Category Name</label>
        <input
          id="category-name"
          type="text"
          placeholder="Category Name"
          className="input-base p-2"
          {...register("title")}
        />
      </div>
      <button type="submit" className="button-base py-2 rounded-2xl">
        Add Category
      </button>
    </form>
  );
}

export default TaskCatForm;
