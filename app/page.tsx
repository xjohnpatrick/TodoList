import Footer from "@/components/homepage/Footer";
import HomepageBody from "@/components/homepage/HomepageBody";
import Navbar from "@/components/homepage/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <Navbar />
      <HomepageBody />
      <Footer />
    </div>
  );
}
