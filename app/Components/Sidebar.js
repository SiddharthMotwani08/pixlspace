"use client"
import React from 'react'
import { FaBeer } from 'react-icons/fa'
import SidebarButton from './SidebarButton'
import { useSession } from 'next-auth/react'
import { RiMemoriesFill } from "react-icons/ri";
import { BsSave2Fill } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { IoIosVideocam } from "react-icons/io";

const Sidebar = () => {
  const {data: session} = useSession()
  return (
    <div className='hidden lg:flex lg:flex-col pt-6 w-[20vw] pl-8 rounded-r-sm'>
        <div>
        <SidebarButton image={session?.user.image} value={session?.user.name}/>
        <SidebarButton Icon={FaBeer} value={"Friends"} />
        <SidebarButton Icon={RiMemoriesFill} value={"Memories"} />
        <SidebarButton Icon={BsSave2Fill} value={"Saved"} />
        <SidebarButton Icon={MdGroups} value={"Groups"} />
        <SidebarButton Icon={IoIosVideocam} value={"Video"} />
        <SidebarButton Icon={IoMdHome} value={"Marketplace"} />
        </div>
    </div>
  )
}

export default Sidebar