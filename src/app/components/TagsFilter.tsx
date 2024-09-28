import React, { useState } from "react";

interface TagsFilterProps {
  tags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
}

export const TagsFilter: React.FC<TagsFilterProps> = ({
  tags,
  setSelectedTags,
}) => {
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const uniqueTags = Array.from(new Set(tags));

  const handleTagClick = (tag: string) => {
    let updatedTags;
    if (activeTags.includes(tag)) {
      updatedTags = activeTags.filter((activeTag) => activeTag !== tag);
    } else {
      updatedTags = [...activeTags, tag];
    }

    setActiveTags(updatedTags);
    setSelectedTags(updatedTags);
  };

  const clearFilters = () => {
    setSelectedTags([]);
    setActiveTags([]);
  };

  return (
    <div className="mr-3 text-center">
      <h4 className="font-semibold">
        {uniqueTags.length === 0 ? "Create some Notes" : "Filter by tags:"}
      </h4>
      <div>
        {uniqueTags.map((tag, index) => (
          <button
            key={index}
            onClick={() => handleTagClick(tag)}
            className={`rounded-md px-2 py-1 m-1 min-w-16 transition 
              ${
                activeTags.includes(tag)
                  ? "bg-blue-500 text-white"
                  : "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
              }`}
          >
            {tag}
          </button>
        ))}
      </div>
      {activeTags.length !== 0 && (
        <button
          onClick={clearFilters}
          className="ml-4 mt-1 bg-red-500 text-white rounded-md px-2 py-1 hover:bg-red-600 transition"
        >
          Clear Filters
        </button>
      )}
    </div>
  );
};
