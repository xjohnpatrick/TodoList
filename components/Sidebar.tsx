"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { User } from "@nextui-org/user";
import { MdSpaceDashboard } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { Button } from "@nextui-org/button";
import { FaSquarePlus } from "react-icons/fa6";
import { MdCategory } from "react-icons/md";
import { IoMdRocket } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import { RiSettings4Fill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { PiTrashFill } from "react-icons/pi";
import { MdManageAccounts } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

const sidebarVariants = {
  open: { x: 0, transition: { type: "spring", stiffness: 100 } },
  closed: { x: "-70%", transition: { type: "spring", stiffness: 100 } },
};

const settingsVariants = {
  open: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  closed: {
    x: "-200%",
    opacity: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [editCategoryMode, setEditCategoryMode] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null); // Index of the category being edited
  const [editedText, setEditedText] = useState(""); // Current text being edited
  const [categories, setCategories] = useState([
    { label: "Personal" },
    { label: "Work" },
    { label: "Home" },
    { label: "Health" },
  ]);

  useEffect(() => {
    if (!isOpen) {
      setIsSettingsOpen(false);
    }
  }, [isOpen]);

  const handleToggleEditMode = () => {
    // Reset edit state when exiting edit mode
    if (editCategoryMode) {
      setEditingIndex(null); // Cancel the edit
      setEditedText(""); // Clear any edited text
    }
    setEditCategoryMode((prev) => !prev); // Toggle edit mode
  };

  const handleAddCategory = () => {
    if (newCategory.trim() !== "") {
      setCategories([...categories, { label: newCategory }]);
      setNewCategory(""); // Clear the input field after adding
    }
  };

  const handleDeleteCategory = (indexToRemove: number) => {
    setCategories(categories.filter((_, index) => index !== indexToRemove));
  };

  const handleEditCategory = (index: number, label: string) => {
    if (editCategoryMode) {
      setEditingIndex(index); // Set the index of the category being edited
      setEditedText(label); // Set the initial text to the current label
    }
  };

  const handleSaveCategory = (index: number) => {
    if (editedText.trim() !== "") {
      const updatedCategories = categories.map((item, i) =>
        i === index ? { ...item, label: editedText } : item
      );
      setCategories(updatedCategories); // Update categories
    }
    setEditingIndex(null); // Exit edit mode
  };

  return (
    <>
      <motion.div
        className="absolute top-0 left-0 h-full bg-purple text-white w-64 px-4 py-5 shadow-md shadow-gray/50 z-10 font-poppins hidden lg:block overflow-y-scroll scrollbar-hide"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
      >
        <div className="flex flex-col h-full relative">
          <Button
            className="absolute top-0 right-0.5 p-2 text-white bg-purple-200 rounded z-20 hover:bg-purple-100 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            isIconOnly
          >
            {isOpen ? (
              <IoMdRocket size={24} className="-rotate-90" />
            ) : (
              <IoMdRocket size={24} className="rotate-90" />
            )}
          </Button>
          <div className="flex items-center gap-4 absolute top-0 left-0">
            <User
              name={<span className="text-purple-400">John Patrick</span>}
              description={
                <span className="text-purple-400">Front-End Developer</span>
              }
              avatarProps={{
                src: "/patrick.jpeg",
                alt: "Image",
              }}
              className={`${isOpen ? "" : "transition-all hidden"}`}
            />
          </div>
          <div
            className={`flex flex-col h-full mt-20  ${
              isOpen ? "" : "transition-all hidden"
            }`}
          >
            <span className="text-xs text-purple-400">Main</span>
            <div className="flex flex-col h-full p-4">
              <Link href="/main/dashboard">
                <Button
                  className="flex text-purple-400 gap-2 bg-transparent hover:bg-purple-100 hover:text-white w-full text-base justify-start"
                  size="md"
                  radius="sm"
                >
                  <MdSpaceDashboard size={22} />
                  Dashboard
                </Button>
              </Link>
              <div className="flex flex-col mt-4">
                <div className="flex justify-between">
                  <span className="text-xs text-purple-400 mt-1">
                    Your Tasks
                  </span>
                  <button
                    className="text-purple-400"
                    onClick={handleToggleEditMode}
                  >
                    {editCategoryMode ? (
                      <IoMdClose size={22} />
                    ) : (
                      <BsThreeDots size={22} />
                    )}
                  </button>
                </div>
                <div className="relative mt-2 rounded-md">
                  <input
                    id="Category"
                    name="Category"
                    type="text"
                    placeholder="Add New Category"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleAddCategory();
                      }
                    }}
                    maxLength={30}
                    className="w-full rounded-md py-2 pl-2 pr-10 text-purple-400 placeholder:text-gray outline-none text-sm"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <div className="absolute inset-y-0 right-[-10px] flex items-center pr-3">
                      <Button
                        isIconOnly
                        size="sm"
                        className="bg-transparent"
                        onClick={handleAddCategory}
                      >
                        <FaSquarePlus size={24} color="#4a5989" />
                      </Button>
                    </div>
                  </div>
                </div>
                <span className="text-purple-400 text-[10px] mt-2 flex justify-center">
                  Note: Max 30 characters allowed.
                </span>
              </div>

              <div className="flex-1 mt-4">
                <div className="flex flex-col gap-4 py-4 w-full h-[550px] overflow-y-scroll scrollbar-hide">
                  {categories.map((item, index) => (
                    <div key={index} className="flex items-center">
                      {editingIndex === index ? (
                        <input
                          type="text"
                          value={editedText}
                          onChange={(e) => setEditedText(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") handleSaveCategory(index); // Save on Enter
                            if (e.key === "Escape") setEditingIndex(null); // Cancel on Escape
                          }}
                          className="flex-grow text-sm text-purple-400 bg-white p-2 rounded-md outline-none"
                          maxLength={30}
                        />
                      ) : (
                        <Button
                          className="flex justify-start gap-2 text-sm text-purple-400 bg-transparent hover:bg-purple-100 hover:text-white capitalize w-full"
                          size="md"
                          onClick={() => {
                            if (editCategoryMode) {
                              handleEditCategory(index, item.label); // Allow editing in edit mode
                            }
                          }}
                        >
                          <MdCategory size={22} />
                          {item.label}
                        </Button>
                      )}
                      {editCategoryMode && (
                        <Button
                          onClick={() => handleDeleteCategory(index)}
                          isIconOnly
                          size="sm"
                          className="bg-transparent"
                        >
                          <PiTrashFill size={20} color="#f81464" />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col">
                <Button
                  className="bg-transparent text-purple-400 flex relative hover:bg-purple-100 hover:text-white text-base"
                  size="md"
                  radius="sm"
                  onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                >
                  <RiSettings4Fill size={20} className="absolute left-4" />
                  Settings
                  <IoIosArrowForward size={20} className="absolute right-4" />
                </Button>

                <div className="flex h-[2px] w-full bg-purple-400 my-4" />

                <Link href="/auth/sign-in">
                  <Button
                    className="bg-purple-200 text-white-50 flex relative w-full text-base"
                    size="md"
                    radius="sm"
                  >
                    <MdOutlineLogout size={24} className="absolute left-4" />
                    Log Out
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-64 bg-purple p-4 mt-6 shadow-md shadow-purple-400/50 w-56 h-40 z-10 font-poppins hidden lg:block"
        initial="closed"
        animate={isSettingsOpen ? "open" : "closed"}
        variants={settingsVariants}
      >
        <h1 className="text-purple-400 mb-2">Settings</h1>
        <div className="text-purple-400 flex flex-col gap-3">
          {[
            {
              label: "Account",
              href: "/main/account",
              icon: <MdManageAccounts size={24} />,
            },
            {
              label: "Profile",
              href: "/main/profile",
              icon: <CgProfile size={24} />,
            },
          ].map((item, index) => (
            <Link key={index} href={item.href}>
              <Button className="text-purple-400 w-full bg-transparent flex justify-start">
                {item.icon}
                {item.label}
              </Button>
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  );
}
