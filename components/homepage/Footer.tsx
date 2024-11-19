import React from 'react'
import { Button } from '@nextui-org/button';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex w-full h-40 lg:h-56 font-poppins flex-col bg-purple-300">
      <div className="flex flex-col w-full h-full justify-center gap-4">
        <div className="flex w-full gap-4 sm:gap-6 lg:gap-10 justify-center">
          {[
            {
              icon: <FaFacebook size={34} />,
              href: "https://www.facebook.com/JpIsidoro15/",
            },
            {
              icon: <FaLinkedin size={34} />,
              href: "https://www.linkedin.com/in/jpisidoro15/",
            },
            {
              icon: <FaGithub size={34} />,
              href: "https://github.com/xjohnpatrick",
            },
          ].map((item, index) => (
            <div key={index}>
              <Link href={item.href} target="_blank" rel="noopener noreferrer">
                <Button
                  isIconOnly
                  size="sm"
                  radius="full"
                  className="flex text-white"
                >
                  {item.icon}
                </Button>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-center w-full gap-4">
          {[
            {
              label: "Terms and Conditions",
              href: "#",
            },
            {
              label: "Contact Us",
              href: "#",
            },
            {
              label: "How does it work",
              href: "#",
            },
          ].map((item, index) => (
            <div key={index}>
              <Link href={item.href}>
                <button className="flex hover:underline text-xs sm:text-sm md:text-base lg:text-lg text-white">
                  {item.label}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full items-center justify-center text-white">
        © 2024 TodoList. All rights reserved.
      </div>
    </footer>
  );
}
