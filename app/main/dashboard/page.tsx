"use client";
import { useState } from "react";
import { Button } from "@nextui-org/button";
import { IoMdRocket } from "react-icons/io";
import { FaLock, FaUnlock } from "react-icons/fa6";
import { CgTrash } from "react-icons/cg";
import { MdCategory } from "react-icons/md";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { Pagination } from "@nextui-org/pagination";

export default function Dashboard() {
  const [todo, setTodo] = useState("");
  const [tasks, setTasks] = useState([
    { text: "Buy Groceries", completed: false, locked: false },
    { text: "Clean the house", completed: true, locked: false },
    { text: "Schedule team meeting", completed: false, locked: true },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 6; // Number of tasks per page
  const maxPages = 10; // Maximum number of pages

  const handleAddTodo = () => {
    if (todo.trim()) {
      const totalTasks = tasks.length + 1;
      const maxTasksAllowed = maxPages * tasksPerPage;

      if (totalTasks > maxTasksAllowed) {
        alert(
          "Task limit reached. Please delete some tasks before adding more."
        );
        return;
      }

      setTasks([...tasks, { text: todo, completed: false, locked: false }]);
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
      alert("This task is locked and cannot be deleted.");
    }
  };

  const currentTasks = tasks.slice(
    (currentPage - 1) * tasksPerPage,
    currentPage * tasksPerPage
  );

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
            className="flex rounded-md bg-purple text-purple-300 p-4 h-[54px] outline-none w-full sm:w-[450px] md:w-[550px] lg:w-[655px] shadow-md shadow-gray/50"
            placeholder="Add a new task"
          />
          <Button
            id="btnTodo"
            onClick={handleAddTodo}
            className="flex w-[70px] h-[52px] bg-purple-100 rounded-md items-center justify-center text-white text-[15px] gap-2 font-semibold outline-none shadow-md shadow-gray/50"
          >
            Add
          </Button>
        </div>
        <div className="flex relative w-[90vw] sm:w-[600px] md:w-[700px] lg:w-[800px] h-[780px] flex-col items-center rounded-lg my-6 sm:px-8">
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
                        handleToggleLock(index);
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
                        handleDeleteTask(index);
                      }}
                    >
                      <CgTrash className="w-5 h-5 lg:w-6 lg:h-6" />
                    </button>
                    <button>
                      <MdCategory className="w-5 h-5 lg:w-6 lg:h-6" />
                    </button>
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
            onChange={(page) => setCurrentPage(page)}
            className="absolute bottom-8 font-bold"
            classNames={{
              cursor: "bg-purple-100 text-white font-bold",
            }}
          />
        </div>
      </div>
    </div>
  );
}
