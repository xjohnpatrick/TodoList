import "./main.css";
import SideBar from "../../side-bar/page";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={`flex ${poppins.variable}`}>
          <SideBar/>
          <div className="flex-1">
          {children}
          </div>
        </div>
        </body>
    </html>
  );
}
