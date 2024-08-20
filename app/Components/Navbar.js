"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import pixlspace from '../../public/pixlspaceLogo.jpg'
import { FaBeer, FaSignOutAlt } from 'react-icons/fa';
import { signOut, useSession } from 'next-auth/react';
import { MdSearch } from "react-icons/md";
import { RiHome4Line } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { IoIosVideocam, IoIosNotifications } from "react-icons/io";
import { IoGameController } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { LuMessagesSquare } from "react-icons/lu";

const Navbar = () => {
  const {data: session} = useSession()

  return (
    <div className='w-full h-[11vh] shadow-zinc-300 shadow-md sticky flex justify-between'>
    <div className='md:w-[25vw] w-1/2 flex justify-start items-center'>
      <Image className='md:w-[8vw] w-1/3 mt-[2vw] md:mt-[1vw]' src={pixlspace}/>
      <div className='flex gap-2 items-center w-2/3'>
      <div className='w-1/3 h-[4vh] md:w-[3vw] bg-zinc-300 rounded-full cursor-pointer select-none
    active:translate-y-1  active:[box-shadow:0_0px_0_0_#a1a1aa,0_0px_0_0_#d4d4d8]
    active:border-b-[0px]
    transition-all duration-100 [box-shadow:0_4px_0_0_#a1a1aa,0_7px_0_0_#d4d4d8]
    border-[1px] border-bg-zinc-300 flex flex-col justify-center items-center'>
      <MdSearch className='md:w-[1vw]'/>
      </div>
      <input type='text' placeholder='Search' className='hidden md:inline-flex px-2 bg-zinc-300 w-[9vw] h-[4vh] rounded-lg active:translate-y-1 active:[box-shadow:0_0px_0_0_#a1a1aa,0_0px_0_0_#d4d4d8]
    active:border-b-[0px] focus:outline-none transition-all duration-50 [box-shadow:0_4px_0_0_#a1a1aa,0_7px_0_0_#d4d4d8]
    border-[1px] border-inherit justify-center items-center' />
      </div>
    </div>

    <div className='md:w-[55vw] md:h-full hidden md:flex justify-between items-center gap-2 px-10 py-2 pl-28 ml-2'>
    <button className='w-1/5 h-4/5 items-center flex justify-center hover:bg-zinc-300 active:translate-y-1 active:[box-shadow:0_0px_0_0_#e4e4e7,0_0px_0_0_#f4f4f5]
    active:border-b-[0px] transition-all duration-100 [box-shadow:0_4px_0_0_#e4e4e7,0_7px_0_0_#f4f4f5] border-[1px] hover:border-0 rounded-md border-zinc-100 flex-col'>
      <RiHome4Line className='scale-150' />
      </button>
      <button className='w-1/5 h-4/5 items-center flex justify-center hover:bg-zinc-300 active:translate-y-1 active:[box-shadow:0_0px_0_0_#e4e4e7,0_0px_0_0_#f4f4f5]
    active:border-b-[0px] transition-all duration-100 [box-shadow:0_4px_0_0_#e4e4e7,0_7px_0_0_#f4f4f5] border-[1px] hover:border-0 rounded-md border-zinc-100 flex-col'>
      <FaUserFriends className='scale-150' />
      </button>
      <button className='w-1/5 h-4/5 items-center flex justify-center hover:bg-zinc-300 active:translate-y-1 active:[box-shadow:0_0px_0_0_#e4e4e7,0_0px_0_0_#f4f4f5]
    active:border-b-[0px] transition-all duration-100 [box-shadow:0_4px_0_0_#e4e4e7,0_7px_0_0_#f4f4f5] border-[1px] hover:border-0 rounded-md border-zinc-100 flex-col'>
      <IoIosVideocam className='scale-150'/>
      </button>
      <button className='w-1/5 h-4/5 items-center flex justify-center hover:bg-zinc-300 active:translate-y-1 active:[box-shadow:0_0px_0_0_#e4e4e7,0_0px_0_0_#f4f4f5]
    active:border-b-[0px] transition-all duration-100 [box-shadow:0_4px_0_0_#e4e4e7,0_7px_0_0_#f4f4f5] border-[1px] hover:border-0 rounded-md border-zinc-100 flex-col'>
      <IoMdHome className='scale-150' />
      </button>
      <button className='w-1/5 h-4/5 items-center flex justify-center hover:bg-zinc-300 active:translate-y-1 active:[box-shadow:0_0px_0_0_#e4e4e7,0_0px_0_0_#f4f4f5]
    active:border-b-[0px] transition-all duration-100 [box-shadow:0_4px_0_0_#e4e4e7,0_7px_0_0_#f4f4f5] border-[1px] hover:border-0 rounded-md border-zinc-100 flex-col'>
      <IoGameController className='scale-150' />
      </button>
    </div>

    <div className='md:w-[30vw] w-1/2 h-full flex justify-end items-center px-3 py-1 space-x-2'>
      <button className='w-1/4 md:w-1/6 h-3/5 lg:w-[2.5vw] items-center flex justify-center bg-zinc-300 hover:bg-zinc-400 active:translate-y-1 active:[box-shadow:0_0px_0_0_#e4e4e7,0_0px_0_0_#f4f4f5]
     transition-all duration-100 [box-shadow:0_3px_0_0_#e4e4e7,0_5px_0_0_#f4f4f5] rounded-full flex-col relative'>
      <Image src={session?.user.image} fill={true} objectFit='' className='rounded-full object-fill'/>
      </button>
      <button className='w-1/4 md:w-1/6 h-3/5 lg:w-[2.5vw] items-center flex justify-center bg-zinc-300 hover:bg-zinc-400 active:translate-y-1 active:[box-shadow:0_0px_0_0_#e4e4e7,0_0px_0_0_#f4f4f5]
     transition-all duration-100 [box-shadow:0_3px_0_0_#e4e4e7,0_5px_0_0_#f4f4f5] rounded-full flex-col'>
      <FiMenu />
      </button>
      <button className='w-1/4 md:w-1/6 h-3/5 lg:w-[2.5vw] items-center flex justify-center bg-zinc-300 hover:bg-zinc-400 active:translate-y-1 active:[box-shadow:0_0px_0_0_#e4e4e7,0_0px_0_0_#f4f4f5]
     transition-all duration-100 [box-shadow:0_3px_0_0_#e4e4e7,0_5px_0_0_#f4f4f5] rounded-full flex-col'>
      <LuMessagesSquare />
      </button>
      <button className='w-1/4 md:w-1/6 h-3/5 lg:w-[2.5vw] items-center flex justify-center bg-zinc-300 hover:bg-zinc-400 active:translate-y-1 active:[box-shadow:0_0px_0_0_#e4e4e7,0_0px_0_0_#f4f4f5]
     transition-all duration-100 [box-shadow:0_3px_0_0_#e4e4e7,0_5px_0_0_#f4f4f5] rounded-full flex-col'>
      <IoIosNotifications />
      </button>
      <button onClick={() => signOut()} className='w-1/4 md:w-1/6 h-3/5 lg:w-[2.5vw] items-center flex justify-center bg-zinc-300 hover:bg-zinc-400 active:translate-y-1 active:[box-shadow:0_0px_0_0_#e4e4e7,0_0px_0_0_#f4f4f5]
     transition-all duration-100 [box-shadow:0_3px_0_0_#e4e4e7,0_5px_0_0_#f4f4f5] rounded-full flex-col '>
      <FaSignOutAlt />
      </button>
    </div>

    </div>
  )
}

export default Navbar