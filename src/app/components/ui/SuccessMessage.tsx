import React from "react";

interface SuccessMessageProps {
  message: string;
  onClose: () => void;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({
  message,
  onClose,
}) => {
  return (
    <div className="mt-2 bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded shadow-md flex items-center justify-between">
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-4 text-green-700 hover:text-green-900 focus:outline-none"
      >
        &times;
      </button>
    </div>
  );
};

export default SuccessMessage;
