import React from "react";
import Link from "next/link";
import { IoMdRocket } from "react-icons/io";
import { Button } from "@nextui-org/button";

export default function Navbar() {
  return (
    <main className="flex w-full font-poppins h-24 items-center relative bg-purple-400">
      <div className="flex absolute left-0 sm:left-5 lg:left-20">
        <Link href="/">
          <Button className="flex items-center px-2 py-6 rounded-lg bg-transparent">
            <span className="flex text-4xl font-bold text-purple-100">
              <IoMdRocket width={22} height={36} color="#839dd1" />
              todo
            </span>
          </Button>
        </Link>
      </div>

      <div className="flex absolute right-5 lg:right-20 gap-4">
        {[
          {
            label: "Log In",
            href: "/auth/sign-in",
          },
        ].map((item, index) => (
          <div key={index}>
            <Link href={item.href}>
              <button className="text-white text-base hover:underline">
                {item.label}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
