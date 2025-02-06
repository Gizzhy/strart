"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Codesystic from "@/components/Codesysticfooter";
import men from "@/assets/men.jpg";
import women from "@/assets/women.jpg";
import Image from "next/image";

export default function Products() {
  return (
    <>
      <Navbar />
      <div className="w-[100%] h-[1000px] relative justify-between mt-5 ">
        <Image
          src={men}
          className="rounded-3xl w-[35%] h-[69%] left-[150px] absolute cursor-pointer hover:opacity-75 z-0"
          alt="men"
        />
        <a href="/products/men">
          <button className="h-[60px] w-[200px] bg-custom-brown z-10 absolute top-[300px] left-[310px] text-white ">
            Quick Shop
          </button>
        </a>
        <br />
        <a href="/products/men">
          <button className="h-[60px] w-[200px] bg-custom-brown z-10 absolute top-[650px] left-[950px] text-white">
            Quick Shop
          </button>
        </a>
        <Image
          src={women}
          className="rounded-3xl w-[35%] h-[69%] absolute top-[300px] left-[780px] cursor-pointer hover:opacity-75 z-0"
          alt="women"
        />
      </div>

      <Footer />
      <Codesystic />
    </>
  );
}
