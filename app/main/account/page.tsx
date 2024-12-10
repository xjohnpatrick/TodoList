"use client";
import React, { useState } from 'react'
import { Input } from "@nextui-org/input";
import { Button } from '@nextui-org/button';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import ModalDeleteAcc from '@/components/modal/ModalDeleteAcc';
import { RxHamburgerMenu } from "react-icons/rx";
import ModalSidebar from '@/components/modal/ModalSidebar';

export default function Account() {
    const [isModalDeleteOpen, setModalDeleteOpen] = useState(false);

    const openModalDelete = () => setModalDeleteOpen(true);
    const closeModalDelete = () => setModalDeleteOpen(false);

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const openSidebarModal = () => setSidebarOpen(true);
    const closeSidebarModal = () => setSidebarOpen(false);
  return (
    <div className="flex w-full h-[1000px] bg-white-50 justify-center font-poppins">
      <div className="flex flex-col items-center w-[90vw] lg:w-[45vw] h-full rounded-md gap-4 pt-4">
        {[
          {
            label: "Connect Google",
            icon: <FaGoogle size={24} />,
          },
          {
            label: "Connect Facebook",
            icon: <FaFacebook size={24} />,
          },
        ].map((item, index) => (
          <div key={index}>
            <Button
              className="text-base text-white bg-purple-100 w-72"
              size="lg"
              radius="sm"
            >
              {item.icon}
              {item.label}
            </Button>
          </div>
        ))}
        <div className="flex flex-col w-full h-[400px] rounded-md border-1 border-gray-50/20 p-4 gap-4">
          <label className="text-2xl font-semibold">Set new password</label>
          <div className="flex flex-col w-full gap-2">
            {[
              {
                label: "Current Password",
              },
              {
                label: "New Password",
              },
              {
                label: "Confirm Password",
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col gap-2">
                <label className="text-purple-400 text-base">
                  {item.label}
                </label>
                <Input
                  type="password"
                  className="text-base text-purple-400"
                  size="lg"
                  radius="sm"
                  variant="bordered"
                />
              </div>
            ))}
            <Button className="w-40 bg-purple-100 text-white mt-4">
              Save Changes
            </Button>
          </div>
        </div>
        <div className="flex flex-col w-full border-1 border-gray-50/20 rounded-md my-4 p-4 gap-2">
          <label className="text-2xl font-semibold mb-4 text-purple-400">
            Account emails
          </label>
          {[
            {
              label1: "Primary email",
              label2: "Not Connected Yet",
            },
            {
              label1: "Google email",
              label2: "Not Connected Yet",
            },
            {
              label1: "Facebook email",
              label2: "Not Connected Yet",
            },
          ].map((item, index) => (
            <div key={index} className="flex gap-4 text-sm lg:text-base">
              <label className="text-purple-400">{item.label1}:</label>
              <label className="text-red-500">{item.label2}</label>
            </div>
          ))}
        </div>
        <div className="flex flex-col w-full border-1 border-gray-50/20 rounded-md p-4 gap-2">
          <label className="text-2xl font-semibold mb-2 text-purple-400">
            Delete Account
          </label>
          <p className="text-purple-400 text-base">
            Deleting your account will erase all data permanently. Make sure
            this is what you want to do.
          </p>
          <Button className="w-40" color="danger" onClick={openModalDelete}>
            Delete Account
          </Button>
        </div>

        <ModalDeleteAcc
          isOpen={isModalDeleteOpen}
          onOpenChange={closeModalDelete}
        />
      </div>

      <Button
        onPress={openSidebarModal}
        className="bg-purple-100 text-white flex lg:hidden fixed bottom-5 right-5"
        radius="sm"
        isIconOnly
      >
        <RxHamburgerMenu size={20} />
      </Button>

      <ModalSidebar
        isSidebarOpen={isSidebarOpen}
        onSidebarChange={closeSidebarModal}
      />
    </div>
  );
}
