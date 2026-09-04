"use client";

import React from "react";
import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="flex relative h-full py-1">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="h-5 w-5 text-muted-icon" aria-hidden="true" />
      </div>

      <input
        type="text"
        placeholder="Search a task..."
        id="task-search"
        name="task-search"
        className=" w-full h-ful pl-10 pr-4 text-md border input-base "
      />
    </div>
  );
}

export default SearchBar;
