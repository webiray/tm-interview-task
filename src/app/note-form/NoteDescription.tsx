import React from "react";
import { Error } from "../components/ui/Error";

interface NoteDescriptionProps {
  description: string;
  errors?: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
export const NoteDescription: React.FC<NoteDescriptionProps> = ({
  description,
  handleChange,
  errors,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor="description"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Description *
      </label>
      <textarea
        id="description"
        value={description}
        onChange={handleChange}
        placeholder="Enter the description"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />
      {errors && <Error errorText={errors} />}
    </div>
  );
};
