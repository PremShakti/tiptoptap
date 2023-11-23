"use client";
import Link from "next/link";
import React, { useState } from "react";
const SideTogalbar = ({ open, handleOp }) => {
const bodyTouch=()=>{
  handleOp()
}
  return (
    <div
      className={` w-64 bg-[#05E4FF] z-50 text-white h-full absolute top-[70px] left-0 transform transition-transform ease-in-out ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className=" flex flex-col  items-center  " >
      <h2 className="text-2xl" >
        Lessions
      </h2>
    
  
    

      <ul  className=" flex flex-col gap-[10px] w-[90%]">
        <li className="border-[white] border-b-[1px]" onClick={bodyTouch}>
          <Link href={"/practice/1"}>Day-1</Link>
        </li>
        <li className="border-[white] border-b-[1px]" onClick={bodyTouch}>
          <Link href={"/practice/2"}>Day-2</Link>
        </li>
        <li className="border-[white] border-b-[1px]"onClick={bodyTouch}>
          <Link href={"/practice/3"}>Day-3</Link>
        </li>
        <li className="border-[white] border-b-[1px]"onClick={bodyTouch}>
          <Link href={"/practice/4"}>Day-4</Link>
        </li>
        <li className="border-[white] border-b-[1px]" onClick={bodyTouch}>
          <Link href={"/practice/5"}>Day-5</Link>
        </li>
        <li className="border-[white] border-b-[1px]" onClick={bodyTouch}>
          <Link href={"/practice/6"}>Day-6</Link>
        </li>
        <li className="border-[white] border-b-[1px]" onClick={bodyTouch}>
          <Link href={"/practice/7"}>Day-7</Link>
        </li>
        <li className="border-[white] border-b-[1px]" onClick={bodyTouch}>
          <Link href={"/practice/8"}>Day-8</Link>
        </li>
        <li className="border-[white] border-b-[1px]" onClick={bodyTouch}>
          <Link href={"/practice/9"}>Day-9</Link>
        </li>
        <li className="border-[white] border-b-[1px]"onClick={bodyTouch}>
          <Link href={"/practice/10"}>Day-10</Link>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default SideTogalbar;
