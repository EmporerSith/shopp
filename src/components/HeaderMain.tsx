import React from "react";
import Image from "next/image";

import { FaSearch } from "react-icons/fa";
import { BiSolidUser, BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const HeaderMain = () => {
  return (
    <div className="border-b border-gray-200 py-4 greateen">
      <div className="container flex justify-between items-center pl-2">
        <Image
          className="ml-6 items-center text-center pb-4 sm:pb-0 sm:justify-center max-w-full"
          src="/whydid.svg"
          width={80}
          height={50}
          alt="log"
        />

        <div className="w-full sm:w-[300px] md:w-[70%] relative">
          <input
            className="border-gray-200 border p-2 px-4 rounded-lg w-[62%] translate-x-[20%] sm:translate-x-0 sm:w-full"
            type="text"
            placeholder="Search..."
          />

          <FaSearch className="absolute right-0 top-0 mr-3 mt-3 text-gray-400" size={20} />
        </div>
        <div className="hidden lg:flex gap-4 text-white text-[30px] mr-3">
          <BiUser />

          <div className="relative">
            <FiHeart />
            <div
              className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] 
          text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1"
            >
              0
            </div>
          </div>
          <div className="relative">
            <HiOutlineShoppingBag />
            <div
              className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] 
          text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1"
            >
              0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
