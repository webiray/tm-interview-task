interface Note {
  title: string;
  description: string;
  tags: string[];
}

export const filterNotes = (
  notes: Note[],
  selectedTags: string[],
  searchTerm: string
): Note[] => {
  return notes.filter((note) => {
    const matchesTags = selectedTags.every((tag) => note.tags.includes(tag));
    const matchesSearch = note.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesTags && matchesSearch;
  });
};
