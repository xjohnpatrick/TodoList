import "@/app/globals.css";
import { poppins } from "@/app/fonts/fonts";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <div className="flex">
          <Sidebar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
