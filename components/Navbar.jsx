import Link from "next/link";
import logo from "../assets/strart2.png";
import Image from "next/image";
import { FaCartPlus } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      <nav className="h-[90px] w-[100%] flex justify-center items-center bg-white">
        <div className="items-center justify-between h-[55px] flex w-[1263px] bg-white">
          <div>
            <Image
              src={logo}
              className=""
              alt="Strart"
              width={100}
              height={100}
            />
          </div>
          <div>
            <ul className="flex items-center justify-between list-none mr-10">
              <li className="pb-2.4 cursor-pointer font-medium text-xl mr-11 text-custom-brown">
                <Link href="/">Home</Link>
              </li>
              <li className="pb-2.4 cursor-pointer font-medium mr-11 text-xl text-custom-brown">
                <Link href="/products">Products</Link>
              </li>
              <li className="pb-2.4 cursor-pointer font-medium text-xl text-custom-brown">
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <FaCartPlus fontSize={30} color="#4d3a2d" />
          </div>
        </div>
      </nav>
    </>
  );
}
