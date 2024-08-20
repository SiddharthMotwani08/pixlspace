"use client"

import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { FaBeer} from 'react-icons/fa'
import { RiDeleteBinFill } from "react-icons/ri";
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addPost } from '@/public/src/features/postSlice'
import PropTypes from 'prop-types';
import { CiVideoOn } from "react-icons/ci";
import { MdPermMedia } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";

const CreatePost = () => {
  const {data : session} = useSession()
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const [imagetoPost, setImagetoPost] = useState(null);
  const dispatch = useDispatch()
  
  const handleClick = () => {
      imageRef.current.click();
  }
  
  const handleImage = () => {
    setImagetoPost(null);
  }
  
  const addImagetoPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        setImagetoPost(e.target.result)
        console.log(e.target.result)
      }
     }
    }

  const FACEBOOK_URL_ENDPOINT = "http://localhost:8080/api/v1/post";
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!textRef.current.value) {
      return;
    }

    const formData = new FormData()

    formData.append("image", imagetoPost)
    formData.append("post", textRef.current.value)
    formData.append("name", session.user.name)
    formData.append("profilePic", session.user.image)

    axios.post(FACEBOOK_URL_ENDPOINT, formData, {
      headers : {Accept: "application/json"},
    }).then((response) => {
      textRef.current.value = "";
      dispatch(addPost(response.data))
      handleImage();
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <div className='flex-grow divide-y'>
      <div>
        <div className='h-[8vh] bg-zinc-200 flex gap-5 px-10 items-center rounded-t-md'>
          <div className='w-12 h-12 relative'>
            <Image src={session?.user.image} fill={true} className='rounded-full'></Image>
          </div>
          <form>
          <input className='h-8 p-5 focus:outline-none rounded-md flex-grow' placeholder="What's on your mind?" ref={textRef}></input>
          <button hidden onClick={handleSubmit}></button>
          </form>
        </div>
        {imagetoPost && (
              <div className='p-8 items-center relative bg-zinc-200 flex-grow'>
                <Image className='max-w-48 ml-6' src={imagetoPost} objectFit='contain' fill/>
                <div onClick={handleImage} className='w-8 relative h-8 cursor-pointer lg:ml-[15vw] ml-[30vw] hover:bg-red-400 rounded-full p-2'><RiDeleteBinFill/></div>
              </div>
            )} 
        <div className='bg-zinc-200 rounded-b-md md:h-[7vh] flex items-center justify-center p-2 gap-2'>
          <div className='w-1/3 h-full flex gap-4 items-center justify-center hover:bg-zinc-300 rounded-md cursor-pointer'>
            <CiVideoOn />
            <p>Live video</p>
            </div>
            <div onClick={handleClick} 
            className='w-1/3 h-full flex gap-4 items-center justify-center hover:bg-zinc-300 rounded-md cursor-pointer'>
            <MdPermMedia />
            <p>Media</p>
            <input onChange={addImagetoPost} type='file' hidden accept='image/*' ref={imageRef}></input>
            </div>
            <div className='w-1/3 h-full flex gap-4 items-center justify-center hover:bg-zinc-300 rounded-md cursor-pointer'>
            <BsEmojiSmile />
            <p>Feeling/Activity</p>
            </div>
            </div>
        </div>
        </div>
  )
}

export default CreatePost