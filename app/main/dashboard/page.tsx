"use client";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { IoMdRocket } from "react-icons/io";
import { FaLock, FaUnlock } from "react-icons/fa6";
import { CgTrash } from "react-icons/cg";
import { MdCategory } from "react-icons/md";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { Pagination } from "@nextui-org/pagination";
import { useCategories } from "@/context/CategoryContext";
import { Select, SelectedItems, SelectItem } from "@nextui-org/select";
import { TbHome } from "react-icons/tb";
import { Category } from "@/context/CategoryContext";
import { MdOutlineWorkOutline } from "react-icons/md";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { useSuccessMessage } from "@/context/SuccessMessageContext";

export default function Dashboard() {
  const { categories } = useCategories();
  const [todo, setTodo] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [errorMessage, setErrorMessage] = useState("");
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value; // Get the value from the event
    const category = categories.find(
      (category) => category.label === selectedValue // Find the category by label
    );
    if (category) {
      setSelectedCategory(category); // Set the selected category
    }
  };

  const { successMessage, setSuccessMessage } = useSuccessMessage();

  const [tasks, setTasks] = useState([
    {
      text: "Buy Groceries",
      completed: false,
      locked: false,
      icon: <TbHome size={22} />,
    },
    {
      text: "Clean the house",
      completed: true,
      locked: false,
      icon: <MdCategory size={22} />,
    },
    {
      text: "Schedule team meeting",
      completed: false,
      locked: true,
      icon: <MdOutlineWorkOutline size={22} />,
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 6; // Number of tasks per page
  const maxPages = 10; // Maximum number of pages

  const handleAddTodo = () => {
    if (todo.trim()) {
      if (!selectedCategory) {
        setErrorMessage("Please select a category.");
        onOpen();
        return;
      }

      const totalTasks = tasks.length + 1;
      const maxTasksAllowed = maxPages * tasksPerPage;

      if (totalTasks > maxTasksAllowed) {
        setErrorMessage(
          "Task limit reached. Please delete some tasks before adding more."
        );
        onOpen();
        return;
      }

      // Add the new task to the tasks state
      setTasks([
        ...tasks,
        {
          text: todo,
          completed: false,
          locked: false,
          icon: selectedCategory.icon,
        },
      ]);
      setTodo(""); // Clear input after adding
    }
  };

  const handleToggleComplete = (index: number) => {
    if (tasks[index].locked) {
      return; // Do nothing if the task is locked
    }
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleToggleLock = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].locked = !updatedTasks[index].locked;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index: number) => {
    if (!tasks[index].locked) {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    } else {
      setErrorMessage("This task is locked and cannot be deleted.");
      onOpen();
    }
  };

  const currentTasks = tasks.slice(
    (currentPage - 1) * tasksPerPage,
    currentPage * tasksPerPage
  );

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage, setSuccessMessage]);

  return (
    <div className="flex w-full h-screen bg-white-50 font-poppins">
      <div className="flex w-full flex-col items-center relative">
        <div className="flex mt-10">
          <label className="flex text-4xl font-bold items-center">
            <IoMdRocket width={22} height={36} color="#839dd1" />
            <span className="text-purple-200">to</span>
            <span className="text-purple-100">do</span>
          </label>
        </div>
        <div className="flex mt-10 items-center gap-2 w-[90vw] justify-center">
          <div className="flex relative">
            <input
              type="text"
              id="newTodo"
              onChange={(e) => setTodo(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleAddTodo();
                }
              }}
              value={todo}
              className="flex rounded-md bg-purple text-purple-300 py-4 pl-4 pr-20 sm:pr-48 h-[54px] outline-none w-full sm:w-[450px] md:w-[550px] lg:w-[655px] shadow-md shadow-gray/50"
              placeholder="Add a new task"
            />

            <Select
              items={categories}
              label="Categories"
              placeholder="Select a category"
              labelPlacement="inside"
              classNames={{
                base: "max-w-xs",
                trigger: "h-12 bg-transparent",
              }}
              style={{
                background: "none",
              }}
              className="max-w-xs absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center w-[90px] sm:w-48"
              value={selectedCategory ? selectedCategory.label : ""}
              onChange={handleCategoryChange}
              // Render the selected value with the category icon
              renderValue={(items: SelectedItems<Category>) => {
                return items.map((item) => {
                  // Safely check if item.data is defined
                  if (item.data) {
                    return (
                      <div key={item.key} className="flex items-center gap-2">
                        <div className="flex-shrink-0 text-lg text-purple-400">
                          {item.data.icon}
                        </div>
                        <span className="capitalize hidden sm:flex text-purple-400">
                          {item.data.label}
                        </span>
                      </div>
                    );
                  }
                  return null; // Return null if item.data is undefined
                });
              }}
            >
              {(category) => (
                <SelectItem key={category.label} textValue={category.label}>
                  <div className="flex items-center gap-2">
                    <div className="flex-shrink-0 text-lg">{category.icon}</div>
                    <span className="capitalize font-poppins hidden sm:flex">
                      {category.label}
                    </span>
                  </div>
                </SelectItem>
              )}
            </Select>
          </div>

          <Button
            id="btnTodo"
            onClick={handleAddTodo}
            className="flex w-[70px] h-[52px] bg-purple-100 rounded-md items-center justify-center text-white text-[15px] gap-2 font-semibold outline-none shadow-md shadow-gray/50"
          >
            Add
          </Button>
        </div>
        <div className="flex relative w-[90vw] sm:w-[600px] md:w-[700px] lg:w-[800px] h-[780px] flex-col items-center rounded-lg my-6 sm:px-8 bg-red-200">
          <div className="flex relative w-full mt-6 xl:mt-10 xl:mb-4">
            <div className="flex">
              <div className="flex gap-2 text-xs xl:text-sm absolute left-0">
                <label className="flex text-purple-100 font-bold">
                  Tasks created
                </label>
                <label className="flex text-white font-bold bg-purple-100 rounded-full px-1 sm:px-1.5 text-[10px] sm:text-xs xl:text-sm">
                  {tasks.length}
                </label>
              </div>
              <div className="flex gap-2 text-xs xl:text-sm absolute right-0">
                <label className="flex text-purple-100 font-bold">
                  Completed
                </label>
                <label className="flex text-white font-bold bg-purple-100 rounded-full px-1 sm:px-1.5 text-[10px] sm:text-xs xl:text-sm">
                  {tasks.filter((task) => task.completed).length} out of{" "}
                  {tasks.length}
                </label>
              </div>
            </div>
          </div>

          <div className="flex bg-purple-300 h-0.5 w-full mt-10 mb-8 2xl:mb-4" />
          <div className="flex flex-col gap-1 sm:gap-2 xl:gap-4 w-full items-center">
            {currentTasks.map((task, index) => (
              <ul
                key={index}
                className={`flex relative rounded-md text-white w-full mx-4 capitalize ${
                  task.completed ? "bg-purple-300" : "bg-purple-100"
                }`}
              >
                <li
                  className="flex items-center justify-between p-4 w-full h-16 lg:h-20 cursor-pointer"
                  onClick={() =>
                    handleToggleComplete(
                      index + (currentPage - 1) * tasksPerPage
                    )
                  }
                >
                  <span
                    className={`flex text-[14px] ${
                      task.completed ? "line-through" : ""
                    }`}
                  >
                    {task.text}
                  </span>
                  <div className="flex gap-2">
                    {task.completed && (
                      <div className="mr-2">
                        <BsFillCheckSquareFill className="w-4 h-4 mt-1 text-green-500" />
                      </div>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleToggleLock(
                          index + (currentPage - 1) * tasksPerPage
                        );
                      }}
                    >
                      {task.locked ? (
                        <FaLock className="w-4 h-4 lg:w-5 lg:h-5" />
                      ) : (
                        <FaUnlock className="w-4 h-4 lg:w-5 lg:h-5" />
                      )}
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteTask(
                          index + (currentPage - 1) * tasksPerPage
                        );
                      }}
                    >
                      <CgTrash className="w-5 h-5 lg:w-6 lg:h-6" />
                    </button>
                    <div className="text-lg">{task.icon}</div>
                  </div>
                </li>
              </ul>
            ))}
          </div>
          <Pagination
            loop
            showControls
            total={Math.min(Math.ceil(tasks.length / tasksPerPage), maxPages)}
            initialPage={1}
            page={currentPage}
            size="sm"
            onChange={(page) => setCurrentPage(page)}
            className="font-bold mt-4"
            classNames={{
              cursor: "bg-purple-100 text-white font-bold",
            }}
          />
          <Modal
            isOpen={isOpen}
            onOpenChange={onClose}
            className="font-poppins"
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Error
                  </ModalHeader>
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
        </div>
      </div>
      {successMessage && (
        <div className="flex text-white bg-green-500 rounded-md p-4 text-sm fixed bottom-4 right-6">
          <p>{successMessage}</p>
        </div>
      )}
    </div>
  );
}
