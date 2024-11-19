import HomepageBody from "@/components/homepage/HomepageBody";
import Navbar from "@/components/homepage/Navbar";
import { NextUIProvider } from "@nextui-org/system";

export default function Home() {
  return (
    <NextUIProvider>
      <div className="flex flex-col w-full h-full">
        <Navbar />
        <HomepageBody />
      </div>
    </NextUIProvider>
  );
}
