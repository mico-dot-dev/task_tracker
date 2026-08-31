import React, { ReactNode, useState } from "react";
import { FORM_REGISTRY, ModuleWithModals } from "./AddModal.config";
import ModalWrapper from "./ModalWrapper";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  content: ModuleWithModals;
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

  const { label, description, AddFormComponent } = contentConfig;
  const closeModal = () => setIsOpen(false);

  return (
    <ModalWrapper
      isOpen={true}
      setIsOpen={setIsOpen}
      title={"Create " + label}
      description={description}
    >
      <AddFormComponent closeModal={closeModal} />
    </ModalWrapper>
  );
}

export default AddFormModal;
