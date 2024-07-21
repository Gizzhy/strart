"use client";
import { useState } from "react";
import { products, productsFemale } from "../utils/product";
import { handlePurchase } from "../utils/handlePurchase";
import { FaCircleMinus } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import { useQuantity } from "../utils/quantity";
import NumberDropdown from "../utils/Dropdown";

export default function Category() {
  const [sizes, setSizes] = useState({
    shoe1: 10,
    shoe2: 10,
    shoe3: 10,
    shoe4: 10,
    shoe5: 10,
    shoe6: 10,
    shoe7: 10,
    shoe8: 10,
  });
  const handleSizeSelect = (id, size) => {
    setSizes((prevSizes) => ({
      ...prevSizes,
      [id]: size,
    }));
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
      <div className="w-[1100px] flex h-[600px] bg-cover p-5 justify-evenly items-center mt-12">
        {products.map((product) => {
          const { quantity, increment, decrement } = useQuantity(1);
          return (
            <div
              key={product.id}
              className="w-[250px] h-[570px]  flex flex-col"
            >
              <div
                className={`h-[500px] w-[100%] ${product.bgClass} bg-cover`}
              ></div>
              <div className="mt-12">
                <p className="font-medium text-sm text-custom-brown">
                  {product.name}
                </p>
                <p className="font-extrabold text-lg text-custom-blue">
                  ₦<span>{product.price}</span>
                </p>
              </div>
              <div className="h-[50px] w-[100%] mt-2 flex justify-between">
                <div className="w-[50%] flex">
                  <FaCirclePlus
                    fontSize={30}
                    color="#4d3a2d"
                    className="cursor-pointer"
                    onClick={increment}
                  />
                  <span className="text-lg text-custom-brown font-semibold mr-1 ml-1">
                    {quantity}
                  </span>
                  <FaCircleMinus
                    fontSize={30}
                    color="#4d3a2d"
                    className="cursor-pointer"
                    onClick={decrement}
                  />
                </div>
                <div className="w-[50%] flex">
                  Size:
                  <div className="ml-2">
                    <NumberDropdown
                      onSelect={(size) => handleSizeSelect(product.id, size)}
                    />
                  </div>
                </div>
              </div>
              <button
                className="h-[70px] w-[140px] bg-custom-brown text-white cursor-pointer rounded-px-10 m-auto mt-3"
                onClick={() =>
                  handlePurchase(
                    product.id,
                    product.name,
                    product.price,
                    quantity,
                    sizes[product.id]
                  )
                }
              >
                Purchase
              </button>
            </div>
          );
        })}
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
      <div className="w-[1100px] flex h-[600px] bg-cover p-5 justify-evenly items-center mt-12">
        {productsFemale.map((product) => {
          const { quantity, increment, decrement } = useQuantity(1);
          return (
            <div
              key={product.id}
              className="w-[250px] h-[570px]  flex flex-col"
            >
              <div
                className={`h-[500px] w-[100%] ${product.bgClass} bg-cover`}
              ></div>
              <div className="mt-12">
                <p className="font-medium text-sm text-custom-brown">
                  {product.name}
                </p>
                <p className="font-extrabold text-lg text-custom-blue">
                  ₦<span>{product.price}</span>
                </p>
              </div>
              <div className="h-[50px] w-[100%] mt-2 flex justify-between">
                <div className="w-[50%] flex">
                  <FaCirclePlus
                    fontSize={30}
                    color="#4d3a2d"
                    className="cursor-pointer"
                    onClick={increment}
                  />
                  <span className="text-lg text-custom-brown font-semibold mr-1 ml-1">
                    {quantity}
                  </span>
                  <FaCircleMinus
                    fontSize={30}
                    color="#4d3a2d"
                    className="cursor-pointer"
                    onClick={decrement}
                  />
                </div>
                <div className="w-[50%] flex">
                  Size:
                  <div className="ml-2">
                    <NumberDropdown
                      onSelect={(size) => handleSizeSelect(product.id, size)}
                    />
                  </div>
                </div>
              </div>
              <button
                className="h-[70px] w-[140px] bg-custom-brown text-white cursor-pointer rounded-px-10 m-auto mt-3"
                onClick={() =>
                  handlePurchase(
                    product.id,
                    product.name,
                    product.price,
                    quantity,
                    sizes[product.id]
                  )
                }
              >
                Purchase
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
