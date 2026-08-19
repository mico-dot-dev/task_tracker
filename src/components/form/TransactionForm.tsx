"use client";

import React, { useState, ReactNode, useEffect } from "react";
import { ExpenseType } from "@/src/generated/prisma";
import { FormProvider } from "react-hook-form";
import { expenseIconMap, getExpenseIcon } from "@/src/lib/expense-icon-mapper";

interface AddFormProps {
  closeModal: () => void;
}

function TransactionForm({ closeModal }: AddFormProps) {
  const [step, setStep] = useState(1);
  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

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

      <FormProvider>
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
        </form>
      </FormProvider>
    </>
  );
}

export default TransactionForm;
