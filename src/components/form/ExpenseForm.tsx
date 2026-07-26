"use client";
import React, { FormEvent, useEffect } from "react";
import { ExpenseType } from "@/src/generated/prisma";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useForm,
  Control,
  UseFormRegister,
  FieldErrors,
} from "react-hook-form";
import {
  DynamicFormSchema,
  DynamicFormInputModel,
  TranspoFormModel,
  DynamicFormOutputtModel,
} from "@/src/types/expense";
import TransportationSubForm from "@/src/components/form/TransportationSubForm";
import BillSubForm from "./BillSubForm";
import StockSubForm from "./StockSubForm";
import { CreateExpense } from "@/src/actions/expense.action";

interface AddFormProps {
  closeModal: () => void;
}

function ExpenseForm({ closeModal }: AddFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm<DynamicFormInputModel>({
    resolver: zodResolver(DynamicFormSchema),
    defaultValues: {
      title: "",
      description: "",
      expense_type: ExpenseType.MISC,
    },
  });

  const curr_type = watch("expense_type");

  function renderSpecializedFields() {
    switch (curr_type) {
      case ExpenseType.HOUSE:
      case ExpenseType.PERSONAL:
        return <BillSubForm />;
      case ExpenseType.TRANSPORTATION:
        return (
          <TransportationSubForm
            control={control as Control<TranspoFormModel>}
            register={register as UseFormRegister<TranspoFormModel>}
            errors={errors as FieldErrors<TranspoFormModel>}
          />
        );
      case ExpenseType.GROCERY:
        return <StockSubForm />;
      case ExpenseType.MISC:
      default:
        return <></>;
    }
  }

  async function ExpeneseSubmit(data: DynamicFormInputModel) {
    try {
      const res = await CreateExpense(data);
      if (res.success) console.log("Success");
    } catch (e) {}
  }

  return (
    <form
      className="modal-form-base"
      onSubmit={handleSubmit(ExpeneseSubmit, (invalidErrors) => {
        console.log("❌ Form Validation Failed:", invalidErrors);
      })}
    >
      <div className="flex flex-col">
        <label htmlFor="title">Expense Name</label>
        <input
          id="title"
          type="text"
          className="input-base p-2"
          {...register("title")}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="description">Expense Description</label>
        <textarea
          id="description"
          className="input-base p-2 h-24 resize-none"
          {...register("description")}
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
