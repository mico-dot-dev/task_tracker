import React from "react";
import { useFormContext } from "react-hook-form";
import { DynamicFormModel } from "@/src/types/expense";

function StockSubForm() {
  const { register } = useFormContext<DynamicFormModel>();
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor="title">Minimum Amount</label>
        <input
          id="title"
          type="int"
          className="input-base p-2"
          {...register("min_amount")}
        />
      </div>
    </>
  );
}

export default StockSubForm;
