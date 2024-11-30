import "@/app/globals.css";
import { poppins } from "@/app/fonts/fonts";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function HomepageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
