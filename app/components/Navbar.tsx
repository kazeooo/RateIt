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
            首页
          </Link>
          <Link href="/showcase" className="hover:text-slate-300">
            展示
          </Link>
          <Link href="/about" className="hover:text-slate-300">
            关于我们
          </Link>
          <Link href="/contact" className="hover:text-slate-300">
            联系我们
          </Link>
        </div>

        <div className="flex items-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            登录
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
