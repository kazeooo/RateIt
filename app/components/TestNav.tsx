"use client";

import React from "react";
import { useState } from "react";
import { Modal } from "./";

const TestNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="flex flex-row gap-4 bg-slate-500 items-center justify-between">
        <div className="p-4 bg-slate-700 ">
          <div
            className="rounded-full bg-slate-300 w-10 h-10 justify-center items-center flex text-w
          
          hite font-semibold"
          >
            P
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <div className="font-semibold text-white cursor-pointer hover:text-slate-300 transition ease-in-out">
            Home
          </div>
          <div className="inline-flex font-semibold text-white cursor-pointer hover:text-slate-300 transition ease-in-out">
            Portfolio
            <svg
              className="w-4 h-4 ml-1 transition-transform duration-200 ease-in-out transform group-hover:translate-y-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        <div>
          <button
            onClick={handleOpen}
            className="rounded-xl bg-slate-300 p-2 mr-5 hover:bg-slate-400 transition ease-in-out ease-in-out"
          >
            about
          </button>
          <Modal showModal={isOpen} setShowModal={setIsOpen} />
        </div>
      </div>
    </>
  );
};

export default TestNav;
