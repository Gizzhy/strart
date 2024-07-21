import Navbar from "@/components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Codesystic from "@/components/Codesysticfooter";
import Footer from "@/components/Footer";
export const metadata = {
  title: "STRART",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="mb-5">
        <p className="text-center text-2xl font-bold text-custom-brown mt-5">
          Shop Categories
        </p>
      </div>
      <div className="flex justify-center items-center flex-col">
        <Category />
      </div>
      <Footer />
      <Codesystic />
    </>
  );
}
