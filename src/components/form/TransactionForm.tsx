"use client";

import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { expenseIconMap } from "@/src/lib/expense-icon-mapper";
import { ExpenseType } from "@/src/generated/prisma";
import {
  TransactionFormModel,
  TransactionSchema,
} from "@/src/types/transaction";
import { DynamicListModel } from "@/src/types/expense";
import { zodResolver } from "@hookform/resolvers/zod";

interface AddFormProps {
  closeModal: () => void;
}

function TransactionForm({ closeModal }: AddFormProps) {
  const methods = useForm<TransactionFormModel>({
    resolver: zodResolver(TransactionSchema),
    defaultValues: {
      name: "",
      type: ExpenseType.MISC,
      amount: 1,
      price: 0,
      due_date: undefined,
    },
  });

  const { register } = methods;

  const [expenseData, setExpenseData] = useState<DynamicListModel[]>();

  useEffect(() => {
    // setExpenseData()
  }, []);

  const [step, setStep] = useState(1);
  const nextStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStep((prev) => Math.min(prev + 1, 3));
  };
  const prevStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStep((prev) => Math.max(prev - 1, 1));
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
        <form>
          {/* Step 1 */}
          {step === 1 && (
            <fieldset className="flex-flex-col">
              {Object.entries(expenseIconMap).map(([type, config]) => {
                const IconComponent = config.icon;

                return (
                  <button
                    key={type}
                    className="border border-border w-full cursor-pointer flex mb-3 py-3.5"
                    type="button"
                  >
                    <div className=" mx-3 p-2">
                      <IconComponent />
                    </div>
                    <div className="flex flex-col text-start">
                      <p className="p-0 m-0 ">{config.title}</p>
                      <p className="text-xs text-muted-text">
                        {config.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </fieldset>
          )}

          {step === 2 && <fieldset className="flex-flex-col">Step 2</fieldset>}
          {step === 3 && <fieldset className="flex-flex-col">Step 3</fieldset>}

          <footer className="justify-between w-full flex">
            {step > 1 ? (
              <button type="button" onClick={prevStep}>
                Back
              </button>
            ) : (
              <button type="button" onClick={closeModal}>
                Close
              </button>
            )}

            {step < 3 ? (
              <button type="button" onClick={nextStep}>
                Next
              </button>
            ) : (
              <button type="submit">Submit</button>
            )}
          </footer>
        </form>
      </FormProvider>
    </>
  );
}

export default TransactionForm;
