import React from "react";
import { ChevronDown } from "lucide-react";

function Filter() {
  return (
    <div className="flex flex-row gap-3 text-background">
      <button className="flex flex-row gap-1.5  button-base rounded-xl h-full px-3">
        <p className="text-muted-text">Group by: </p>
        <p className="font-semibold"> Category</p>
        <ChevronDown size={18} />
      </button>
      <button className="button-base rounded-xl px-3">Filter</button>
    </div>
  );
}

export default Filter;
