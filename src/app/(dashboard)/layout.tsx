import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return <div className="flex h-dvh w-full text-primary-text">{children}</div>;
}

export default layout;
