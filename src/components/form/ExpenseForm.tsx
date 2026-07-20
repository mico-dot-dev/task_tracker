"use client";
import React, { useEffect } from "react";
import { ExpenseType } from "@/src/generated/prisma";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { DynamicFormSchema, DynamicFormModel } from "@/src/types/expense";
import TransportationSubForm from "@/src/components/form/TransportationSubForm";

interface AddFormProps {
  closeModal: () => void;
}

function ExpenseForm({ closeModal }: AddFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<DynamicFormModel>({
    resolver: zodResolver(DynamicFormSchema),
    defaultValues: {
      expense_type: ExpenseType.MISC,
    },
  });

  const curr_type = watch("expense_type");
  function renderSpecializedFields() {
    switch (curr_type) {
      case ExpenseType.TRANSPORTATION:
        return (
          <TransportationSubForm
            control={control}
            register={register}
            errors={errors}
          />
        );
      case ExpenseType.GROCERY:
        return <>gro</>;
      case ExpenseType.HOUSE:
        return <>h</>;
      case ExpenseType.PERSONAL:
        return <>p</>;
      case ExpenseType.MISC:
        return <>m</>;
      default:
        return <></>;
    }
  }

  return (
    <form className="flex flex-col gap-3 text-base h-full overflow-y-scroll">
      <div className="flex flex-col">
        <label htmlFor="expense-name">Expense Name</label>
        <input
          id="expense-name"
          name="expense-name"
          type="text"
          className="input-base p-2"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="expense-desc">Expense Description</label>
        <textarea
          id="expense-desc"
          name="expense-desc"
          className="input-base p-2 h-24 resize-none"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="expense_type">Expsense Category</label>
        <select
          id="expense_type"
          className="input-base p-2"
          {...register("expense_type")}
        >
          {Object.values(ExpenseType).map((type) => {
            const formattedLabel =
              type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
            return (
              <option key={type} value={type}>
                {formattedLabel}
              </option>
            );
          })}
        </select>
      </div>

      {renderSpecializedFields()}

      <div className="flex flex-1 items-end">
        <button
          type="submit"
          className="button-base rounded-4xl py-1.5 text-lg flex items-center justify-center font-semibold w-full h-10"
        >
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
