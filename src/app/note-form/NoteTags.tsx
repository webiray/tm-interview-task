import React from "react";
import { Error } from "../components/ui/Error";

interface NoteTagsProps {
  tags: string[];
  errors?: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export const NoteTags: React.FC<NoteTagsProps> = ({
  tags,
  handleChange,
  errors,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor="tags"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Tags *
      </label>
      <input
        type="text"
        id="tags"
        value={tags}
        onChange={handleChange}
        placeholder="Enter tags, separated by commas"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />
      {errors && <Error errorText={errors} />}
    </div>
  );
};
