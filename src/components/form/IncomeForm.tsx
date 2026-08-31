import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  incomeInputModel,
  incomeSchema,
  incomeListModel,
} from "@/src/schema/income.schema";
import { createIncome } from "@/src/actions/income.action";
import Swal from "sweetalert2";

interface AddFormProps {
  closeModal: () => void;
}

function IncomeForm({ closeModal }: AddFormProps) {
  const methods = useForm<incomeInputModel>({
    resolver: zodResolver(incomeSchema),
    defaultValues: {
      fromJob: false,
    },
  });

  const { register, handleSubmit } = methods;

  async function IncomeSubmit(data: incomeInputModel) {
    await Swal.showLoading();
    const res = await createIncome(data);
    if (!res.success) {
      await Swal.fire({
        title: "Auto close alert!",
        text: "I will close in 2 seconds.",
        timer: 2000,
      });
    }
    console.log(res);
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(IncomeSubmit, (invalidErrors) => {
          console.log("❌ Form Validation Failed:", invalidErrors);
        })}
      >
        <fieldset>
          <label htmlFor="">Amount</label>
          <input type="text" {...register("amount", { valueAsNumber: true })} />
        </fieldset>
        <fieldset>
          <label htmlFor="">Came from Job</label>
          <input type="checkbox" {...register("fromJob")} />
        </fieldset>
        <fieldset>
          <label htmlFor="">Date obtained</label>
          <input
            type="date"
            {...register("dateObtained", { valueAsDate: true })}
          />
        </fieldset>

        <button type="submit" className="button-base">
          Submit
        </button>
      </form>
    </FormProvider>
  );
}

export default IncomeForm;
