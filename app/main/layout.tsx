import "@/app/globals.css";
import { poppins } from "@/app/fonts/fonts";
import Sidebar from "@/components/Sidebar";
import { CategoryProvider } from "@/context/CategoryContext";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CategoryProvider>
      <html lang="en">
        <body className={`${poppins.variable}`}>
          <div className="flex">
            <Sidebar />
            {children}
          </div>
        </body>
      </html>
    </CategoryProvider>
  );
}
