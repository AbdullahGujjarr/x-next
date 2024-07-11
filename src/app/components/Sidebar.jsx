"use client"
import { FaXTwitter } from "react-icons/fa6";
import { HiDotsHorizontal, HiHome } from "react-icons/hi";
import React from 'react'
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Sidebar() {
  const { data: session } = useSession();
  console.log(session)
  return (
    <div className=" flex flex-col p-3 justify-between h-screen">
      <div className="flex flex-col gap-4" >

   
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
    {
      session ? (
        <button className=" bg-blue-400 text-white rounded-full
        w-48 h-9 hover:bg-blue-500 font-semibold
        items-center
        shadow-md hidden xl:inline
        
       " onClick={()=> signOut()}>Sign Out</button>
      ) : (
        <button className=" bg-blue-400 text-white rounded-full
        w-48 h-9 hover:bg-blue-500 font-semibold
        items-center
        shadow-md hidden xl:inline
        
       " onClick={()=> signIn()}>Sign In</button>
      )
    }
        </div>

        {session && (
          <div className="text-gray-700 text-sm flex items-center cursor-pointer p-3
           hover:bg-gray-100 rounded-full transition-all duration-200">
            <img src={session.user.image} alt="user-image"
            className=" h-10 w-10 rounded-full xl:mr-2"
            />
            <div className=" hidden xl:inline">
            <h4 className=" font-bold">{session.user.name}</h4>
            <p className=" text-sm text-gray-500">@{session.user.username}</p>
            </div>
            <HiDotsHorizontal  className=" h-5 xl:ml-8  hidden xl:inline"/>
          </div>
        )}

    
    </div>
  )
}
