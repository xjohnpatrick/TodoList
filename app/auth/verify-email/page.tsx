import React from "react";
import { IoMdRocket } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io"; 
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function VerifyEmail() {
  return (
    <div className="bg-white-50 w-full flex h-screen justify-center items-center font-poppins">
      <div className="flex flex-col w-[20vw] h-[60vh] bg-white rounded-xl p-8">
        <div className="flex items-center text-4xl font-bold">
          <IoMdRocket width={22} height={36} color="#839dd1" />
          <span className="text-purple-300">to</span>
          <span className="text-purple-200">do</span>
        </div>
        <div className="flex flex-col mt-20 gap-4">
          <Link href="/auth/sign-in">
            <button className="flex items-center w-28 h-5 text-[12px] hover:underline gap-2">
              <IoIosArrowBack />
              Back to Login
            </button>
          </Link>

          <span className="text-2xl text-purple-400 font-semibold mt-4">
            Verify your email
          </span>
          <p className="text-xs text-gray">
            An authentication code has been sent to your email.
          </p>
          <Input type="number" label="Enter Code" size="sm" isClearable />
          <p className="text-xs text-purple-400">
            Didn&apos;t receive a code?
            <a href="#" className="underline ml-1 text-purple-100">
              Resend
            </a>
          </p>
          <Link href="/auth/set-new-password">
            <Button className="text-white bg-purple-100 w-full" radius="sm">
              Verify
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
