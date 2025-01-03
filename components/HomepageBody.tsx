"use client";
import React, { useEffect, useState } from "react";
import { FaLock } from "react-icons/fa6";
import { FaUnlock } from "react-icons/fa";
import { CgTrash } from "react-icons/cg";
import { IoMdRocket } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { BsFillCheckSquareFill } from "react-icons/bs";

import { Button } from "@nextui-org/button";
import Link from "next/link";
import { TbHome } from "react-icons/tb";
import { MdCategory, MdOutlineWorkOutline } from "react-icons/md";
import { Select, SelectedItems, SelectItem } from "@nextui-org/select";
import { Category } from "@/context/CategoryContext";

function useResponsiveSize(): "sm" | "md" | "lg" {
  const [size, setSize] = useState<"sm" | "md" | "lg">("sm");

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        setSize("md"); // Large screens
      } else {
        setSize("sm"); // Small and medium screens
      }
    };

    updateSize(); // Set initial size
    window.addEventListener("resize", updateSize); // Update on resize
    return () => window.removeEventListener("resize", updateSize); // Cleanup
  }, []);

  return size;
}

export const categories = [
  { key: "home", label: "Home", icon: <TbHome size={22} /> },
  { key: "personal", label: "Personal", icon: <MdCategory size={22} /> },
  {
    key: "work",
    label: "Work",
    icon: <MdOutlineWorkOutline size={22} />,
  },
];

export default function HomepageBody() {
  const selectSize = useResponsiveSize();
  return (
    <div className="flex flex-col w-full h-[1100px] font-poppins">
      <div className="flex flex-col w-full bg-gray/10 h-96 lg:h-[600px] p-4 justify-center">
        {[
          {
            text: "Create tasks and track them effortlessly!",
            className: "text-xl lg:text-4xl font-bold",
          },
          {
            text: "Your personal space to organize your to-do list, monitor progress, and achieve your goals.",
            className: "text-base lg:text-xl",
          },
          {
            text: "Whether you're planning daily activities or handling long-term projects, TodoList helps you stay organized and in control.",
            className: "text-base lg:text-xl",
          },
          {
            text: "Sign in or create an account to get started. Happy organizing!",
            className: "text-base lg:text-xl",
          },
        ].map((item, index) => (
          <span
            key={index}
            className={`text-purple-400 text-center ${item.className}`}
          >
            {item.text}
          </span>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row w-full h-full items-center px-4">
        <div className="flex flex-col w-full h-full justify-center items-center">
          <div className="flex flex-col w-full 2xl:w-[600px] h-full lg:h-96 justify-center items-center lg:items-start p-4">
            {[
              {
                text: "Stay productive and focused with",
                className: "text-xl lg:text-3xl xl:text-4xl font-bold",
                isTodo: true,
              },
              {
                text: "Todo streamlines task management, helping you stay organized with ease. Add, edit, and track your tasks using intuitive features and a user-friendly design.",
                className: "lg:text-lg xl:text-xl",
              },
              {
                text: "From daily planning to managing extensive projects, Todo keeps you on track effortlessly.",
                className: "lg:text-lg xl:text-xl",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`text-center lg:text-start text-purple-400 ${item.className}`}
              >
                {item.isTodo ? (
                  <span>
                    {item.text}
                    <IoMdRocket className="inline text-purple-200 text-xl md:text-2xl lg:text-3xl xl:text-4xl ml-0.5" />
                    <span className="font-bold text-purple-100">to</span>
                    <span className="font-bold text-purple-200">do</span>
                    <span>!</span>
                  </span>
                ) : (
                  <span className={`flex lg:text-justify ${item.className}`}>
                    {item.text}
                  </span>
                )}
              </div>
            ))}
            <Link href="/auth/sign-up">
              <Button className="flex w-40 mt-4 bg-purple-200 rounded-full text-white p-3 lg:p-4">
                Sign Up Here <FaArrowRight />
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center w-full h-full lg:h-[450px] xl:h-[600px] 2xl:h-[620px] px-4 py-6">
          <div className="flex flex-col items-center w-[320px] sm:w-[450px] xl:w-[550px] 2xl:w-[650px] h-full bg-purple/50 rounded-3xl p-4 2xl:px-8 shadow-md shadow-gray/50 gap-4">
            <div className="xl:mt-4">
              <IoMdRocket className="inline text-purple-200 text-xl sm:text-3xl xl:text-4xl ml-0.5 mb-1 sm:mb-2.5 xl:mb-3" />
              <span className="font-bold text-purple-100 text-xl sm:text-3xl xl:text-4xl">
                to
              </span>
              <span className="font-bold text-purple-200 text-xl sm:text-3xl xl:text-4xl">
                do
              </span>
            </div>

            <div className="flex gap-2 w-full h-12 lg:h-full">
              <div className="flex relative w-full">
                <input
                  type="text"
                  className="py-1.5 pl-1.5 pr-20 sm:pl-3 sm:pr-48 rounded-md bg-white-100 text-purple-400 outline-none text-sm xl:text-base w-full xl:h-14 shadow-md shadow-purple-400/50 h-full"
                  placeholder="Add a new task"
                />
                <Select
                  size={selectSize}
                  className="max-w-xs absolute right-0 w-20 sm:w-48"
                  items={categories}
                  label="Categories"
                  placeholder="Select a category"
                  classNames={{
                    base: "max-w-xs",
                    trigger: "h-12 bg-transparent",
                  }}
                  style={{
                    background: "none",
                  }}
                  renderValue={(items: SelectedItems<Category>) => {
                    return items.map((item) => {
                      // Safely check if item.data is defined
                      if (item.data) {
                        return (
                          <div
                            key={item.key}
                            className="flex items-center gap-2"
                          >
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
                        <div className="flex-shrink-0 text-lg">
                          {category.icon}
                        </div>
                        <span className="capitalize font-poppins hidden sm:flex">
                          {category.label}
                        </span>
                      </div>
                    </SelectItem>
                  )}
                </Select>
              </div>
              <Button className="flex bg-purple-100 rounded-md text-white p-1.5 w-14 xl:w-20 xl:h-14 text-sm xl:text-base h-full">
                Add
              </Button>
            </div>

            <div className="flex relative w-full mt-4 md:mt-6 xl:mt-10 xl:mb-4">
              <div className="flex">
                <div className="flex gap-2 text-xs xl:text-sm absolute left-0">
                  <label className="flex text-purple-100 font-bold">
                    Tasks created
                  </label>
                  <label className="flex text-white font-bold bg-purple-100 rounded-full px-1 sm:px-1.5 text-[8px] sm:text-xs xl:text-sm">
                    3
                  </label>
                </div>
                <div className="flex gap-2 text-xs xl:text-sm absolute right-0">
                  <label className="flex text-purple-100 font-bold">
                    Completed
                  </label>
                  <label className="flex text-white font-bold bg-purple-100 rounded-full px-1 sm:px-1.5 text-[8px] sm:text-xs xl:text-sm">
                    1 out of 3
                  </label>
                </div>
              </div>
            </div>

            <div className="flex bg-purple-300 h-0.5 w-full mt-4 2xl:mb-4" />

            <div className="flex flex-col gap-1 w-full items-center">
              {[
                {
                  text: "Buy Groceries",
                  icon1: <FaUnlock size={14} />,
                  icon2: <CgTrash size={18} />,
                  icon3: <TbHome size={18} />,
                  className: "bg-purple-100",
                },
                {
                  text: "Clean the house",
                  text2: "Completed",
                  icon1: <FaUnlock size={14} />,
                  icon2: <CgTrash size={18} />,
                  icon3: <MdCategory size={18} />,
                  className: "bg-purple-300 line-through",
                },
                {
                  text: "Schedule team meeting",
                  icon1: <FaLock size={14} />,
                  icon2: <CgTrash size={18} />,
                  icon3: <MdOutlineWorkOutline size={18} />,
                  className: "bg-purple-100",
                },
              ].map((item, index) => (
                <ul
                  key={index}
                  className={`flex relative rounded-md text-white w-full mx-4 ${item.className}`}
                >
                  <li className="flex items-center justify-between p-3 sm:p-4 w-full xl:h-20">
                    <span className="flex text-[14px]">{item.text}</span>
                    <div className="flex gap-2">
                      {item.text2 && (
                        <span className="mr-1 text-[10px] sm:text-xs md:text-sm">
                          <BsFillCheckSquareFill className="w-4 h-4 mt-0.5 text-green-500" />
                        </span>
                      )}
                      <button>{item.icon1}</button>
                      <button>{item.icon2}</button>
                      <div>{item.icon3}</div>
                    </div>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
