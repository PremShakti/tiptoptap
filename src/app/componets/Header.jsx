"use client";
import Link from "next/link";
import React, { useState } from "react";
import SideTogalbar from "./SideTogalbar";

import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  const [open, setOpen] = useState(false);
 
  // bg-blue-500


  const handleOp = () => {
    setOpen(!open);
  };
  return (
    <>
      <header className="bg- bg-blue-500 p-4 text-white font-bold h-[70px]">
        <SideTogalbar open={open} handleOp={handleOp} />
        <div className="flex justify-between ">
       
            <button
              onClick={handleOp}
              className="hidden md:block px-1 py-1 md:px-2 md:py-1 bg-gradient-to-r from-teal-400 to-blue-500 text-white font-semibold rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-teal-300 to-blue-400 rounded-full blur opacity-75 animate-pulse"></span>
              <span className="relative z-10">Lessons</span>
            </button>

            <span className=" block md:hidden" onClick={handleOp}> <GiHamburgerMenu onClick={handleOp} /></span>
           
          

          <h1 className=" text-[1em] md:text-3xl"><Link href={"/"} >Typo-Champ</Link> </h1>
          <div className="flex  items-center gap-[50px] ">
            <Link href={"/practice/1"}>Practice</Link>
            <Link href={"/alag"}>Game </Link>
            <Link href={"/"}>Test</Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
