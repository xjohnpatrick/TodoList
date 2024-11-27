"use client";
import React, { useState } from "react";
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
import Link from "next/link";

const sidebarVariants = {
  open: { x: 0, transition: { type: "spring", stiffness: 100 } },
  closed: { x: "-70%", transition: { type: "spring", stiffness: 100 } },
};

const settingsVariants = {
  open: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  closed: {
    x: "100%",
    opacity: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <motion.div
      className="absolute top-0 left-0 h-full bg-purple text-white w-64 px-4 py-5 shadow-lg z-10 font-poppins  hidden lg:block"
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
            <Button
              className="flex text-purple-400 gap-2 bg-transparent hover:bg-purple-100 hover:text-white"
              size="lg"
              radius="md"
            >
              <MdSpaceDashboard size={22} />
              All Categories
            </Button>

            <div className="flex flex-col h-full mt-4">
              <div className="flex justify-between">
                <span className="text-xs text-purple-400 mt-1">Your Tasks</span>
                <button className="text-purple-400">
                  <BsThreeDots size={22} />
                </button>
              </div>
              <div className="relative mt-2 rounded-md">
                <input
                  id="Category"
                  name="Category"
                  type="text"
                  placeholder="Add New Category"
                  className="w-full rounded-md py-1.5 pl-2 text-purple-400 placeholder:text-gray outline-none text-sm"
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <div className="absolute inset-y-0 right-[-10px] flex items-center pr-3">
                    <Button isIconOnly size="sm" className="bg-transparent">
                      <FaSquarePlus size={24} color="#4a5989" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-4 gap-4 h-full py-4">
                {[
                  {
                    label: "Work",
                  },
                  {
                    label: "Personal",
                  },
                  {
                    label: "Household",
                  },
                  {
                    label: "Shopping",
                  },
                  {
                    label: "Health & Fitness",
                  },
                  {
                    label: "Errands",
                  },
                  {
                    label: "Finance",
                  },
                  {
                    label: "Projects",
                  },
                  {
                    label: "Appointments",
                  },
                ].map((item, index) => (
                  <Button
                    key={index}
                    className="flex justify-start gap-2 text-sm text-purple-400 bg-transparent hover:bg-purple-100 hover:text-white"
                    size="sm"
                  >
                    <MdCategory size={22} />
                    {item.label}
                  </Button>
                ))}
              </div>
            </div>

            <Button
              className="bg-transparent text-purple-400 flex justify-between mt-4"
              size="lg"
              radius="sm"
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            >
              <RiSettings4Fill size={20} />
              Settings
              <IoIosArrowForward size={20} />
            </Button>

            <motion.div
              className="absolute bottom-20 left-56 bg-purple p-4 mt-6 shadow-md shadow-purple-400/50"
              initial="closed"
              animate={isSettingsOpen ? "open" : "closed"}
              variants={settingsVariants}
            >
              {/* Your settings content goes here */}
              <div className="text-purple-400">Settings Content</div>
            </motion.div>

            <div className="flex h-[2.5px] w-full bg-purple-400 my-4" />

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
    </motion.div>
  );
}
