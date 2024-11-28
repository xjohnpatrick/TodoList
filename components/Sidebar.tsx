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
import { MdManageAccounts } from "react-icons/md";
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

  useEffect(() => {
    if (!isOpen) {
      setIsSettingsOpen(false);
    }
  }, [isOpen])
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
                    className="w-full rounded-md p-2 text-purple-400 placeholder:text-gray outline-none text-sm"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <div className="absolute inset-y-0 right-[-10px] flex items-center pr-3">
                      <Button isIconOnly size="sm" className="bg-transparent">
                        <FaSquarePlus size={24} color="#4a5989" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col h-[560px] mt-4 overflow-y-scroll scrollbar-hide">
                <div className="flex flex-col gap-4 py-4">
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
                      size="md"
                    >
                      <MdCategory size={22} />
                      {item.label}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col">
                <Button
                  className="bg-transparent text-purple-400 flex relative mt-4 hover:bg-purple-100 hover:text-white text-base"
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
        className="absolute bottom-20 left-64 bg-purple p-4 mt-6 shadow-md shadow-purple-400/50 w-56 h-40 z-50 font-poppins hidden lg:block"
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
