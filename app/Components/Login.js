"use client"
import { signIn } from 'next-auth/react'
import Spline from '@splinetool/react-spline';
import SidebarButton from './SidebarButton';
import { FaGithub } from 'react-icons/fa';

const Login = () => {

  return (

    <div className='flex items-center'>
      <Spline className='w-4/5'
        scene="https://prod.spline.design/FTBarp2l3TE5S7ZH/scene.splinecode"
      /> 
      <button className='pr-4 md:pr-0' onClick={() => signIn()}>
        <SidebarButton className='w-1/4' Icon={FaGithub} value={"Sign In using GitHub"} />
      </button>
    </div>
  
  )

}

export default Login