"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";
import AddFormModal from "../modal/AddModal";
import { ContentType } from "../modal/AddModal.config";

interface AddButtonProps {
  content: ContentType;
}

function AddButton({ content }: AddButtonProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <div
        className="fixed bottom-5 right-5
            font-semibold text-sm tracking-wide lg:px-6 px-3 py-3 rounded-lg
            flex items-center gap-2
            button-base
            bg-primary
            text-background
            hover:bg-hover"
      >
        <button
          className="flex cursor-pointer"
          onClick={() => setModalOpen(true)}
        >
          <Plus className="" size={20} />
          <p className="hidden lg:block capitalize">Add {content}</p>
        </button>
      </div>

      <AddFormModal
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
        content={content}
      />
    </div>
  );
}

export default AddButton;
