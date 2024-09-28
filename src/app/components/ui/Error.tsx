import React from "react";

interface ErrorProps {
  errorText: string;
}

export const Error: React.FC<ErrorProps> = ({ errorText }) => {
  return <p className="text-red-500 text-sm mt-1 ml-3">{errorText}</p>;
};
