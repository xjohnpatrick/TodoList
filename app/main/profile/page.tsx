"use client";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import React, { useState } from "react";

export default function Profile() {
  const [imageSrc, setImageSrc] = useState<string>("/patrick.jpeg");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result && typeof reader.result === "string") {
          setImageSrc(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    const fileInput = document.getElementById("fileInput") as HTMLInputElement;
    fileInput?.click();
  };
  return (
    <div className="flex w-full h-screen bg-white-50 justify-center items-center font-poppins">
      <div className="flex flex-col items-center w-[90vw] md:w-[70vw] lg:w-[45vw] lg:h-[60vh] rounded-md gap-4 overflow-y-scroll scrollbar-hide">
        <div className="flex flex-col w-full h-[400px] rounded-md border-1 border-gray-50/20 p-4 gap-4">
          <label className="text-2xl font-semibold">User</label>
          <div className="flex flex-col w-full gap-2">
            {[
              {
                label: "First Name",
                type: "text",
              },
              {
                label: "Email",
                type: "email",
              },
              {
                label: "Title",
                type: "text",
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col gap-2">
                <label className="text-purple-400 text-base">
                  {item.label}
                </label>
                <Input
                  type={item.type}
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
        <div className="flex flex-col w-full h-40 rounded-md border-1 border-gray-50/20 p-4 gap-4">
          <label className="text-lg">Profile Image</label>

          <div className="flex items-center gap-4">
            <div className="flex w-16 h-16 relative">
              <Image
                src={imageSrc}
                alt="Image"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <Button
              size="sm"
              className="text-base text-purple-400"
              onClick={triggerFileInput}
            >
              Choose File
            </Button>
            <input
              className="text-base text-purple-400"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
              id="fileInput"
            />
            <label className="text-sm lg:text-base">No file chosen</label>
          </div>
        </div>
      </div>
    </div>
  );
}
