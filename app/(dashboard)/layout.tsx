import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return <div className="text-primary-text">{children}</div>;
}

export default layout;
