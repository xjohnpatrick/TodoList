import Footer from "@/components/Footer";
import HomepageBody from "@/components/HomepageBody";
import Navbar from "@/components/Navbar";
import { NextUIProvider } from "@nextui-org/system";

export default function Home() {
  return (
    <NextUIProvider>
      <div className="flex flex-col w-full h-full">
        <Navbar />
        <HomepageBody />
        <Footer />
      </div>
    </NextUIProvider>
  );
}
