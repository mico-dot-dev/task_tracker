import React from "react";
export const dynamic = "force-dynamic";

function page() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="h-[90%] w-[90%] relative">
        <p className="mb-3">Task Tracker</p>
        {/* <TaskTable tasks={tasks} /> */}
        <div className="absolute bottom-0 flex justify-end w-full "></div>
      </div>
    </div>
  );
}

export default page;
