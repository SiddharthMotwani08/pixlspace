"use client"

import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { FaBeer, FaShare } from 'react-icons/fa'
import LikeButton from './LikeButton';
import { BiComment } from "react-icons/bi";
import { RiDeleteBinFill } from "react-icons/ri";
import axios from 'axios'
import PropTypes from 'prop-types';


const Post = ({ post }) => {
  return (
        <div className={`bg-zinc-200 rounded-md relative flex-col space mb-5`}  key={post?.id}>
          <div className='w-full h-[10vh] relative flex justify-start p-3 gap-4'>
          <div className='w-10 h-10 relative'>
            <Image className='rounded-full' src={post?.profilePic} fill={true} />
            </div>
            <div className='flex-col'>
              {post?.name}
              <div className='text-xs text-zinc-600'>{post?.timeStamp}</div>
            </div>
          </div>
          <div className='px-3 mb-3'>
            {post?.post}
          </div>
          {post.image != null && post.image !== 'null' && (<div className='h-60 md:h-96 relative p-4'>
            <Image src={post?.image} fill={true} objectFit='fill'/>
          </div>)}
          <div className='flex justify-between items-center px-12'>
            <div className='sm:scale-75 scale-95 md:-ml-8 -ml-4 mt-1 sm:mt-0'>
              <LikeButton />
            </div>
            <button className='scale-150'>
              <BiComment />
            </button>
            <button className='scale-125'>
              <FaShare />
            </button>
          </div>
        </div>
  )
}


export default Post