import React from "react";

function ExpenseItemCard(e: any) {
  console.log(e);
  return (
    <div className="">
      <p>{e.title}</p>
      <p>{}</p>
    </div>
  );
}

export default ExpenseItemCard;
