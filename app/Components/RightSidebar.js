import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { IoAddCircle } from "react-icons/io5";
import Image from 'next/image';

const RightSidebar = () => {
  return (
    <div className='hidden lg:flex lg:flex-col pt-6 w-[20vw] mr-2'>
        <div className='flex w-3/4 px-3 py-3 items-center justify-between'>   
                <h6>Contacts</h6>
                <IoSearchSharp className='scale-150'/>
        </div>
        <div className='w-full p-3 flex gap-4 items-center rounded-sm hover:bg-zinc-200'>
        <div className='w-[45px] h-[6vh] relative'>
        <Image src={"https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} fill={true} className='rounded-full'></Image>
        <div className='w-3 h-3 absolute bg-green-500 rounded-full border-2 border-gray-100 left-3/4 top-3/4'></div>
        </div>
        <p>Sara Kuphal</p>
        </div>
        <div className='w-full p-3 flex gap-4 items-center  rounded-sm hover:bg-zinc-200'>
        <div className='w-[45px] h-[6vh] relative'>
        <Image src={"https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} fill={true} className='rounded-full'></Image>
        <div className='w-3 h-3 absolute bg-green-500 rounded-full border-2 border-gray-100 left-3/4 top-3/4'></div>
        </div>
        <p>Brett Lueilwitz</p>
        </div>
        <div className='w-full p-3 flex gap-4 items-center rounded-sm hover:bg-zinc-200'>
        <div className='w-[45px] h-[6vh] relative'>
        <Image src={"https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} fill={true} className='rounded-full'></Image>
        </div>
        <p>Cecilia Torphy</p>
        </div>
        <div className='w-full p-3 flex gap-4 items-center rounded-sm hover:bg-zinc-200'>
        <div className='w-[45px] h-[6vh] relative'>
        <Image src={"https://images.unsplash.com/photo-1508341591423-4347099e1f19?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} fill={true} className='rounded-full'></Image>
        </div>
        <p>Halle Sanford</p>
        </div>
        <div className='w-full p-3 flex gap-4 items-center rounded-sm hover:bg-zinc-200'>
        <div className='w-[45px] h-[6vh] relative'>
        <Image src={"https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} fill={true} className='rounded-full'></Image>
        <div className='w-3 h-3 absolute bg-green-500 rounded-full border-2 border-gray-100 left-3/4 top-3/4'></div>
        </div>
        <p>Connor Kirlin</p>
        </div>
        <div className='w-full p-3 border-t-2 mt-8 flex flex-col'>
            <h1 className='py-3'>Group Conversations</h1>
            <div className='flex px-3 py-2 ml-[3px] items-center gap-4 hover:bg-zinc-200 rounded-md'>
                <IoAddCircle className='scale-150'/>
                <p>Create a new group</p>
            </div>
        </div>
    </div>
  )
}

export default RightSidebar