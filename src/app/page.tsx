"use client";
import { AddNoteForm } from "./note-form/AddNoteForm";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Notes } from "./components/Notes";
import { Loading } from "./components/ui/Loading";
import { TagsFilter } from "./components/TagsFilter";
import { Search } from "./components/ui/Search";
import { filterNotes } from "@/lib/filterNotes";
import { deleteNoteAction } from "@/lib/deleteNote";
import { Error } from "./components/ui/Error";

interface Note {
  title: string;
  description: string;
  tags: string[];
}

export default function Home() {
  const [existingNotes, setExistingNotes] = useState<Note[]>([]);
  const [updateFlag, setUpdateFlag] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [error, setError] = useState<unknown>(null);
  const [deleteError, setDeleteError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showSuccess, setShowSuccess] = useState<{
    open: boolean;
    action?: "delete" | "create";
  }>({
    open: false,
  });

  useEffect(() => {
    const fetchNotes = async () => {
      setLoading(true);
      try {
        const storedNotes = localStorage.getItem("notes");
        const notes = storedNotes ? JSON.parse(storedNotes) : [];
        setExistingNotes(notes);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, [updateFlag]);

  const deleteNote = useCallback((index: number) => {
    deleteNoteAction(
      index,
      setShowSuccess,
      setUpdateFlag,
      setLoadingDelete,
      setDeleteError
    );
  }, []);

  const filteredNotes = useMemo(() => {
    return filterNotes(existingNotes, selectedTags, searchTerm);
  }, [existingNotes, selectedTags, searchTerm]);

  const allTags = existingNotes.flatMap((note) => note.tags);

  if (error) {
    <div><Error errorText="Error occurred..." /></div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-white p-1 rounded-md mb-4 text-center">
        <h1 className="text-2xl font-bold">Hello!</h1>
        <p className="mt-1">Welcome to your notes application.</p>
      </header>
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
        <TagsFilter tags={allTags} setSelectedTags={setSelectedTags} />
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-4">
        <div className="flex-1">
          <AddNoteForm
            setUpdateFlag={setUpdateFlag}
            setShowSuccess={setShowSuccess}
            showSuccess={showSuccess}
          />
        </div>
        <div className="flex-1 m-4">
          {loading ? (
            <Loading />
          ) : (
            <Notes
              notes={filteredNotes}
              deleteNote={deleteNote}
              showSuccess={showSuccess}
              setShowSuccess={setShowSuccess}
              loadingDelete={loadingDelete}
              deleteError={deleteError}
            />
          )}
        </div>
      </div>
    </div>
  );
}
