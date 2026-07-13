import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import TaskForm from "../form/TaskForm";
import TaskCatForm from "../form/TaskCatForm";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  content: "task" | "category";
};

function TaskModal({ isOpen, setIsOpen, content }: ModalProps) {
  const cont =
    content === "task" ? (
      <TaskForm closeModal={setIsOpen} />
    ) : (
      <TaskCatForm closeModal={setIsOpen} />
    );
  return (
    <div>
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Portal>
          {/* Backdrop overlay */}
          <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-fade-in" />

          {/* Modal Box */}
          <Dialog.Content
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
           bg-foreground border-2 border-border rounded-lg max-w-none lg:w-[28%] lg:max-w-[28%] w-full z-50 lg:h-[90%] h-full"
          >
            <Dialog.Title className="relative text-xl font-bold text-primary-tex mb-3 bg-foreground py-5 border-b-2 border-b-primary">
              <p className="w-[90%] justify-self-center">Add New Task</p>
            </Dialog.Title>

            <div className="h-[85%] w-[90%] justify-self-center ">{cont}</div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default TaskModal;
