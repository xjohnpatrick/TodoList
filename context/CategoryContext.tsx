"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { MdOutlineWorkOutline } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { RiHealthBookLine } from "react-icons/ri";
import { TbHome } from "react-icons/tb";

export interface Category {
  label: string;
  icon: JSX.Element;
}

interface CategoryContextType {
  categories: Category[];
  addCategory: (category: string) => void;
  deleteCategory: (index: number) => void;
  updateCategory: (index: number, newCategory: Category) => void;
}

const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined
);

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<Category[]>([
    { label: "Personal", icon: <MdCategory size={22} /> },
    { label: "Work", icon: <MdOutlineWorkOutline size={22} /> },
    { label: "Home", icon: <TbHome size={22} /> },
    { label: "Health", icon: <RiHealthBookLine size={22} /> },
  ]);

  const addCategory = (category: string) => {
    setCategories([
      ...categories,
      { label: category, icon: <MdCategory size={22} /> },
    ]);
  };

  const deleteCategory = (index: number) => {
    setCategories(categories.filter((_, i) => i !== index));
  };

  const updateCategory = (index: number, newCategory: Category) => {
    const updatedCategories = categories.map((category, i) =>
      i === index ? newCategory : category
    );
    setCategories(updatedCategories); // Update categories with the new data
  };

  return (
    <CategoryContext.Provider
      value={{ categories, addCategory, deleteCategory, updateCategory }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategories = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategories must be used within a CategoryProvider");
  }
  return context;
};
