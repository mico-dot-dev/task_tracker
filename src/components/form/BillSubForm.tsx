import React from "react";
import { DateRepeatType } from "@/src/generated/prisma";

function BillSubForm() {
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor="title">Repeating Type</label>
        <select name="" id="" className="input-base p-2">
          {Object.values(DateRepeatType).map((type) => {
            const formattedLabel =
              type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
            return (
              <option value={type} key={type}>
                {formattedLabel}
              </option>
            );
          })}
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="title">Running Bill</label>
        <input id="title" type="int" className="input-base p-2" />
      </div>
    </>
  );
}

export default BillSubForm;
