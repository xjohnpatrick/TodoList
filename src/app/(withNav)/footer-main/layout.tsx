import { Metadata } from "next";
import "./withNav.css";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: {
    template: '%s | TodoList',
    default: 'TodoList',
  },
}

export default function WithNavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <Header/>
        {children}
        <Footer/>
        </body>  
    </html>
  );
}
