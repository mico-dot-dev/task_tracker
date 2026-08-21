import React from "react";
import { DateRepeatType } from "@/src/generated/prisma";
import { useFormContext } from "react-hook-form";
import { DynamicFormModel } from "@/src/schema/expense.schema";

function BillSubForm() {
  const { register, watch } = useFormContext<DynamicFormModel>();

  return (
    <>
      <div className="flex flex-col">
        <label htmlFor="title">Repeating Type</label>
        <select
          id=""
          className="input-base p-2"
          {...register("repeating_type")}
          value={watch("repeating_type")}
        >
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
        <input
          id="title"
          type="int"
          className="input-base p-2"
          {...register("running_bill", { valueAsNumber: true })}
        />
      </div>
    </>
  );
}

export default BillSubForm;
