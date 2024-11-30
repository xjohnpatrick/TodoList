import Footer from "@/components/Footer";
import HomepageBody from "@/components/HomepageBody";
import Navbar from "@/components/Navbar";
import { NextUIProvider } from "@nextui-org/system";
import { poppins } from "./fonts/fonts";

export default function Home() {
  return (
    <NextUIProvider>
      <div className={`flex flex-col w-full h-full ${poppins.className}`}>
        <Navbar />
        <HomepageBody />
        <Footer />
      </div>
    </NextUIProvider>
  );
}
