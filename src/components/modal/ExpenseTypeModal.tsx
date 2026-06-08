import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

type MyModalProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

function ExpenseTypeModal({ isOpen, setIsOpen }: MyModalProps) {
  return (
    <div>
      <div>
        <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
          <Dialog.Portal>
            {/* Backdrop overlay */}
            <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-fade-in" />

            {/* Modal Box */}
            {/* The centering can be improved */}
            <Dialog.Content
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
           bg-white p-6 rounded-lg max-w-md w-full z-50 h-5/6"
            >
              <Dialog.Title className="text-xl font-bold text-gray-900 mb-2">
                Choose Expense Type
              </Dialog.Title>

              <div className="flex flex-col text-black">
                <label htmlFor="expense-type-1">Expense Type 1</label>
                <input
                  type="checkbox"
                  name="expense-type"
                  id="expense-type-1"
                  placeholder="Expense Type 1"
                />
                <label htmlFor="expense-type-2">Expense Type 2</label>
                <input
                  type="checkbox"
                  name="expense-type"
                  id="expense-type-2"
                  placeholder="Expense Type 2"
                />
                <label htmlFor="expense-type-3">Expense Type 3</label>
                <input
                  type="checkbox"
                  name="expense-type"
                  id="expense-type-3"
                  placeholder="Expense Type 3"
                />
                <input
                  type="checkbox"
                  name="expense-type"
                  id="expense-type-4"
                  placeholder="Expense Type 4"
                />
                <input
                  type="checkbox"
                  name="expense-type"
                  id="expense-type-5"
                  placeholder="Expense Type 5"
                />
              </div>

              <div className="flex justify-end gap-3 mt-10">
                {/* Native close button trigger */}
                <Dialog.Close asChild>
                  <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
                    Cancel
                  </button>
                </Dialog.Close>

                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Confirm Action
                </button>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </div>
  );
}

export default ExpenseTypeModal;
