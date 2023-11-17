import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React from "react";

const DashboardLayout = ({ children }) => {
    return (
      <div className="flex flex-col w-full">
        <aside className="flex h-10">
          <Header />
        </aside>
        <div className="bg-gray-100 flex-[8] p-4 rounded">
          {children}
        </div>
      </div>
    );
  };
  
  export default DashboardLayout;
