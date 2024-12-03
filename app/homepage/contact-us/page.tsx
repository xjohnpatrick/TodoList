import Image from 'next/image'
import React from 'react'
import waveHand from "@/public/wave-hand.svg"

export default function ContactUs() {
  return (
    <div className="bg-white-50 flex w-full h-screen font-poppins">
      <div className="flex flex-col items-center w-full">
        <h1 className="text-2xl lg:text-4xl text-purple-400 font-semibold my-20 text-center">
          Hi!{" "}
          <div className="inline-flex relative w-10 h-10">
            {" "}
            <Image src={waveHand} alt="Wave Hand Image" fill className="mt-2" />
          </div>{" "}
          How can we help?
        </h1>

        <div className="flex flex-col lg:flex-row bg-white w-[320px] lg:w-[900px] rounded-2xl h-96 p-10 gap-4">
          <div className="flex w-full h-full">
            <h1 className="text-purple-400 text-3xl font-semibold">
              Get in touch
            </h1>
          </div>
          <div className="flex flex-col w-full h-full bg-white-50 rounded-2xl px-8 justify-center gap-4">
            <h1 className="text-purple-400 text-xl lg:text-2xl font-semibold mt-4">
              Send us a message
            </h1>
            <span className="text-purple-400">
              We will respond as soon as possible.
            </span>
            <span className="text-purple-400 mb-4">
              Email us:{" "}
              <span className="text-purple-100">todolist@gmail.com</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
