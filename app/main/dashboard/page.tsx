"use client";
import { Button } from '@nextui-org/button';
import React from 'react'
import { IoMdRocket } from "react-icons/io";
import { FaLock } from "react-icons/fa6";
import { FaUnlock } from "react-icons/fa";
import { CgTrash } from "react-icons/cg";

export default function Dashboard() {
  
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
            // onChange={(e) => setTodo(e.target.value)}
            // value={todo}
            className="flex rounded-md bg-purple text-purple-300 p-4 h-[54px] outline-none w-full sm:w-[450px] md:w-[550px] lg:w-[655px] shadow-md shadow-gray/50"
            placeholder="Add a new task"
          />
          <Button
            id="btnTodo"
            // onClick={handleAddTodo}
            className="flex w-[70px] h-[52px] bg-purple-100 rounded-md items-center justify-center text-white text-[15px] gap-2 font-semibold outline-none shadow-md shadow-gray/50"
          >
            Add
          </Button>
        </div>
        <div className="flex relative w-[90vw] sm:w-[600px] md:w-[700px] lg:w-[800px] h-[75vh] flex-col items-center rounded-lg my-6 sm:px-8">
          <div className="flex relative w-full mt-6 xl:mt-10 xl:mb-4">
            <div className="flex">
              <div className="flex gap-2 text-xs xl:text-sm absolute left-0">
                <label className="flex text-purple-100 font-bold">
                  Tasks created
                </label>
                <label className="flex text-white font-bold bg-purple-100 rounded-full px-1 sm:px-1.5 text-[10px] sm:text-xs xl:text-sm">
                  3
                </label>
              </div>
              <div className="flex gap-2 text-xs xl:text-sm absolute right-0">
                <label className="flex text-purple-100 font-bold">
                  Completed
                </label>
                <label className="flex text-white font-bold bg-purple-100 rounded-full px-1 sm:px-1.5 text-[10px] sm:text-xs xl:text-sm">
                  1 out of 3
                </label>
              </div>
            </div>
          </div>

          <div className="flex bg-purple-300 h-0.5 w-full mt-10 mb-8 2xl:mb-4" />
          <div className="flex flex-col gap-1 sm:gap-2 xl:gap-4 w-full items-center">
            {[
              {
                text: "Buy Groceries",
                icon1: <FaUnlock className="w-4 h-4 lg:w-5 lg:h-5" />,
                icon2: <CgTrash className="w-5 h-5 lg:w-6 lg:h-6" />,
                className: "bg-purple-100",
              },
              {
                text: "Clean the house",
                text2: "Completed",
                icon1: <FaUnlock className="w-4 h-4 lg:w-5 lg:h-5" />,
                icon2: <CgTrash className="w-5 h-5 lg:w-6 lg:h-6" />,
                className: "bg-purple-300",
                isLine: true,
              },
              {
                text: "Schedule team meeting",
                icon1: <FaLock className="w-4 h-4 lg:w-5 lg:h-5" />,
                icon2: <CgTrash className="w-5 h-5 lg:w-6 lg:h-6" />,
                className: "bg-purple-100",
              },
            ].map((item, index) => (
              <ul
                key={index}
                className={`flex relative rounded-md text-white w-full mx-4 ${item.className}`}
              >
                <li className="flex items-center justify-between p-4 w-full h-16 lg:h-20">
                  <span
                    className={`flex text-[14px] ${
                      item.isLine ? "line-through" : ""
                    }`}
                  >
                    {item.text}
                  </span>
                  <div className="flex gap-2">
                    {item.text2 && (
                      <span className="bg-green-600 px-0.5 rounded-md text-[10px] sm:text-xs md:text-sm flex items-center">
                        {item.text2}
                      </span>
                    )}
                    <button>{item.icon1}</button>
                    <button>{item.icon2}</button>
                  </div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
