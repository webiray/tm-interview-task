export const deleteNoteAction = (
  index: number,
  setShowSuccess: React.Dispatch<
    React.SetStateAction<{ open: boolean; action?: "delete" | "create" }>
  >,
  setUpdateFlag: React.Dispatch<React.SetStateAction<boolean>>,
  setLoadingDelete: React.Dispatch<React.SetStateAction<boolean>>,
  setDeleteError: (error: string) => void
) => {
  setLoadingDelete(true);

  try {
    const currentNotes: string[] = JSON.parse(
      localStorage.getItem("notes") || "[]"
    );
    if (index < 0 || index >= currentNotes.length) {
      setDeleteError("Invalid index");
      setTimeout(() => {
        setDeleteError("");
      }, 3000);
    }

    const updatedNotes = currentNotes.filter((_, i) => i !== index);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setShowSuccess({ open: true, action: "delete" });
    setUpdateFlag((prev: boolean) => !prev);

    setTimeout(() => {
      setLoadingDelete(false);
      setShowSuccess({ open: false });
    }, 2000);
  } catch {
    setDeleteError("Failed to delete note");
    setLoadingDelete(false);
    setTimeout(() => {
      setDeleteError("");
    }, 3000);
  }
};
