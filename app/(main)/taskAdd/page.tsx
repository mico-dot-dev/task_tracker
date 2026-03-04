"use client";

import React, { use } from "react";
import { TaskForm } from "@/app/components/TaskComponents";

function page() {
  function back() {
    window.history.back();
  }

  return (
    <div className="justify-self-center w-[90%] mt-8 ">
      <div className="flex justify-center relative mb-8">
        <span className="absolute left-0 cursor-pointer" onClick={back}>
          Back
        </span>
        <p className="justify-self-center flex">Add a new task</p>
      </div>
      <TaskForm />
    </div>
  );
}

export default page;
