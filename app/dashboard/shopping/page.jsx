import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { data } from "../../../data/data.js";

const Shopping = () => {
  return (
    <div className="p-4">
      <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
        <div className="my-3 p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center justify-between cursor-pointer">
          <span>Order</span>
          <span className="text-right sm:text-left">Status</span>
          <span className="hidden md:grid">Last Order</span>
          <span className="hidden sm:grid">Method</span>
        </div>
        <ul>
          {data.map((order, id) => (
            <li
              key={id}
              className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center justify-between cursor-pointer"
            >
              <div className="flex">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <FaShoppingBag className="text-purple-800" />
                </div>
                <div className="pl-4">
                  <p className="text-gray-800 font-bold">
                    ${order.total.toLocaleString()}
                  </p>
                  <p className="text-gray-800 text-sm">{order.name.first}</p>
                </div>
              </div>
              <p className="text-gray-600 text-right sm:text-left ">
                <span
                  className={
                    order.status === "Processing"
                      ? "bg-green-200 p-2 rounded-lg"
                      : order.status === "Completed" ? "bg-blue-200 p-2 rounded-lg" : "bg-yellow-200 p-2 rounded-lg"
                  }
                >
                  {order.status}
                </span>
              </p>
              <p className="hidden md:flex">{order.date}</p>
              <div className="hidden sm:flex justify-between items-center">
                <p>{order.method}</p>
                <BsThreeDotsVertical />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Shopping;
