import React from 'react';
import {User} from "lucide-react";

const Navbar = () => {
  return (
    <header className="
      fixed
      left-[7.22%] right-[7.22%]
      top-[18px]
      h-20
      bg-[rgba(26,25,25,0.3)]
      backdrop-blur-sm
      rounded-xl
      px-6
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
        <a href="#" className="text-white hover:text-gray-300 transition-colors">Home</a>
        <a href="#" className="text-white hover:text-gray-300 transition-colors">Movies</a>
        <a href="#" className="text-white hover:text-gray-300 transition-colors">Collection</a>
        <a href="#" className="text-white hover:text-gray-300 transition-colors">FAQ</a>
      </nav>

      
      <div className="flex items-center  gap-2"> 
       <img src="/log in - interaction.svg" className="w-6 h-6" alt="" />
        {/* <img src="/sun.svg" alt="" className="w-6 h-6" /> */}
        
      </div>
    </header>
  );
};

export default Navbar;