import Navbar from "@/src/components/Navbar";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-dvh w-full text-primary-text">
      <Navbar />
      {children}
    </div>
  );
}

export default layout;
