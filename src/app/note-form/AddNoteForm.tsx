"use client";
import React, { useState } from "react";
import { NoteTitle } from "./NoteTitle";
import { NoteDescription } from "./NoteDescription";
import { NoteTags } from "./NoteTags";
import { SubmitButton } from "../components/ui/SubmitButton";
import SuccessMessage from "../components/ui/SuccessMessage";

export interface ShowSuccess {
  open: boolean;
  action?: "delete" | "create";
}

interface AddNoteFormProps {
  setUpdateFlag: React.Dispatch<React.SetStateAction<boolean>>;
  setShowSuccess: React.Dispatch<React.SetStateAction<ShowSuccess>>;
  showSuccess: ShowSuccess;
}

export const AddNoteForm: React.FC<AddNoteFormProps> = ({
  setUpdateFlag,
  setShowSuccess,
  showSuccess,
}) => {
  const initialFormState = {
    title: "",
    description: "",
    tags: [] as string[],
  };

  const [formData, setFormData] = useState(initialFormState);
  const [hideSuccessButton, setHideSuccessButton] = useState(false);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    tags: "",
  });

  const validateFields = () => {
    const newErrors = {
      title: "",
      description: "",
      tags: "",
    };

    if (!formData.title) {
      newErrors.title = "Title is required";
    }
    if (!formData.description) {
      newErrors.description = "Description is required";
    }
    if (formData.tags.length === 0 || !formData.tags[0]) {
      newErrors.tags = "At least one tag is required";
    }
    setErrors(newErrors);

    setTimeout(() => {
      setErrors({ title: "", description: "", tags: "" });
    }, 5000);
    return !newErrors.title && !newErrors.description && !newErrors.tags;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { id, value } = e.target;

    if (id === "tags") {
      const tagsArray = value.split(",").map((tag) => tag.trim());
      setFormData((prevFormData) => ({
        ...prevFormData,
        tags: tagsArray,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [id]: value,
      }));
    }
  };

  const handleCloseSuccessMessage = () => {
    setShowSuccess({ open: false });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateFields()) {
      return;
    }
    setHideSuccessButton(true);
    const existingNotes = JSON.parse(localStorage.getItem("notes") || "[]");
    existingNotes.push(formData);

    localStorage.setItem("notes", JSON.stringify(existingNotes));
    setShowSuccess({ open: true, action: "create" });
    setUpdateFlag((prev: boolean) => !prev);
    setTimeout(() => {
      setHideSuccessButton(false);
      setFormData(initialFormState);
      setShowSuccess({ open: false });
    }, 2500);
  };

  return (
    <div className="min-h-screen mt-10 g-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg bg-white p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Add Note</h2>
        <NoteTitle
          title={formData.title}
          handleChange={handleChange}
          errors={errors.title}
        />
        <NoteDescription
          description={formData.description}
          handleChange={handleChange}
          errors={errors.description}
        />
        <NoteTags
          tags={formData.tags}
          handleChange={handleChange}
          errors={errors.tags}
        />
        <SubmitButton hideSuccessButton={hideSuccessButton} />
        {showSuccess.open && showSuccess.action === "create" && (
          <SuccessMessage
            message="Your successfully created Note!"
            onClose={handleCloseSuccessMessage}
          />
        )}
      </form>
    </div>
  );
};
