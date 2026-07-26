"use client";

import React from "react";
import {
  Control,
  useFieldArray,
  UseFormRegister,
  FieldErrors,
} from "react-hook-form";
import { TranspoFormModel } from "@/src/types/expense";
import { Plus, Trash } from "lucide-react";

interface ParentFormProps {
  control: Control<TranspoFormModel>;
  register: UseFormRegister<TranspoFormModel>;
  errors: FieldErrors<TranspoFormModel>;
}

function TransportationSubForm({ control, register, errors }: ParentFormProps) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "cost_list",
  });

  return (
    <>
      <div className="flex flex-col">
        <label htmlFor="expense-name">Fare List</label>
        <div className="flex flex-col gap-3">
          {fields.map((field, index) => (
            <div className="flex flex-row justify-between" key={field.id}>
              <input
                type="number"
                className="input-base p-2 flex-1"
                placeholder="0"
                {...register(`cost_list.${index}.amount`)}
              />
              <button
                className="ml-5 p-2 cursor-pointer"
                type="button"
                onClick={() => remove(index)}
              >
                <Trash size={20} />
              </button>
            </div>
          ))}

          <div
            className="flex items-center gap-2 text-primary cursor-pointer hover:text--hover"
            onClick={() => append({ amount: 0 })}
          >
            {" "}
            <Plus size={15} /> <p className="">Add another fare</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TransportationSubForm;
