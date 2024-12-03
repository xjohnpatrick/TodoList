export const toggleEditMode = (
  editCategoryMode: boolean,
  setEditingIndex: React.Dispatch<React.SetStateAction<number | null>>,
  setEditedText: React.Dispatch<React.SetStateAction<string>>,
  setEditCategoryMode: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (editCategoryMode) {
    setEditingIndex(null);
    setEditedText("");
  }
  setEditCategoryMode((prev) => !prev);
};

export const addCategory = (
  newCategory: string,
  categories: any[],
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
  onOpen: () => void,
  addCategoryFn: (label: string) => void,
  setNewCategory: React.Dispatch<React.SetStateAction<string>>
) => {
  if (categories.length >= 15) {
    setErrorMessage(
      "You have reached the maximum limit of 15 categories. Please delete some categories."
    );
    onOpen();
    return;
  } else if (!newCategory.trim()) {
    setErrorMessage("Category name cannot be empty!");
    onOpen(); // Open the error modal
    return;
  }

  const isDuplicate = categories.some(
    (category) => category.label.toLowerCase() === newCategory.toLowerCase()
  );

  if (isDuplicate) {
    setErrorMessage("This category already exists!");
    onOpen(); // Open the error modal
    return;
  }

  if (newCategory.trim() !== "") {
    addCategoryFn(newCategory);
    setNewCategory("");
  }
};

export const deleteCategory = (
  index: number,
  deleteCategoryFn: (index: number) => void
) => {
  deleteCategoryFn(index);
};

export const editCategory = (
  index: number,
  label: string,
  setEditingIndex: React.Dispatch<React.SetStateAction<number | null>>,
  setEditedText: React.Dispatch<React.SetStateAction<string>>
) => {
  setEditingIndex(index);
  setEditedText(label);
};

export const saveCategory = (
  index: number,
  editedText: string,
  categories: any[],
  updateCategoryFn: (index: number, category: any) => void,
  setEditingIndex: React.Dispatch<React.SetStateAction<number | null>>
) => {
  if (editedText.trim() !== "") {
    updateCategoryFn(index, { ...categories[index], label: editedText });
  }
  setEditingIndex(null);
};

