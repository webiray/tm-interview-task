import React from "react";

export const Loading = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="loader"></div> <span className="ml-2">Loading ...</span>
    </div>
  );
};
