import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/app/fonts/fonts"
import { SuccessMessageProvider } from "@/context/SuccessMessageContext";

export const metadata: Metadata = {
  title: {
    template: "%s | TodoList App",
    default: "TodoList App",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SuccessMessageProvider>
      <html lang="en">
        <body className={`${poppins.variable}`}>{children}</body>
      </html>
    </SuccessMessageProvider>
  );
}
