import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { FORM_REGISTRY, ContentType } from "../AddFormModal/config";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  content: ContentType;
};

function AddFormModal({ isOpen, setIsOpen, content }: ModalProps) {
  if (!isOpen) return null;

  const contentConfig = FORM_REGISTRY[content];

  if (!contentConfig) {
    console.error(
      `GlobalModal: No form configuration found for type "${content}"`,
    );
    return null;
  }

  const { label, AddFormComponent } = contentConfig;
  const closeModal = () => setIsOpen(false);

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
              <p className="w-[90%] justify-self-center capitalize">
                Add New {content}
              </p>
            </Dialog.Title>

            <div className="h-[85%] w-[90%] justify-self-center ">
              <AddFormComponent closeModal={closeModal} />{" "}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default AddFormModal;
