import React from "react";
import { Route, Routes } from "react-router-dom";
import { Sidebar, Navbar } from "./components";

const page = () => {
  return (
    <div className="relative flex min-h-screen bg-gray-100 flex-row">
      <div className="flex-1 mx-auto">
        <Navbar />
      </div>
    </div>
  );
};

export default page;
