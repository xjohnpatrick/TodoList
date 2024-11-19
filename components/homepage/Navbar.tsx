import React from "react";
import Link from "next/link";
import { IoMdRocket } from "react-icons/io";

export default function Navbar() {
  return (
    <main className="flex w-full font-poppins h-24 items-center relative bg-purple-300">
      <div className="flex absolute left-0 sm:left-5 lg:left-20">
        <Link href="/">
          <button className="flex items-center p-2 rounded-lg">
            <span className="flex text-4xl font-bold text-purple-100">
              <IoMdRocket width={22} height={36} color="#839dd1" />
              todo
            </span>
          </button>
        </Link>
      </div>

      <div className="flex absolute right-5 lg:right-20 gap-4">
        {[
          {
            label: "About Us",
          },
          {
            label: "Log In",
          },
        ].map((item, index) => (
          <div key={index}>
            <Link href="">
              <button className="text-white text-base">{item.label}</button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
