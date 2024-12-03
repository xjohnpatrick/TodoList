import React from 'react'
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { footerIcons } from '@/data';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="flex w-full h-56 font-poppins flex-col bg-purple-400">
      <div className="flex flex-col w-full h-full justify-center gap-4">
        <div className="flex w-full gap-4 sm:gap-6 lg:gap-10 justify-center">
          {footerIcons.map((icon) => (
            <div key={icon.id}>
              <Link href={icon.href} target="_blank" rel="noopener noreferrer">
                <Button
                  isIconOnly
                  size="sm"
                  radius="full"
                  className="flex text-white bg-purple-400 relative"
                >
                  <Image src={icon.img} alt={icon.alt} fill />
                </Button>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center w-full gap-4">
          {[
            {
              label: "Terms and Conditions",
              href: "/homepage/terms-and-conditions",
            },
            {
              label: "Privacy Policy",
              href: "/homepage/privacy-policy",
            },
            {
              label: "Contact Us",
              href: "/homepage/contact-us",
            },
            {
              label: "About Us",
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
