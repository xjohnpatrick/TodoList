'use client'
import Footer from "../../../components/Footer";
import "./auth.css";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '400', '500', '600', '700'],
  variable: '--font-poppins',
})


export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
