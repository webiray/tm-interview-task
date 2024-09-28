import React from "react";
interface SubmitButtonProps {
  hideSuccessButton: boolean;
}
export const SubmitButton: React.FC<SubmitButtonProps> = ({
  hideSuccessButton,
}) => {
  return (
    <div className="text-center">
      {!hideSuccessButton && (
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      )}
    </div>
  );
};
