import Link from "next/link";
import React from "react";
import { RxDashboard, RxPerson, RxSketchLogo } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi"
import { FiSettings } from "react-icons/fi"

const Sidebar = ({ children }) => {
  return (
    <div className="min-h-screen bg-white w-20 flex flex-col items-center py-4">
      <Link href={"/"}>
        <div className="bg-purple-800 text-white p-3 rounded-lg inline-block">
          <RxSketchLogo size={20} />
        </div>
      </Link>
      <span className="border-b-[1px] border-gray-200 w-full p-2" />
      <Link href={"/dashboard"}>
        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
          <RxDashboard size={20} />
        </div>
      </Link>
      <Link href={"/dashboard/users"}>
        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
          <RxPerson size={20} />
        </div>
      </Link>
      <Link href={"/dashboard/shopping"}>
        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
          <HiOutlineShoppingBag size={20} />
        </div>
      </Link>
      <Link href={"/dashboard/settings"}>
        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
          <FiSettings size={20} />
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
