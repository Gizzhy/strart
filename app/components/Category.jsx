"use client";
import { useState } from "react";

import { FaCircleMinus } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import increment, { decrement } from "../utils/quantity";
import NumberDropdown from "../utils/Dropdown";

export default function Category() {
  const [selectedNumber, setSelectedNumber] = useState(10); // Default to 10

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedNumber(selectedValue);
    console.log(`Selected number from ${event.target.id}: ${selectedValue}`);
  };
  return (
    <>
      <div className="w-[1100px] flex h-[300px] bg-custom-image bg-cover p-5 justify-center items-center">
        <div className="w-[1040px] h-[250px] border-solid border-5 border-custom-gray p-3">
          <p className="text-2xl font-bold text-custom-brown">Men</p>
          <p className="text-custom-blue text-xl font-bold">Products</p>
          <button className="h-[40px] w-[150px] bg-custom-brown text-white text-sm cursor-pointer">
            View products
          </button>
        </div>
      </div>
      <div className="w-[1100px] flex h-[500px] bg-cover p-5 justify-evenly items-center mt-12">
        <div className="w-[250px] h-[520px]  flex flex-col">
          <div className="h-[500px] w-[100%] bg-custom-bata1 bg-cover"></div>
          <div className="mt-12">
            <p
              className="font-medium text-sm text-custom-brown"
              id="shoe1-name"
            >
              Sandals
            </p>
            <p className="font-extrabold text-lg text-custom-blue">
              ₦<span id="shoe1-price">10000</span>
            </p>
          </div>
          <div className="h-[50px] w-[100%] mt-2 flex justify-between">
            <div className="w-[50%] flex">
              <FaCirclePlus
                fontSize={30}
                color="#4d3a2d"
                className="cursor-pointer"
                onClick={() => {
                  increment("shoe1-quantity");
                }}
              />
              <span
                className="text-lg text-custom-brown font-semibold mr-1 ml-1"
                id="shoe1-quantity"
              >
                0
              </span>
              <FaCircleMinus
                fontSize={30}
                color="#4d3a2d"
                className="cursor-pointer"
                onClick={() => {
                  decrement("shoe1-quantity");
                }}
              />
            </div>
            <div className="w-[50%] flex">
              Size:
              <div className="ml-2">
                <NumberDropdown
                  selectedNumber={selectedNumber}
                  handleChange={handleChange}
                />
              </div>
            </div>
          </div>
          <button
            className="h-[70px] w-[140px] bg-custom-brown text-white cursor-pointer rounded-px-10 m-auto mt-3"
            onClick={() => {
              submit("shoe1-name", "shoe1-price", "shoe1-quantity");
            }}
          >
            Purchase
          </button>
        </div>
        <div className="w-[250px] h-[450px] flex flex-col">
          <div className="h-[330px] w-[100%] bg-custom-bata2 bg-cover"></div>
          <div className="mt-12">
            <p className="font-medium text-sm text-custom-brown">
              Shoe gbengbe
            </p>
            <p className="font-extrabold text-lg text-custom-blue">N25,000</p>
          </div>
        </div>
        <div className="w-[250px] h-[450px]  flex flex-col">
          <div className="h-[330px] w-[100%] bg-custom-bata3 bg-cover"></div>
          <div className="mt-12">
            <p className="font-medium text-sm text-custom-brown">Brogues</p>
            <p className="font-extrabold text-lg text-custom-blue">N30,000</p>
          </div>
        </div>
        <div className="w-[250px] h-[450px]  flex flex-col">
          <div className="h-[330px] w-[100%] bg-custom-bata4 bg-cover"></div>
          <div className="mt-12">
            <p className="font-medium text-sm text-custom-brown">Bata yahoo</p>
            <p className="font-extrabold text-lg text-custom-blue">N28,000</p>
          </div>
        </div>
      </div>
      <div className="w-[1100px] flex h-[300px] bg-custom-image2 bg-cover p-5 justify-center items-center mt-12">
        <div className="w-[1040px] h-[250px] border-solid border-5 border-custom-gray p-3">
          <p className="text-2xl font-bold text-custom-brown">Women</p>
          <p className="text-custom-blue text-xl font-bold">Products</p>
          <button className="h-[40px] w-[150px] bg-custom-brown text-white text-sm cursor-pointer">
            View products
          </button>
        </div>
      </div>
    </>
  );
}
