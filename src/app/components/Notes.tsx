import React from "react";
import SuccessMessage from "./ui/SuccessMessage";
import { ShowSuccess } from "../note-form/AddNoteForm";
import { Error } from "./ui/Error";

interface Note {
  title: string;
  description: string;
  tags: string[];
}

interface NotesProps {
  notes: Note[];
  deleteNote: (index: number) => void;
  setShowSuccess: React.Dispatch<React.SetStateAction<ShowSuccess>>;
  showSuccess: ShowSuccess;
  loadingDelete: boolean;
  deleteError: string;
}

export const Notes: React.FC<NotesProps> = ({
  notes,
  deleteNote,
  setShowSuccess,
  showSuccess,
  loadingDelete,
  deleteError,
}) => {
  if (deleteError) {
    return <Error errorText={deleteError} />;
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">Your Notes</h2>
      {notes.length === 0 ? (
        <p>No notes found.</p>
      ) : (
        <ul className="w-full">
          {notes.map((note, index) => (
            <li
              key={index}
              className="border p-4 mb-2 rounded shadow flex justify-between items-center"
            >
              <div className="flex-grow">
                <h3 className="font-bold">Title: {note.title}</h3>
                <p>
                  <strong>Description:</strong> {note.description}
                </p>
                <p>
                  <strong>Tags:</strong> {note.tags.join(", ")}
                </p>
              </div>
              <button
                onClick={() => deleteNote(index)}
                disabled={loadingDelete}
                className={`ml-4 px-2 py-1 ${
                  loadingDelete ? "bg-gray-400" : "bg-red-500"
                } text-white rounded ${
                  loadingDelete ? "hover:bg-gray-400" : "hover:bg-red-500"
                }focus:outline-none`}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
      {!deleteError && showSuccess.open && showSuccess.action === "delete" && (
        <SuccessMessage
          message="Your successfully deleted Note!"
          onClose={() => setShowSuccess({ open: false })}
        />
      )}
    </div>
  );
};
