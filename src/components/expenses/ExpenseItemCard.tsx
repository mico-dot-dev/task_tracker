import React from "react";

function ExpenseItemCard(e: any) {
  console.log(e);
  return (
    <li className="">
      <p>{e.title}</p>
      <p>{}</p>
    </li>
  );
}

export default ExpenseItemCard;
