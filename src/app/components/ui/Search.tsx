import React from "react";

interface SearchProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export const Search: React.FC<SearchProps> = ({
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className="w-full sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg">
      <input
        type="search"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />
    </div>
  );
};
