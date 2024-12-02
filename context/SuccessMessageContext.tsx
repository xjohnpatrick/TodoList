"use client";
import { createContext, useContext, useState, useEffect } from "react";

const SuccessMessageContext = createContext({
  successMessage: "",
  setSuccessMessage: (message: string) => {},
  clearSuccessMessage: () => {},
});

export const SuccessMessageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [successMessage, setSuccessMessage] = useState("");

  const clearSuccessMessage = () => {
    setSuccessMessage("");
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        clearSuccessMessage();
      }, 5000); // Automatically clear the message after 5 seconds
      return () => clearTimeout(timer); // Clean up timer on component unmount or context change
    }
  }, [successMessage]);

  return (
    <SuccessMessageContext.Provider
      value={{ successMessage, setSuccessMessage, clearSuccessMessage }}
    >
      {children}
    </SuccessMessageContext.Provider>
  );
};

export const useSuccessMessage = () => useContext(SuccessMessageContext);
