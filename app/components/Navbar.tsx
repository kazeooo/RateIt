import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="rounded-full bg-slate-300 w-10 h-10 flex items-center justify-center mr-2">
              <span className="text-slate-800 font-bold">R</span>
            </div>
            <span className="text-xl font-bold">RateIt</span>
          </Link>
        </div>

        <div className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-slate-300">
            Home
          </Link>

          <div className="relative group">
            <button className="hover:text-slate-300 flex items-center">
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
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-slate-800 rounded-md shadow-lg hidden group-hover:block">
              <Link
                href="/showcase/web"
                className="block px-4 py-2 text-sm hover:bg-slate-700"
              >
                Web Projects
              </Link>
              <Link
                href="/showcase/mobile"
                className="block px-4 py-2 text-sm hover:bg-slate-700"
              >
                Mobile Apps
              </Link>
              <Link
                href="/showcase/design"
                className="block px-4 py-2 text-sm hover:bg-slate-700"
              >
                Design Work
              </Link>
            </div>
          </div>

          <Link href="/about" className="hover:text-slate-300">
            About
          </Link>
          <Link href="/contact" className="hover:text-slate-300">
            Contact
          </Link>
        </div>

        <div className="flex items-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Contact Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
