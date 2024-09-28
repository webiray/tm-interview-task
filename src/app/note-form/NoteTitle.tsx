import React from "react";
import { Error } from "../components/ui/Error";

interface NoteTitleProps {
  title: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  errors?: string;
}
export const NoteTitle: React.FC<NoteTitleProps> = ({
  title,
  handleChange,
  errors,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor="title"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Title *
      </label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={handleChange}
        placeholder="Enter the title"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />
      {errors && <Error errorText={errors} />}
    </div>
  );
};
