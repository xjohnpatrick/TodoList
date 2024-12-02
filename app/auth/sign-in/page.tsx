"use client";
import React, { useEffect, useState } from "react";
import { IoMdRocket } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaKey } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { useSuccessMessage } from "@/context/SuccessMessageContext";

export default function SignInPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { successMessage, setSuccessMessage } = useSuccessMessage();

  const [error, setError] = useState("");

  const router = useRouter();

  const clearInput = () => {
    setEmail("");
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage("Login Successfully")
        router.push("/main/dashboard");
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }

    setTimeout(() => setError(""), 5000);
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage, setSuccessMessage]);

  return (
    <div className="flex flex-col bg-white-50 w-full h-screen justify-center items-center font-poppins gap-4">
      <span className="flex text-center absolute top-5 lg:right-5 bg-purple p-2 rounded-md">
        The system is front-end only. Click &ldquo;Log In&ldquo; to check out
        its features.
      </span>
      <div className="flex text-purple-400 text-4xl font-bold">
        <span>Log in to</span>
        <div className="flex items-center">
          <IoMdRocket width={22} height={36} color="#839dd1" />
          <span className="text-purple-300">to</span>
          <span className="text-purple-200">do</span>
        </div>
      </div>

      <div className="flex flex-col w-[320px]">
        {/* <form onSubmit={handleSignIn}> */}
          <div className="flex flex-col w-full px-4 gap-5 relative mt-4">
            {[
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
                isEmail: true,
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
            ].map((item, index) => (
              <div key={index} className="flex relative custom-password-field">
                {item.icon}
                <input
                  type={item.type}
                  value={item.value}
                  onChange={item.onChange}
                  className="flex w-full bg-purple-100 text-white outline-none py-3.5 pl-10 pr-3 placeholder:text-transparent rounded-md"
                  placeholder={item.placeholder}
                  // required
                />
                <label className="absolute left-10 top-3.5 text-white/70 transition-all duration-200 ease-out pointer-events-none">
                  {item.label}
                </label>
                {item.isEmail && item.value && (
                  <IoCloseCircle
                    className={`absolute right-3 top-4 text-white cursor-pointer`}
                    size={18}
                    onClick={clearInput}
                  />
                )}
              </div>
            ))}
            <Link href="/auth/forgot-password" className="mt-2">
              <button
                type="button"
                className="flex text-purple-300 text-xs absolute bottom-0 right-5 hover:underline"
              >
                Forgot your password?
              </button>
            </Link>
          </div>

          <Link href="/main/dashboard">
            <div className="flex relative justify-center w-full px-4 mt-4">
              <Button
                type="submit"
                size="lg"
                className="flex bg-purple-300 text-white w-full rounded-md justify-center p-3"
              >
                Log In
              </Button>
            </div>{" "}
          </Link>

          {error && (
            <div className="flex text-white bg-red-500 rounded-md p-4 text-sm absolute bottom-4 right-6">
              <p>{error}</p>
            </div>
          )}

          {successMessage && (
            <div className="flex text-white bg-green-500 rounded-md p-4 text-sm fixed bottom-4 right-6">
              <p>{successMessage}</p>
            </div>
          )}
        {/* </form> */}

        <div className="flex my-10 justify-center items-center gap-7">
          <div className="flex bg-purple-300 h-0.5 w-[105px]"></div>
          <div className="flex text-purple-300 text-md">or</div>
          <div className="flex bg-purple-300 h-0.5 w-[105px]"></div>
        </div>

        <div className="flex flex-col mx-4 gap-2">
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
              {item.label}
            </Button>
          ))}
        </div>

        <Link href="/auth/sign-up" className="flex justify-center mt-4">
          <button className="hover:underline text-sm lg:text-base">
            Don&apos;t have an account?
          </button>
        </Link>
      </div>
    </div>
  );
}
