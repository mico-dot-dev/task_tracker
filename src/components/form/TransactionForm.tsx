"use client";

import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  expenseIconMap,
  expenseIconProps,
} from "@/src/lib/utils/expense-mapper";
import { ExpenseType, TransactionStatus } from "@/src/generated/prisma";
import {
  TransactionFormModel,
  TransactionSchema,
  TransactionListModel,
} from "@/src/schema/transaction.schema";
import { DynamicListModel } from "@/src/schema/expense.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { GetUserExpenseByType } from "@/src/actions/expense.action";
import ExpenseCard from "@/src/components/transaction/TransactionFormButtonCard";
import { twJoin } from "tailwind-merge";
import { CreateUserTransaction } from "@/src/actions/transaction.action";
import Swal from "sweetalert2";

interface AddFormProps {
  closeModal: () => void;
}

type expenseButtonProps = {
  isSelected: boolean;
  expenseType: ExpenseType;
  iconConfig: expenseIconProps;
  onSelectType: (type: ExpenseType) => void;
};

function TransactionForm({ closeModal }: AddFormProps) {
  const methods = useForm<TransactionFormModel>({
    resolver: zodResolver(TransactionSchema),
    defaultValues: {
      name: "",
      expense_type: ExpenseType.MISC,
      amount: 1,
      price: 0,
      due_date: undefined,
      expense_id: "0",
      status: TransactionStatus.PENDING,
    },
  });

  const { register, watch, setValue, handleSubmit } = methods;
  const selectedExpenseType = watch("expense_type");
  const selectedExpenseId = watch("expense_id");

  const [expenseData, setExpenseData] = useState<DynamicListModel[]>();

  useEffect(() => {
    const fetchExpenseData = async () => {
      const res = await GetUserExpenseByType(selectedExpenseType);
      if (!res.success) return null;
      setExpenseData(res.data);
    };
    fetchExpenseData();
  }, [selectedExpenseType]);

  const [step, setStep] = useState(1);
  const nextStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStep((prev) => Math.min(prev + 1, 3));
  };
  const prevStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const formSubmit = async (data: TransactionListModel) => {
    const res = await CreateUserTransaction(data);
    if (!res.success) alert(res.error);

    await Swal.fire({
      icon: "success",
      title: "Transaction Made",
      text: "nice",
    });
  };

  const onInvalid = (errors: any) => {
    console.log("❌ Form Validation Failed:", errors);
  };

  return (
    <>
      <div className="text-xs">
        <ul className="steps w-full">
          <li className="step step-primary"></li>
          <li className="step "></li>
          <li className="step "></li>
        </ul>
        <p>Select the Expense Type</p>
      </div>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(formSubmit, onInvalid)}>
          {/* Step 1 */}
          {step === 1 && (
            <fieldset className="flex-flex-col">
              {Object.entries(expenseIconMap).map(([typeKey, config]) => {
                const convertedType = typeKey as ExpenseType;
                const isSelected = convertedType === selectedExpenseType;

                return (
                  <ExpenseCard
                    key={typeKey}
                    expenseType={convertedType}
                    iconConfig={config}
                    isSelected={isSelected}
                    onSelectType={(expense) =>
                      setValue("expense_type", expense)
                    }
                  />
                );
              })}
            </fieldset>
          )}

          {/* Showcases the Expenses of the chosen expense type */}
          {step === 2 && (
            <fieldset className="flex-flex-col">
              {expenseData ? (
                <fieldset>
                  {expenseData.map((data, i) => {
                    const isSelected = data.id === selectedExpenseId;
                    return (
                      <button
                        key={i}
                        type="button"
                        className={twJoin(
                          "border border-border w-full cursor-pointer flex mb-3 py-3.5",
                          isSelected && "border-primary",
                        )}
                        onClick={() => {
                          setValue("expense_id", data.id);
                          setValue("name", data.title);
                        }}
                      >
                        {data.title}
                      </button>
                    );
                  })}
                </fieldset>
              ) : (
                <p>No Expense Data for this Type</p>
              )}
            </fieldset>
          )}
          {step === 3 && (
            <fieldset className="flex-flex-col">
              <label htmlFor="">Amount</label>
              <input
                type="number"
                {...register("amount", { valueAsNumber: true })}
              />
              <label htmlFor="">Price</label>
              <input
                type="number"
                {...register("price", { valueAsNumber: true })}
              />
            </fieldset>
          )}

          <footer className="justify-between w-full flex">
            {step > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="cursor-pointer"
              >
                Back
              </button>
            ) : (
              <button
                type="button"
                onClick={closeModal}
                className="cursor-pointer"
              >
                Close
              </button>
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="cursor-pointer"
              >
                Next
              </button>
            ) : (
              <button type="submit" className="cursor-pointer">
                Submit
              </button>
            )}
          </footer>
        </form>
      </FormProvider>
    </>
  );
}

export default TransactionForm;
