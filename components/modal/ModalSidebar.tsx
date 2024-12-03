import React, { useState } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { FaSquarePlus } from "react-icons/fa6";
import { PiTrashFill } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { MdManageAccounts } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { User } from "@nextui-org/user";
import Link from "next/link";
import { useCategories } from "@/context/CategoryContext";
import {
  toggleEditMode,
  addCategory,
  deleteCategory,
  editCategory,
  saveCategory,
} from "@/utils/sidebarUtils";

interface ModalSidebarProps {
  isSidebarOpen?: boolean;
  onSidebarChange?: () => void;
}

export default function ModalSidebar({
  isSidebarOpen,
  onSidebarChange,
}: ModalSidebarProps) {
  const [isNavOpen, setisNavOpen] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [editCategoryMode, setEditCategoryMode] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editedText, setEditedText] = useState("");
  const {
    categories,
    addCategory: addCategoryFn,
    deleteCategory: deleteCategoryFn,
    updateCategory: updateCategoryFn,
  } = useCategories();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <>
      <Modal
        isOpen={isSidebarOpen}
        onOpenChange={onSidebarChange}
        size="xs"
        className="font-poppins h-[600px]"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <User
                  name={<span className="text-purple-400">John Patrick</span>}
                  description={
                    <span className="text-purple-400">Front-End Developer</span>
                  }
                  avatarProps={{
                    src: "/patrick.jpeg",
                    alt: "Image",
                  }}
                />
              </ModalHeader>
              <ModalBody className="overflow-y-scroll scrollbar-hide">
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
                        onClick={() =>
                          toggleEditMode(
                            editCategoryMode,
                            setEditingIndex,
                            setEditedText,
                            setEditCategoryMode
                          )
                        }
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
                            addCategory(
                              newCategory,
                              categories,
                              setErrorMessage,
                              onOpen,
                              addCategoryFn,
                              setNewCategory
                            );
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
                            onClick={() =>
                              addCategory(
                                newCategory,
                                categories,
                                setErrorMessage,
                                onOpen,
                                addCategoryFn,
                                setNewCategory
                              )
                            }
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

                  <div className="flex mt-4">
                    <div className="flex flex-col gap-4 py-4 w-full h-full">
                      {categories.map((item, index) => (
                        <div key={index} className="flex items-center">
                          {editingIndex === index ? (
                            <input
                              type="text"
                              value={editedText}
                              onChange={(e) => setEditedText(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter")
                                  saveCategory(
                                    index,
                                    editedText,
                                    categories,
                                    updateCategoryFn,
                                    setEditingIndex
                                  ); // Save on Enter
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
                                  editCategory(
                                    index,
                                    item.label,
                                    setEditingIndex,
                                    setEditedText
                                  );
                                }
                              }}
                            >
                              {item.icon}
                              {item.label}
                            </Button>
                          )}
                          {editCategoryMode && (
                            <Button
                              onClick={() =>
                                deleteCategory(index, deleteCategoryFn)
                              }
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
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  size="md"
                  radius="sm"
                  onClick={() => setisNavOpen(true)}
                  color="default"
                  variant="light"
                >
                  Settings
                </Button>

                <Link href="/auth/sign-in">
                  <Button
                    className="flex w-full"
                    size="md"
                    radius="sm"
                    color="primary"
                    variant="light"
                  >
                    Log Out
                  </Button>
                </Link>

                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal isOpen={isOpen} onOpenChange={onClose} className="font-poppins">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Error</ModalHeader>
              <ModalBody>
                <p>{errorMessage}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal
        isOpen={isNavOpen}
        onOpenChange={(open) => setisNavOpen(open)}
        className="font-poppins"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-purple-400 mb-2">
                Settings
              </ModalHeader>
              <ModalBody>
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
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
