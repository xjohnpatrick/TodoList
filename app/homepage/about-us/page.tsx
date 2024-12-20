import React from "react";
import Image from "next/image";
import patrickImg from "@/public/patrick.jpeg"
import ianMarcoImg from "@/public/ianMarcoImg.jpg"
import { IoMdRocket } from "react-icons/io";

export default function AboutUs() {
    const teamMembers = [
      {
        name: "John Patrick",
        description: "Front-End Developer",
        textLink: "johnpatrickisidoro.vercel.app",
        image: patrickImg,
      },
      {
        name: "Ian Marco",
        description: "Designer",
        textLink: "https://www.behance.net/ianmarcocastillo3",
        image: ianMarcoImg,
      },
    ];
  return (
    <div className="flex flex-col items-center lg:justify-center w-full h-[1500px] lg:h-[1000px] bg-white-50 font-poppins gap-4">
      <div className="flex flex-col w-64 sm:w-[600px] lg:w-[800px] items-center text-center gap-4 relative mt-24 lg:mt-0">
        <div className="hidden md:flex md:w-[750px] lg:w-[950px] xl:w-[1000px] h-20 absolute">
          <div className="flex justify-between w-full">
            <IoMdRocket size={60} className="-rotate-12 text-purple-100" />
            <IoMdRocket size={60} className="rotate-12 text-purple-100" />
          </div>
        </div>
        <div className="hidden md:flex md:w-[730px] lg:w-[930px] xl:w-[1000px] h-20 absolute bottom-0">
          <div className="flex justify-between w-full">
            <IoMdRocket size={60} className="-rotate-45 text-purple-100" />
            <IoMdRocket size={60} className="rotate-45 text-purple-100" />
          </div>
        </div>
        <h1 className="text-4xl lg:text-6xl font-semibold">
          We&apos;re in it for the flow.
        </h1>
        <p className="text-lg">
          Life moves fast, and staying organized shouldn&apos;t slow you down.
          Whether you&apos;re juggling work, personal goals, or big dreams,
          we&apos;re here to help you stay on top of it all. We believe in tools
          that are simple yet powerful — where every task finds its place, and
          every day feels a little more manageable. With a focus on clarity and
          ease, we&apos;re here to help you turn plans into progress.
        </p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-semibold">Our Team</h1>
        {teamMembers.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } w-[300px] sm:w-[600px] md:w-[750px] lg:w-[1000px] h-64 border-1 border-gray/20 bg-white rounded-md p-4`}
          >
            <div className="flex flex-col w-full h-full items-center justify-center">
              <span className="text-4xl font-semibold">{item.name}</span>
              <span className="text-lg">{item.description}</span>
              <span className="text-xs sm:text-sm text-gray-50/80">
                {item.textLink}
              </span>
            </div>
            <div className="flex justify-center items-center h-full w-full">
              <div className="flex rounded-full w-20 h-20 lg:w-40 lg:h-40 relative border-1">
                <Image
                  src={item.image} // Dynamically set the image based on the team member
                  alt={`${item.name}'s Profile Image`}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
