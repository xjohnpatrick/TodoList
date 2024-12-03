import React from "react";
import { IoMdRocket } from "react-icons/io";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function SetNewPassword() {
  return (
    <div className="bg-white-50 w-full flex h-screen justify-center items-center font-poppins">
      <div className="flex flex-col w-[320px] lg:w-[350px] h-[500px] bg-white rounded-xl p-8">
        <div className="flex items-center text-4xl font-bold">
          <IoMdRocket width={22} height={36} color="#839dd1" />
          <span className="text-purple-300">to</span>
          <span className="text-purple-200">do</span>
        </div>
        <div className="flex flex-col mt-20 gap-4">
          <span className="text-2xl text-purple-400 font-semibold mt-4">
            Set New Password
          </span>
          <p className="text-xs text-gray">
            Your previous password has been reseted. Please set a new password
            for your account.
          </p>
          <Input type="password" label="New Password" size="sm" isClearable />
          <Input
            type="password"
            label="Confirm New Password"
            size="sm"
            isClearable
          />
          <Link href="/auth/sign-in">
            <Button className="text-white bg-purple-100 w-full" radius="sm">
              Set Password
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
