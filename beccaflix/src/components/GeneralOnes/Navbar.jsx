import React from 'react';
import { User } from "lucide-react";

const Navbar = () => {
  return (
    <header className="
      fixed
  left-1/2
  -translate-x-1/2
      mt-[18px]
      h-20
      w-9/12
      bg-[rgba(26,25,25,0.3)]
      backdrop-blur-sm
      rounded-xl
      px-6
        z-30
      flex items-center justify-between
    ">

      <div className="flex items-center gap-4">
        <img
          src="/Logo- light 1.svg"
          alt="logo"
          className=" hover:opacity-80 transition-opacity"
        />
      </div>


      <nav className="flex items-center gap-6 font-['Inter']">
        <a href="#" className="text-white hover:text-gray-300 transition-colors ">Home</a>
        <a href="#" className="text-white hover:text-gray-300 transition-colors ">Movies</a>
        <a href="#" className="text-white hover:text-gray-300 transition-colors ">Collection</a>
        <a href="#" className="text-white hover:text-gray-300 transition-colors ">FAQ</a>
      </nav>


      <div className="flex items-center gap-2">
        <a href="/login">
          <img
            src="/log in - interaction.svg"
            alt="Login"
            className="w-6 h-6 cursor-pointer transition-transform duration-200 hover:scale-110 active:rotate-12"
          />
        </a>
      </div>
    </header>
  );
};

export default Navbar;