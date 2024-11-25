"use client";
import React, { useState } from "react";
import { IoMdRocket } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaKey } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
import ModalPrivacy from "@/components/modal/ModalPrivacy";
import ModalTerms from "@/components/modal/ModalTerms";

export default function SignUpPage() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [error, setError] = useState("");

  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  const openPrivacyModal = () => setIsPrivacyModalOpen(true);
  const closePrivacyModal = () => setIsPrivacyModalOpen(false);

  const openTermsModal = () => setIsTermsModalOpen(true);
  const closeTermsModal = () => setIsTermsModalOpen(false);

  const handleSignup = () => {
    if (!checkboxChecked) {
      setError(
        "You must agree to the Terms and Conditions and Privacy Policy."
      );
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }
  }

  const clearInput = () => {
    setEmail("");
    setUsername("");
  };
  return (
    <div className="flex flex-col bg-white w-full h-screen justify-center items-center font-poppins gap-4">
      <div className="flex text-purple-400 text-4xl font-bold">
        <span>Sign up to</span>
        <div className="flex items-center">
          <IoMdRocket width={22} height={36} color="#839dd1" />
          <span className="text-purple-300">to</span>
          <span className="text-purple-200">do</span>
        </div>
      </div>

      <div className="flex flex-col w-[320px] px-4">
        <form onSubmit={handleSignup}>
          <div className="flex flex-col w-full gap-5 relative mt-4">
            {[
              {
                label: "Username",
                type: "text",
                placeholder: "Username",
                icon: (
                  <FaUser
                    className="absolute left-3 top-4 text-white"
                    size={18}
                  />
                ),
                isClearable: true,
                value: username,
                onChange: (e: {
                  target: { value: React.SetStateAction<string> };
                }) => setUsername(e.target.value),
              },
              {
                label: "Email",
                type: "email",
                placeholder: "Email",
                icon: (
                  <IoMail
                    className="absolute left-3 top-4 text-white"
                    size={18}
                  />
                ),
                isClearable: true,
                value: email,
                onChange: (e: {
                  target: { value: React.SetStateAction<string> };
                }) => setEmail(e.target.value),
              },
              {
                label: "Password",
                type: "password",
                placeholder: "Password",
                icon: (
                  <FaKey
                    className="absolute left-3 top-4 text-white"
                    size={18}
                  />
                ),
                onChange: (e: {
                  target: { value: React.SetStateAction<string> };
                }) => setPassword(e.target.value),
                value: password,
              },
              {
                label: "Confirm Password",
                type: "password",
                placeholder: "Confirm Password",
                icon: (
                  <FaKey
                    className="absolute left-3 top-4 text-white"
                    size={18}
                  />
                ),
                onChange: (e: {
                  target: { value: React.SetStateAction<string> };
                }) => setConfirmPassword(e.target.value),
                value: confirmPassword,
              },
            ].map((item, index) => (
              <div key={index} className="flex relative">
                {item.icon}
                <input
                  type={item.type}
                  value={item.value}
                  onChange={item.onChange}
                  className="flex w-full bg-purple-100 text-white outline-none py-3.5 pl-10 pr-3 placeholder:text-transparent rounded-md"
                  placeholder={item.placeholder}
                  required
                />
                <label className="absolute left-10 top-3.5 text-white/70 transition-all duration-200 ease-out pointer-events-none">
                  {item.label}
                </label>
                {item.isClearable && item.value && (
                  <IoCloseCircle
                    className={`absolute right-3 top-4 text-white cursor-pointer`}
                    size={18}
                    onClick={clearInput}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="flex text-purple-400 text-[12px] text-justify mt-4">
            <Checkbox
              checked={checkboxChecked}
              onChange={() => setCheckboxChecked(!checkboxChecked)}
              required
            />
            <span>
              By signing up, you agree to our{" "}
              <a
                onClick={openTermsModal}
                className="text-purple-100 cursor-pointer hover:underline"
              >
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a
                onClick={openPrivacyModal}
                className="text-purple-100 cursor-pointer hover:underline"
              >
                Privacy Policy.
              </a>
            </span>
          </div>

          <div className="flex relative justify-center w-full mt-4">
            <Button
              type="submit"
              size="lg"
              className="flex bg-purple-300 text-white w-full rounded-md justify-center p-3"
            >
              Sign Up
            </Button>
          </div>

          {error && (
            <div className="flex text-white bg-red-500 rounded-md p-4 text-sm absolute bottom-4 right-6">
              <p>{error}</p>
            </div>
          )}
        </form>

        <Link href="/auth/sign-in" className="flex justify-center mt-4">
          <button className="hover:underline text-sm lg:text-base">
            Already have an account?
          </button>
        </Link>
        <ModalPrivacy
          isPrivacyOpen={isPrivacyModalOpen}
          onPrivacyChange={closePrivacyModal}
        />
        <ModalTerms
          isTermsOpen={isTermsModalOpen}
          onTermsChange={closeTermsModal}
        />
      </div>
    </div>
  );
}
