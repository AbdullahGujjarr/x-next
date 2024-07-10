import { FaXTwitter } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";
import React from 'react'
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className=" flex flex-col gap-4 p-3">
      <Link href="/">
        <FaXTwitter className=" h-16 w-16 p-3
         hover:bg-gray-200
         hover:rounded-full transition-all duration-200" />
      </Link>

      <Link href="/" className="flex items-center p-3 hover:bg-gray-200
      hover:rounded-full transition-all duration-
       gap-2 w-fit
      ">
      <HiHome className=" w-7 h-7"/>
      <span className=" font-bold hidden xl:inline">Home</span>
      </Link>

      <button className=" bg-blue-400 text-white rounded-full
       w-48 h-9 hover:bg-blue-500 font-semibold
       items-center
       shadow-md hidden xl:inline
      ">Sign In</button>
    </div>
  )
}
