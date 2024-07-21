"use client";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Image from "next/image";
import logo from "../assets/strart2.png";
export default function Footer() {
  return (
    <>
      <div className="w-[100%] h-[300px] bg-custom-grey flex mt-8">
        <div className="w-[50%] h-[100%]">
          <Image src={logo} className="w-[30%]" alt="strart" />
          <p className="text-custom-blue text-justify px-9 -mt-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            suscipit leo dolor, eu ultrices felis pretium sit amet. Nulla vitae
            nisi eu enim pellentesque elementum quis sit amet urna. Mauris eget
            mauris orci. Morbi ac sapien eget elit vehicula fermentum.
          </p>
        </div>
        <div className="w-[50%] h-[100%] flex ">
          <div className="w-[50%] h-[50%] mt-[90px] ">
            <p className="font-bold text-xl">Products</p>
            <p className="mt-5 text-lg">
              <a href="/men">Men</a>
            </p>
            <p className="mt-4 text-lg">
              <a href="/women">Women</a>
            </p>
            <p className="mt-5 text-lg">
              <a href="/kids">Kids</a>
            </p>
          </div>
          <div className="w-[50%] h-[50%] mt-[90px]">
            <p className="font-bold text-xl">Company</p>
            <p className="mt-5 text-lg">
              <a href="/about">About</a>
            </p>
            <p className="mt-4 text-lg">
              <a href="/women">Delivery Policy</a>
            </p>
            <div className="flex mt-5 w-[70%]">
              <a href="https://wa.me/2347062635057">
                <FaWhatsapp fontSize={30} className="cursor-pointer mr-9" />
              </a>
              <FaInstagram fontSize={30} className="cursor-pointer mr-9" />
              <IoMdMail fontSize={30} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
