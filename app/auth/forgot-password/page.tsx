import React from "react";
import { IoMdRocket } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Input } from '@nextui-org/input';
import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <div className="bg-white-50 w-full flex h-screen justify-center items-center font-poppins">
      <div className="flex flex-col w-[320px] lg:w-[350px] h-[600px] bg-white rounded-xl p-8">
        <div className="flex items-center text-4xl font-bold">
          <IoMdRocket width={22} height={36} color="#839dd1" />
          <span className="text-purple-300">to</span>
          <span className="text-purple-200">do</span>
        </div>
        <div className="flex flex-col mt-10 lg:mt-20 gap-4">
          <Link href="/auth/sign-in">
            <button className="flex items-center w-28 h-5 text-[12px] hover:underline gap-2">
              <IoIosArrowBack />
              Back to Login
            </button>
          </Link>

          <span className="text-2xl text-purple-400 font-semibold mt-4">
            Forgot your password?
          </span>
          <p className="text-xs text-gray">
            Don&apos;t worry, happens to all of us. Enter your email below to
            recover your password.
          </p>
          <Input type="email" label="Email" size="sm" isClearable />
          <Link href="/auth/verify-email">
            <Button className="text-white bg-purple-100 w-full" radius="sm">
              Submit
            </Button>
          </Link>

          <div className="flex my-4 justify-center items-center gap-7">
            <div className="flex bg-purple-300 h-0.5 w-[90px]"></div>
            <div className="flex text-purple-300 text-xs">or login with</div>
            <div className="flex bg-purple-300 h-0.5 w-[90px]"></div>
          </div>

          <div className="flex mx-4 gap-4 justify-center">
            {[
              {
                label: "Sign in with Google",
                icon: <FaGoogle size={24} />,
              },
              {
                label: "Sign in with Facebook",
                icon: <FaFacebook size={24} />,
              },
            ].map((item, index) => (
              <Button
                key={index}
                className="bg-purple-200 text-white"
                size="lg"
                radius="sm"
              >
                {item.icon}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
