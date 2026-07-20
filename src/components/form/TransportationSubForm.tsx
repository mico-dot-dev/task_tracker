import React from "react";
import {
  Control,
  useFieldArray,
  UseFormRegister,
  FieldErrors,
} from "react-hook-form";
import { DynamicFormSchema, DynamicFormModel } from "@/src/types/expense";
import { Plus, Trash } from "lucide-react";

interface ParentFormProps {
  control: Control<DynamicFormModel>; // 👈 Type definition
  register: UseFormRegister<DynamicFormModel>;
  errors: FieldErrors<DynamicFormModel>;
}

function TransportationSubForm({ control, register, errors }: ParentFormProps) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "fares" as never,
  });
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor="expense-name">Fare List</label>
        <input
          id="expense-name"
          name="expense-name"
          type="text"
          className="input-base p-2"
        />
      </div>
    </>
  );
}

export default TransportationSubForm;
